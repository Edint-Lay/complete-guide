import React, { ChangeEvent } from 'react'
import { styled } from 'styled-components'

import { IChildExpenseSelectedProps } from '../../models/interfaces/expenses/i.child.expense'

const ExpensesFilter = (props: IChildExpenseSelectedProps) => {
  const dropdownChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event['target']['value'])
  }

  return (
    <StyledExpenseFilter>
      <StyledExpenseFilterControl>
        <StyledExpenseFilterLabel>Filter by year</StyledExpenseFilterLabel>
        <StyledExpenseFliterSelect
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </StyledExpenseFliterSelect>
      </StyledExpenseFilterControl>
    </StyledExpenseFilter>
  )
}

export default ExpensesFilter

const StyledExpenseFilter = styled.div`
  color: white;
  padding: 0 1rem;
`

const StyledExpenseFilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`

const StyledExpenseFilterLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const StyledExpenseFliterSelect = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`
