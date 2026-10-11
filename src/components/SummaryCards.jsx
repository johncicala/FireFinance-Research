// SummaryCards: displays three key metrics derived from the user's inputs.
// All three values are calculated in App.jsx and passed in as props so this
// component stays purely presentational.

// Helper: format a number as US currency with no decimals.
const fmt = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)

function SummaryCards({ totalExpenses, remainingIncome, savingsRate }) {
  return (
    <section className="summary-cards">
      {/* Total Expenses */}
      <div className="summary-card card">
        <span className="summary-label">Total Expenses</span>
        <span className="summary-value">{fmt(totalExpenses)}</span>
      </div>

      {/* Remaining Income — turns red when negative */}
      <div className={`summary-card card ${remainingIncome < 0 ? 'negative' : 'positive'}`}>
        <span className="summary-label">Remaining Income</span>
        <span className="summary-value">{fmt(remainingIncome)}</span>
      </div>

      {/* Savings Rate — percentage of income kept after expenses */}
      <div className={`summary-card card ${savingsRate < 0 ? 'negative' : 'positive'}`}>
        <span className="summary-label">Savings Rate</span>
        <span className="summary-value">{savingsRate.toFixed(1)}%</span>
      </div>
    </section>
  )
}

export default SummaryCards
