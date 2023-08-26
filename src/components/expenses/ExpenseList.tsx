/* eslint-disable array-callback-return */
import {
  IExpense
} from '../../models/interfaces/expenses/i.child.expense'
import { styled } from 'styled-components'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props: IExpense[], filteredYear: string) => {
  const returnExpenseArray: IExpense[] = []

  props.map((expense: IExpense) => {
    const filteredExepnseDate = expense['date'].toUTCString().split(' ')
    if (filteredExepnseDate[3] === filteredYear) {
      returnExpenseArray.push(expense)
    }
  })

  return {
    filteredArray: returnExpenseArray,
    filteredList:
      returnExpenseArray.length === 0 ? (
        <StyledNotFoundForm>No Expense found.</StyledNotFoundForm>
      ) : (
        returnExpenseArray.map((expense: IExpense) => {
          return (
            <StyledExpenseList>
              <ExpenseItem key={expense.id} expense={expense} />
            </StyledExpenseList>
          )
        })
      ),
  }
}

export default ExpenseList

const StyledExpenseList = styled.ul`
  list-style: none;
  padding: 0;
`

const StyledNotFoundForm = styled.p`
  color: white;
  text-align: center;
`
