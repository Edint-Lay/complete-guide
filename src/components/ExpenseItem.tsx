import './ExpenseItem.css'

interface ExpenseItemProps {
  expense: {
    id: number
    title: string
    amount: number
    date: Date
  }[]
}

function ExpenseItem(props: ExpenseItemProps) {
  const expenseItems = props.expense.map((expense) => (
    <div className="expense-item">
      <div>{expense.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{expense.title}</h2>
        <div className="expense-item__price">{expense.amount}</div>
      </div>
    </div>
  ))

  return <div>{expenseItems}</div>
}

export default ExpenseItem
