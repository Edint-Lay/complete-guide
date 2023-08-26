import { styled } from 'styled-components'
import NewExpenseForm from './NewExpenseForm'
import {
  IParentNewExpenseFormData
} from '../../models/interfaces/newExpenses/i.parent.new.expense'
import { IChildAddNewExpense } from '../../models/interfaces/newExpenses/i.child.new.expense'

const NewExpense = (props: IChildAddNewExpense) => {
  const saveExpenseDataHandler = (newExpenseData: IParentNewExpenseFormData) => {
    const expenseData = {
      data: { ...newExpenseData['data'] },
      id: Math.random().toString(),
    };

    props.addNewExpense(expenseData)
  }

  return (
    <StyledNewExpense>
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </StyledNewExpense>
  )
}

export default NewExpense

const StyledNewExpense = styled.div`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`