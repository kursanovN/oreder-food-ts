import { styled, Fab, Grid, IconButton } from '@mui/material'
import { AdminHeader } from './AdminHeader'
import { AdminTable } from './AdminTable'
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { AppDispatch } from '../../store'
import { getFoods } from '../../store/meals/meals.thunk'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { IColumnTable, IEditFormValues, IMeals } from '../../common/types/types'
import { deleteAdminFoods } from '../../store/admin/admin.thunk'
import { ActionsTypeSnackbar } from '../../store/snackbar/snackbar.slice'
import { useSearchParams } from 'react-router-dom'
import MealModal from './MealModal'

export const AdminLayout = () => {
  const [editData, setEditData] = useState<IEditFormValues>()
  const dispatch = useDispatch<AppDispatch>()
  const [open, setOpen] = useSearchParams()

  const closeModal = () => {
    open.delete('modal')
    open.delete('mealId')
    setOpen(open)
  }

  const openModalHandler = (mode: string) => {
    open.set('modal', mode)
    setOpen(open)
  }

  const deleteAdminFoodsHandler = async (id: string) => {
    try {
      const response = await dispatch(deleteAdminFoods(id)).unwrap()
      const data: string = response.data.message

      dispatch(ActionsTypeSnackbar.doSuccess(data))
    } catch (error) {
      if (error instanceof Error && error.message) {
        dispatch(ActionsTypeSnackbar.doError(error.message))
      } else {
        dispatch(ActionsTypeSnackbar.doError('Something went wrong'))
      }
    }
  }

  const editMealHandler = (data: IMeals) => {
    setEditData(data)
    openModalHandler('edit')
    open.set('mealId', data._id)
    setOpen(open)
  }

  const columns: IColumnTable[] = [
    {
      header: '№',
      key: '_id',
      index: true,
    },
    {
      header: 'Title',
      key: 'title',
    },
    {
      header: 'Description',
      key: 'description',
      fontWeight: 400,
    },
    {
      header: 'Price',
      key: 'price',
      color: '#ad5502',
      number: true,
      fontWeight: 600,
    },
    {
      header: 'Actions',
      key: 'actions',
      render: (meal) => {
        return (
          <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={() => editMealHandler(meal)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteAdminFoodsHandler(meal._id)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        )
      },
    },
  ]

  useEffect(() => {
    dispatch(getFoods())
  }, [dispatch])

  return (
    <>
      <MealModal open={open} onClose={closeModal} editData={editData} />
      <AdminHeader />

      <main style={{ marginTop: '120px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AdminTable columns={columns} />
        </div>
        <AddContainer>
          <ContainerIcon
            onClick={() => openModalHandler('add')}
            color="primary"
            aria-label="add"
          >
            <AddIcon sx={{ fontSize: '50px' }} />
          </ContainerIcon>
        </AddContainer>
      </main>
    </>
  )
}

const ContainerIcon = styled(Fab)`
  color: #fff;
  width: 76px;
  height: 76px;
  background-color: #8a2b06;

  &:hover {
    background-color: #a83508;
  }
`

const AddContainer = styled('div')`
  position: fixed;
  top: 84%;
  left: 48%;
  z-index: 100;
  animation: pulse 3s linear infinite;
  border-radius: 50%;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(138, 43, 6, 0.427),
        0 0 0 0 rgba(138, 43, 6, 0.604);
    }
    40% {
      box-shadow: 0 0 0 50px rgba(38, 186, 48, 0),
        0 0 0 0 rgba(138, 43, 6, 0.423);
    }
    80% {
      box-shadow: 0 0 0 50px rgba(23, 181, 81, 0),
        0 0 0 30px rgba(9, 210, 42, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(3, 178, 17, 0), 0 0 0 30px rgba(2, 197, 61, 0);
    }
  }
`
