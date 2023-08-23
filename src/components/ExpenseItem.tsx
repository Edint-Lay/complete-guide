import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from './Card'

interface ExpenseItemProps {
  expense: {
    id: number
    title: string
    amount: number
    date: Date
  }
}

const ExpenseItem:React.FC<ExpenseItemProps> = (expenseItemProp: ExpenseItemProps) => {
  const expenseItems =
    <div className="expense-item">
      <ExpenseDate date={expenseItemProp['expense']['date']} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{expenseItemProp['expense']['title']}</h2>
        <div className="expense-item__price">{expenseItemProp['expense']['amount']}</div>
      </div>
    </div>
  

  return <div>{expenseItems}</div> 
}

export default ExpenseItem
