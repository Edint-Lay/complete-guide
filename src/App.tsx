import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense'
import { IParentNewExpenseData } from './models/interfaces/newExpenses/i.parent.new.expense'
import { useState } from 'react'
import { IExpense } from './models/interfaces/expenses/i.child.expense'

function App() {
  const [expense, setExpenses] = useState(Dummy);

  const addExpenseHandler = (newExpense: IParentNewExpenseData) => {
    const { id, data } = newExpense

    setExpenses((preNewExpense) => {
      return [{
        id,
        title: data['title'],
        amount: data['amount'],
        date: new Date(data['date'])
      }, ...preNewExpense]
    });

  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/expense"
            element={
              <>
                <NewExpense addNewExpense={addExpenseHandler} />
                <Expenses expense={expense} />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App

const Dummy : IExpense[]= [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]