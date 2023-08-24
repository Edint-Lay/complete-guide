import './ExpenseItem.css'

import React, { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../ui/Card'

interface ExpenseItemProps {
  expense: {
    id: string
    title: string
    amount: number
    date: Date
  }
}

function ExpenseItem({ ...props }: ExpenseItemProps) {

  let [title, newTitle] = useState(props['expense']['title']);

  const expenseClickHandler = () => {
    newTitle('Update');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props['expense'].date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props['expense'].amount}</div>
      </div>
      <button onClick={expenseClickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
