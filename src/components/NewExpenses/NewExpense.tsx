import React, { useState } from 'react'
import { styled } from 'styled-components'
import NewExpenseForm from './NewExpenseForm'
import {
  IParentNewExpenseFormData
} from '../../models/interfaces/newExpenses/i.parent.new.expense'
import { INewExpenseForm, IChildAddNewExpense } from '../../models/interfaces/newExpenses/i.child.new.expense'

const NewExpense = (props: IChildAddNewExpense) => {
  const saveExpenseDataHandler = (newExpenseData: IParentNewExpenseFormData) => {
    const expenseData = {
      ...newExpenseData['data'],
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

const StyledNewExpenseButton = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  &:active {
    background-color: #510674;
    border-color: #510674;
  }
`

const StyledNewExpenseAlternativeButton = styled.button`
  color: #220131;
  border-color: transparent;
  background-color: transparent;

  &:hover,
  &:active {
    background-color: #ddb3f8;
  }
`
