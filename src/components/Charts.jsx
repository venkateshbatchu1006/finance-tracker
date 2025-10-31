import React, { useMemo } from 'react'
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import './Charts.css'

const COLORS = ['#667eea', '#764ba2', '#11998e', '#38ef7d', '#ee0979', '#ff6a00', '#f093fb', '#f5576c']

function Charts({ transactions }) {
  // Prepare data for bar chart (Income vs Expenses over time)
  const barChartData = useMemo(() => {
    const data = [
      { name: 'Income', amount: 0 },
      { name: 'Expenses', amount: 0 }
    ]
    
    transactions.forEach(t => {
      if (t.type === 'income') {
        data[0].amount += t.amount
      } else {
        data[1].amount += t.amount
      }
    })
    
    return data
  }, [transactions])

  // Prepare data for pie chart (Expenses by category)
  const pieChartData = useMemo(() => {
    const categoryMap = {}
    
    transactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        if (categoryMap[t.category]) {
          categoryMap[t.category] += t.amount
        } else {
          categoryMap[t.category] = t.amount
        }
      })
    
    return Object.entries(categoryMap).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2))
    }))
  }, [transactions])

  // Prepare data for income pie chart
  const incomePieData = useMemo(() => {
    const categoryMap = {}
    
    transactions
      .filter(t => t.type === 'income')
      .forEach(t => {
        if (categoryMap[t.category]) {
          categoryMap[t.category] += t.amount
        } else {
          categoryMap[t.category] = t.amount
        }
      })
    
    return Object.entries(categoryMap).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2))
    }))
  }, [transactions])

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].name}</p>
          <p className="value">${payload[0].value.toFixed(2)}</p>
        </div>
      )
    }
    return null
  }

  if (transactions.length === 0) {
    return (
      <div className="charts-container">
        <div className="empty-charts">
          <p className="empty-icon">📈</p>
          <p>Add transactions to see beautiful charts!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="charts-container">
      {/* Bar Chart */}
      <div className="chart-card">
        <h3>Income vs Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" fill="#667eea" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Expense Pie Chart */}
      {pieChartData.length > 0 && (
        <div className="chart-card">
          <h3>Expenses by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="legend">
            {pieChartData.map((entry, index) => (
              <div key={entry.name} className="legend-item">
                <span 
                  className="legend-color" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="legend-text">
                  {entry.name}: ${entry.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Income Pie Chart */}
      {incomePieData.length > 0 && (
        <div className="chart-card">
          <h3>Income by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={incomePieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {incomePieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="legend">
            {incomePieData.map((entry, index) => (
              <div key={entry.name} className="legend-item">
                <span 
                  className="legend-color" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="legend-text">
                  {entry.name}: ${entry.value.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Charts
