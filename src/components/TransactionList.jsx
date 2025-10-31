import React from 'react'
import './TransactionList.css'

function TransactionList({ transactions, onDeleteTransaction, onClearAll }) {
  if (transactions.length === 0) {
    return (
      <div className="transaction-list-container">
        <h2>Transaction History</h2>
        <div className="empty-state">
          <p className="empty-icon">📊</p>
          <p>No transactions yet. Add your first transaction above!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="transaction-list-container">
      <div className="list-header">
        <h2>Transaction History</h2>
        <button onClick={onClearAll} className="clear-btn">
          Clear All
        </button>
      </div>
      
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div 
            key={transaction.id} 
            className={`transaction-item ${transaction.type}`}
          >
            <div className="transaction-info">
              <div className="transaction-main">
                <span className="transaction-description">
                  {transaction.description}
                </span>
                <span className="transaction-category">
                  {transaction.category}
                </span>
              </div>
              <div className="transaction-meta">
                <span className="transaction-date">{transaction.date}</span>
              </div>
            </div>
            
            <div className="transaction-right">
              <span className={`transaction-amount ${transaction.type}`}>
                {transaction.type === 'income' ? '+' : '-'}
                ${transaction.amount.toFixed(2)}
              </span>
              <button 
                onClick={() => onDeleteTransaction(transaction.id)}
                className="delete-btn"
                aria-label="Delete transaction"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionList
