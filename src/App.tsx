import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Expenses from './components/expenses/Expenses'
import PracMain from './components/prac1/PracMain'

const expense = [
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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/expense" element={<Expenses expense={expense} />}></Route>
          <Route path='/prac' element={<PracMain></PracMain>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
