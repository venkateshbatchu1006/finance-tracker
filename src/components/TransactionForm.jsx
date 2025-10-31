import React, { useState } from 'react'
import './TransactionForm.css'

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')
  const [category, setCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!description.trim() || !amount || !category.trim()) {
      alert('Please fill in all fields')
      return
    }

    if (parseFloat(amount) <= 0) {
      alert('Amount must be greater than 0')
      return
    }

    onAddTransaction({
      description: description.trim(),
      amount: parseFloat(amount),
      type,
      category: category.trim()
    })

    // Reset form
    setDescription('')
    setAmount('')
    setCategory('')
  }

  return (
    <div className="transaction-form-container">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <div className="type-selector">
            <button
              type="button"
              className={`type-btn ${type === 'income' ? 'active income' : ''}`}
              onClick={() => setType('income')}
            >
              💵 Income
            </button>
            <button
              type="button"
              className={`type-btn ${type === 'expense' ? 'active expense' : ''}`}
              onClick={() => setType('expense')}
            >
              💸 Expense
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="e.g., Salary, Groceries, Rent"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount ($)</label>
          <input
            type="number"
            id="amount"
            placeholder="0.00"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            placeholder="e.g., Food, Transport, Entertainment"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm
