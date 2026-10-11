// WarningBanner: a prominent alert shown only when total expenses exceed
// monthly income. It renders as null (nothing) when the budget is balanced.

function WarningBanner({ expensesExceedIncome }) {
  if (!expensesExceedIncome) return null

  return (
    <div className="warning-banner" role="alert">
      <span className="warning-icon" role="img" aria-label="warning">
        ⚠️
      </span>
      <div className="warning-text">
        <strong>Expenses exceed your income!</strong>
        <p>
          You are spending more than you earn this month. Review your expenses
          and reduce spending where you can.
        </p>
      </div>
    </div>
  )
}

export default WarningBanner
