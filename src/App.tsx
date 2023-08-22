import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import ExpenseItem from './components/ExpenseItem'
import LectureHistory from './components/LectureHistory'

function App() {
  const expense = [
    {
      id: 1,
      title: 'Toilet Paper',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 2,
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 3,
      title: 'New Television',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    }
  ]
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/memo" element={<LectureHistory />} />
          <Route path="/" element={<ExpenseItem expense={expense} />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
