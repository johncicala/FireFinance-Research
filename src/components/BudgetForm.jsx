// BudgetForm: a controlled form that lets the user enter monthly income and
// six expense categories. Every input calls the parent's onChange handler so
// the App component stays the single source of truth for all budget values.

// The expense fields we collect, in display order.
const EXPENSE_FIELDS = [
  { key: 'rent', label: 'Rent / Housing', icon: '🏠' },
  { key: 'groceries', label: 'Groceries', icon: '🛒' },
  { key: 'transportation', label: 'Transportation', icon: '🚗' },
  { key: 'entertainment', label: 'Entertainment', icon: '🎬' },
  { key: 'subscriptions', label: 'Subscriptions', icon: '📱' },
  { key: 'other', label: 'Other Expenses', icon: '📦' },
]

function BudgetForm({ values, onChange, onReset }) {
  // Generic handler: update one field in the parent state object.
  const handleChange = (field) => (e) => {
    // Empty string lets the user clear the field; otherwise parse to a number.
    const raw = e.target.value
    onChange({ ...values, [field]: raw === '' ? '' : Number(raw) })
  }

  return (
    <section className="budget-form card">
      <div className="card-header">
        <h2>Monthly Budget Inputs</h2>
        <button type="button" className="reset-btn" onClick={onReset}>
          ↺ Reset to Sample Values
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* --- Income --- */}
        <div className="form-group income-group">
          <label htmlFor="income">Monthly Income</label>
          <div className="input-wrapper">
            <span className="currency-prefix">$</span>
            <input
              id="income"
              type="number"
              min="0"
              step="any"
              value={values.income}
              onChange={handleChange('income')}
              placeholder="0"
            />
          </div>
        </div>

        <div className="divider" />

        {/* --- Expenses --- */}
        <h3 className="expenses-title">Expenses</h3>
        <div className="expense-grid">
          {EXPENSE_FIELDS.map(({ key, label, icon }) => (
            <div className="form-group" key={key}>
              <label htmlFor={key}>
                <span className="field-icon">{icon}</span> {label}
              </label>
              <div className="input-wrapper">
                <span className="currency-prefix">$</span>
                <input
                  id={key}
                  type="number"
                  min="0"
                  step="any"
                  value={values[key]}
                  onChange={handleChange(key)}
                  placeholder="0"
                />
              </div>
            </div>
          ))}
        </div>
      </form>
    </section>
  )
}

export default BudgetForm
