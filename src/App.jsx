import React, { useState, useEffect } from 'react'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Summary from './components/Summary'
import Charts from './components/Charts'
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([])

  // Load transactions from localStorage on mount
  useEffect(() => {
    const savedTransactions = localStorage.getItem('financeTransactions')
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions))
    }
  }, [])

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('financeTransactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now(),
      ...transaction,
      date: new Date().toLocaleDateString()
    }
    setTransactions([newTransaction, ...transactions])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const clearAllTransactions = () => {
    if (window.confirm('Are you sure you want to clear all transactions?')) {
      setTransactions([])
    }
  }

  // Calculate totals
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + parseFloat(t.amount), 0)

  const expenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + parseFloat(t.amount), 0)

  const balance = income - expenses

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Finance Tracker Dashboard</h1>
        <p>Track your income and expenses with beautiful charts</p>
      </header>

      <Summary income={income} expenses={expenses} balance={balance} />

      <div className="main-content">
        <div className="left-section">
          <TransactionForm onAddTransaction={addTransaction} />
          <TransactionList 
            transactions={transactions} 
            onDeleteTransaction={deleteTransaction}
            onClearAll={clearAllTransactions}
          />
        </div>

        <div className="right-section">
          <Charts transactions={transactions} />
        </div>
      </div>
    </div>
  )
}

export default App
