import { useState, ChangeEvent } from 'react'
import { IColumnTable, IMeals } from '../common/types/types'

export const useClientSidePagination = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(8)

  const handleChangePage = (newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
  }

  const paginate = (rows: IMeals[]) => {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  }

  const styleHeaderMeals = (column: IColumnTable) => {
    return column.color || column.fontStyle
      ? {
          color: '#ad5502',
          fontStyle: 'italic',
          fontSize: '1.4rem',
          fontWeight: 600,
        }
      : { fontSize: '1.4rem', fontWeight: 600 }
  }

  const styleBodyMeals = (column: IColumnTable) => {
    return column.color || column.fontStyle
      ? {
          color: column.color,
          fontStyle: column.fontStyle,
          fontWeight: column.fontWeight,
          fontSize: '1.4rem',
        }
      : { fontSize: '1.4rem', fontWeight: 500 }
  }

  const resultAdminMeals = (
    column: IColumnTable,
    rowIndex: number,
    row: IMeals
  ) => {
    const value = column.index ? rowIndex + 1 : row[column.key]

    const resultMeals = column.number ? `${row[column.key]}$` : value

    return resultMeals
  }

  const resultAdminOrders = (
    column: IColumnTable,
    rowIndex: number,
    row: IMeals
  ) => {
    const value = column.index ? rowIndex + 1 : row[column.key]

    const resultMeals = column.number ? `${row[column.key]}$` : value

    return resultMeals
  }

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginate,
    styleBodyMeals,
    styleHeaderMeals,
    resultAdminMeals,
    resultAdminOrders,
  }
}
