import Card from '../ui/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'
import './Expenses.css'

import { IExpense } from '../../models/interfaces/expenses/i.child.expense'
import { TSelectedYear } from '../../models/types/t.expense'
import { useState } from 'react'
import { styled } from 'styled-components'

function Expenses({expense} : {expense : IExpense[]}) {
  const [filteredYear, setFilteredYear] = useState('2020')
  let filterInfoText = '2019, 2021 & 2022'

  if (filteredYear === '2019') filterInfoText = '2020, 2021 & 2022'
  else if (filteredYear === '2020') filterInfoText = '2019, 2021 & 2022'
  else if (filteredYear === '2021') filterInfoText = '2019, 2020 & 2022'

  const filterChangeHandler = (selectedYear: TSelectedYear) => {
    setFilteredYear(selectedYear)
  }

  const { filteredList, filteredArray } = ExpenseList(expense, filteredYear)

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expense={filteredArray}></ExpenseChart>
      <StyledFilterInfoText>
        Data for year {filterInfoText} is Hidden
      </StyledFilterInfoText>
      {filteredList}
    </Card>
  )
}

export default Expenses

const StyledFilterInfoText = styled.p`
  color: white;
`
