import React from 'react'
import './Summary.css'

function Summary({ income, expenses, balance }) {
  return (
    <div className="summary">
      <div className="summary-card income-card">
        <div className="card-icon">💵</div>
        <div className="card-content">
          <h3>Total Income</h3>
          <p className="amount">${income.toFixed(2)}</p>
        </div>
      </div>

      <div className="summary-card expense-card">
        <div className="card-icon">💸</div>
        <div className="card-content">
          <h3>Total Expenses</h3>
          <p className="amount">${expenses.toFixed(2)}</p>
        </div>
      </div>

      <div className={`summary-card balance-card ${balance >= 0 ? 'positive' : 'negative'}`}>
        <div className="card-icon">{balance >= 0 ? '💰' : '⚠️'}</div>
        <div className="card-content">
          <h3>Balance</h3>
          <p className="amount">${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default Summary
