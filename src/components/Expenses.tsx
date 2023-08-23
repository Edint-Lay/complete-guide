import { styled } from 'styled-components'
import Card from './Card'
import ExpenseItem from './ExpenseItem'

interface ExpensesProps {
  expense: {
    id: number
    title: string
    amount: number
    date: Date
  }[]
}

function Expenses(props: ExpensesProps) {
  const expenses = props.expense.map((expense) => {
    
    <ExpenseItem expense={expense} />
  })
  return <Card className="expenses">{expenses}</Card>
}

const StCard = styled.div`
    width : 100px;
`;

export default Expenses
