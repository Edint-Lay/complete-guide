import './ExpenseDate.css'

interface ExpenseDateProps {
  date: Date
}

function ExpenseDate(props: ExpenseDateProps) {
  const monthOptions: Intl.DateTimeFormatOptions = { month: 'long' }
  const dayOptions: Intl.DateTimeFormatOptions = { day: '2-digit' }

  return (
    <div className='expense-date'>
      <div className='expense-date__year'>{props['date'].getFullYear().toLocaleString('en-US')}</div>
      <div className='expense-date__month'>{props['date'].toLocaleDateString('en-US', monthOptions)}</div>
      <div className='expense-date__day'>{props['date'].toLocaleDateString('en-US', dayOptions)}</div>
    </div>
  )
}

export default ExpenseDate
