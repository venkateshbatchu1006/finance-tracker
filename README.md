# 💰 Finance Tracker Dashboard

A beautiful and modern finance tracking application built with React and Recharts. Track your income and expenses with interactive charts and persistent local storage.

![Finance Tracker](https://img.shields.io/badge/React-18.2.0-blue)
![Recharts](https://img.shields.io/badge/Recharts-2.10.3-green)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)

## ✨ Features

- **💵 Income & Expense Tracking**: Add, view, and delete transactions
- **📊 Interactive Charts**: 
  - Bar chart showing income vs expenses
  - Pie charts for expense and income breakdown by category
- **💾 Local Storage**: All data persists in your browser
- **🎨 Modern UI**: Beautiful gradient design with smooth animations
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile
- **⚡ Fast**: Built with Vite for lightning-fast development

## 🎯 Learning Goals Covered

- ✅ **Controlled Inputs**: All form inputs use React state management
- ✅ **Chart Integration**: Recharts library for bar and pie charts
- ✅ **React Hooks**: useState, useEffect, and useMemo
- ✅ **Local Storage**: Persistent data storage in browser
- ✅ **Component Architecture**: Modular and reusable components

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
finance-tracker-dashboard/
├── src/
│   ├── components/
│   │   ├── TransactionForm.jsx      # Form to add transactions
│   │   ├── TransactionForm.css
│   │   ├── TransactionList.jsx      # List of all transactions
│   │   ├── TransactionList.css
│   │   ├── Summary.jsx              # Summary cards (income, expenses, balance)
│   │   ├── Summary.css
│   │   ├── Charts.jsx               # Bar and pie charts
│   │   └── Charts.css
│   ├── App.jsx                      # Main app component
│   ├── App.css
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Components Overview

### App.jsx
- Main component managing global state
- Handles transaction CRUD operations
- Calculates income, expenses, and balance
- Manages localStorage persistence

### TransactionForm
- Controlled form inputs for adding transactions
- Type selector (Income/Expense)
- Input validation
- Clean, modern UI with gradient buttons

### TransactionList
- Displays all transactions in reverse chronological order
- Delete individual transactions
- Clear all transactions
- Scrollable list with custom styling

### Summary
- Three summary cards showing:
  - Total Income
  - Total Expenses
  - Current Balance
- Color-coded with icons

### Charts
- Bar chart: Income vs Expenses comparison
- Pie chart: Expenses breakdown by category
- Pie chart: Income breakdown by category
- Interactive tooltips
- Responsive design

## 🛠️ Technologies Used

- **React 18.2.0**: UI library
- **Recharts 2.10.3**: Charting library
- **Vite 5.0.8**: Build tool and dev server
- **CSS3**: Modern styling with gradients and animations
- **LocalStorage API**: Data persistence

## 💡 Usage Tips

1. **Add a Transaction**: 
   - Select Income or Expense
   - Enter description, amount, and category
   - Click "Add Transaction"

2. **View Charts**: 
   - Charts automatically update as you add transactions
   - Hover over charts for detailed information

3. **Delete Transactions**: 
   - Click the trash icon on any transaction
   - Or use "Clear All" to remove all transactions

4. **Data Persistence**: 
   - All data is saved automatically to localStorage
   - Your data persists even after closing the browser

## 🎓 Key React Concepts Demonstrated

### Controlled Components
```jsx
const [description, setDescription] = useState('')
<input 
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>
```

### useEffect for Side Effects
```jsx
useEffect(() => {
  localStorage.setItem('financeTransactions', JSON.stringify(transactions))
}, [transactions])
```

### useMemo for Performance
```jsx
const pieChartData = useMemo(() => {
  // Expensive calculation
  return processedData
}, [transactions])
```

### Props and State Management
- Parent-child component communication
- Callback props for event handling
- State lifting for shared data

## 🌟 Future Enhancements

- [ ] Add date range filtering
- [ ] Export data to CSV
- [ ] Multiple currency support
- [ ] Budget goals and alerts
- [ ] Dark mode toggle
- [ ] Monthly/yearly view toggle
- [ ] Search and filter transactions

## 📝 License

This project is open source and available for learning purposes.

## 🤝 Contributing

Feel free to fork this project and make your own improvements!

---

**Happy Tracking! 💰📊**
