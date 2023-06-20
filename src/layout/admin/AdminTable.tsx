import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  styled,
} from '@mui/material'
import { useClientSidePagination } from '../../hooks/useClientSidePagination'
import { IColumnTable, IMeals } from '../../common/types/types'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

interface IProps {
  columns: IColumnTable[]
}

export const AdminTable = ({ columns }: IProps) => {
  const {
    styleBodyMeals,
    styleHeaderMeals,
    resultAdminMeals,
    paginate,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useClientSidePagination()

  const { meals } = useSelector((state: RootState) => state.meals)

  const id = (id: IMeals) => {
    return id._id
  }

  const withPagination = true

  return (
    <Container>
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={() => styleHeaderMeals(column)}
                    key={column.key}
                    align="center"
                  >
                    {column.header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginate(meals).map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={id(row)}>
                    {columns.map((column) => {
                      if (column.render) {
                        return (
                          <TableCell key={column.key}>
                            {column.render(row)}
                          </TableCell>
                        )
                      }

                      return (
                        <TableCell
                          key={column.key}
                          align="center"
                          sx={() => styleBodyMeals(column)}
                        >
                          {resultAdminMeals(column, rowIndex, row)}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {withPagination && (
          <TablePagination
            rowsPerPageOptions={[8, 12, 100]}
            sx={{ fontSize: '1.2rem' }}
            component="div"
            count={meals.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, newPage) => handleChangePage(newPage)}
            onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
          />
        )}
      </Paper>
    </Container>
  )
}

const Container = styled('div')`
  width: 90%;
  margin-top: 40px;
`
