import { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import {
  IChildNewExpenseProps,
  INewExpenseForm,
} from '../../models/interfaces/newExpenses/i.child.new.expense'
import { TInputEvent } from '../../models/types/t.new.expense'

const NewExpenseForm = (props: IChildNewExpenseProps) => {
  const [userInput, setInputValue] = useState<INewExpenseForm>({
    title: '',
    amount: 0,
    date: '',
  })

  const titleChangeHandler = (event: TInputEvent) => {
    const titleValue = event['target']['value']
    setInputValue((preState) => {
      return { ...preState, originTitle: titleValue }
    })
  }
  const amountChangeHandler = (event: TInputEvent) => {
    const amountValue = event['target']['value']
    setInputValue((preState) => {
      return { ...preState, originAmount: amountValue }
    })
  }
  const dateChangeHandler = (event: TInputEvent) => {
    const dateValue = event['target']['value']
    setInputValue((preState) => {
      return { ...preState, originDate: dateValue }
    })
  }

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault()

    const { amount, date, title } = userInput
    const expenseData = {
      data: {
        title,
        amount,
        date: new Date(date),
      }
    };

    setInputValue({
      amount: 0,
      date: '',
      title: '',
    })

    const { onSaveExpenseData } = props

    onSaveExpenseData(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <StyledNewExpenseControls>
        <div>
          <StyledNewExpenseControlLabel>Title</StyledNewExpenseControlLabel>
          <StyledNewExpenseControlInput
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div>
          <StyledNewExpenseControlLabel>Amount</StyledNewExpenseControlLabel>
          <StyledNewExpenseControlInput
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <StyledNewExpenseControlLabel>Date</StyledNewExpenseControlLabel>
          <StyledNewExpenseControlInput
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </StyledNewExpenseControls>
      <StyledNewExpenseActions>
        <button type="submit">Add Expense</button>
      </StyledNewExpenseActions>
    </form>
  )
}

export default NewExpenseForm

const StyledNewExpenseControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`

const StyledNewExpenseControlLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`
const StyledNewExpenseControlInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`

const StyledNewExpenseActions = styled.div`
  text-align: right;
`

/**  잘못된 상태 저장 방식 */
//   const [originTitle, inputTitle] = useState('')
//   const [originAmount, inputAmount] = useState('')
//   const [originDate, inputDate] = useState('')

//   const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const titleValue = event['target']['value']
//     inputTitle(titleValue)
//   }
//   const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const amountValue = event['target']['value']
//     inputAmount(amountValue)
//   }
//   const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const dateValue = event['target']['value']
//     inputDate(dateValue)
//   }
