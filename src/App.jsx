import { useState } from 'react'
import Header from './components/Header'
import BudgetForm from './components/BudgetForm'
import SummaryCards from './components/SummaryCards'
import ExpenseChart from './components/ExpenseChart'
import SavingsTip from './components/SavingsTip'
import WarningBanner from './components/WarningBanner'
import './App.css'
import SavingsGoal from './components/SavingsGoal'

// Sample values used on first load and when the Reset button is pressed.
const SAMPLE_VALUES = {
  income: 4000,
  rent: 1200,
  groceries: 400,
  transportation: 200,
  entertainment: 150,
  subscriptions: 50,
  other: 250,
}

function App() {
  // Single state object holds every budget input. Using one object keeps the
  // state simple and makes it easy to reset or pass to child components.
  const [values, setValues] = useState(SAMPLE_VALUES)

  // --- Derived calculations (recomputed on every render) ---

  // Sum of all six expense categories.
  const totalExpenses =
    (Number(values.rent) || 0) +
    (Number(values.groceries) || 0) +
    (Number(values.transportation) || 0) +
    (Number(values.entertainment) || 0) +
    (Number(values.subscriptions) || 0) +
    (Number(values.other) || 0)

  // What's left after expenses this month.
  const income = Number(values.income) || 0
  const remainingIncome = income - totalExpenses

  // Savings rate = remaining income ÷ income, expressed as a percentage.
  // Guard against division by zero when income is empty or zero.
  const savingsRate = income > 0 ? (remainingIncome / income) * 100 : 0

  // Boolean flag drives the warning banner.
  const expensesExceedIncome = income > 0 && totalExpenses > income

  // Reset handler: restore the sample values.
  const handleReset = () => setValues(SAMPLE_VALUES)

  return (
    <div className="app">
      <Header />

      <main className="dashboard">
        <WarningBanner expensesExceedIncome={expensesExceedIncome} />

        <SummaryCards
          totalExpenses={totalExpenses}
          remainingIncome={remainingIncome}
          savingsRate={savingsRate}
        />

        <div className="dashboard-grid">
          <BudgetForm
            values={values}
            onChange={setValues}
            onReset={handleReset}
          />
          <ExpenseChart values={values} />
        </div>
        <SavingsGoal remainingIncome={remainingIncome} />
        <SavingsTip savingsRate={savingsRate} />
      </main>

      <footer className="app-footer">
        <p>
          FireFinance is a university capstone prototype for personal finance
          education. It does not connect to real bank accounts and does not
          provide investment advice.
        </p>
      </footer>
    </div>
  )
}

export default App
