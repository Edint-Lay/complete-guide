import Card from '../ui/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

import { IChildExpenseProps, IExpense } from '../../models/interfaces/expenses/i.child.expense'
import { TSelectedYear } from '../../models/types/t.expense'
import { useState } from 'react'
import ExpensesFilter from './ExpenseFilter'
import { styled } from 'styled-components'

function Expenses(props: IChildExpenseProps) {
  const [filteredYear, setFilteredYear] = useState('2020')
  let filterInfoText = '2019, 2021 & 2022';

  if (filteredYear === '2019') filterInfoText = '2020, 2021 & 2022'
    else if (filteredYear === '2020') filterInfoText = '2019, 2021 & 2022'
    else if (filteredYear === '2021') filterInfoText = '2019, 2020 & 2022'
    else {
      console.log("Helllllllllo");
      
    }

  const filterChangeHandler = (selectedYear: TSelectedYear) => {
    setFilteredYear(selectedYear)
    
    console.log("Hi:", selectedYear);
    
  };

  console.log("Hello:", filterInfoText);
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <StyledFilterInfoText>Data for year {filterInfoText} is Hidden</StyledFilterInfoText>
      {props.expense.map((expense: IExpense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  )
}

export default Expenses

const StyledFilterInfoText = styled.p`
  color: white;
`