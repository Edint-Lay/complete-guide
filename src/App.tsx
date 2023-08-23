import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses'

function App() {
  const date = new Date()
  const expense = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 294.67,
      date: date,
    },
    {
      id: 2,
      title: 'Car Insurance',
      amount: 294.67,
      date: date,
    },
    {
      id: 3,
      title: 'New Television',
      amount: 294.67,
      date: date,
    }
  ]
  return (
    <Router>
      <div className="App">
        <h2>Let's get started!</h2>
        <Routes>
          <Route path="/" element={<Expenses expense={expense} />} ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
