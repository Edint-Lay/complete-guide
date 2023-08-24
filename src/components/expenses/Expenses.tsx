import Card from '../ui/Card'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

interface Expense {
  id: string
  title: string
  amount: number
  date: Date
}

interface ExpensesProps {
  expense: Expense[]
}

function Expenses(props: ExpensesProps) {
  return (
    <Card className="expenses">
      {props.expense.map((expense : Expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Card>
  )
}

export default Expenses
