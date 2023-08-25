import './ExpenseItem.css'

import React, { useState } from 'react'

import ExpenseDate from './ExpenseDate'
import Card from '../ui/Card'

import { IChildExpenseItemProps } from '../../models/interfaces/expenses/i.child.expense'

function ExpenseItem({ ...props }: IChildExpenseItemProps) {
  const [title, newTitle] = useState(props['expense']['title'])

  const expenseClickHandler = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let randomText = ''

    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomText += characters.charAt(randomIndex)
    }

    newTitle(randomText)
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
