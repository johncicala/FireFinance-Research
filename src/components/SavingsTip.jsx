// SavingsTip: shows a short, educational tip based on the user's current
// savings rate. This is general financial-education content for a university
// capstone prototype — NOT personalised investment advice.

function SavingsTip({ savingsRate }) {
  // Pick a tip that matches the savings-rate bracket.
  let tip
  if (savingsRate < 0) {
    tip =
      'Your expenses exceed your income. Start by reviewing your two largest expense categories and look for quick cuts. Even small reductions compound over time.'
  } else if (savingsRate < 10) {
    tip =
      'You are saving less than 10% of your income. A common guideline is the 50/30/20 rule: roughly 50% for needs, 30% for wants, and 20% for savings. Try trimming discretionary spending to reach 10-20%.'
  } else if (savingsRate < 20) {
    tip =
      'Nice work — you are saving 10-20% of your income. Consider directing part of your savings toward an emergency fund covering 3-6 months of expenses before investing.'
  } else {
    tip =
      'Excellent — you are saving over 20% of your income! If you have an emergency fund, you could explore learning about diversified, low-cost index funds. Remember: this is general education, not investment advice.'
  }

  return (
    <section className="savings-tip card">
      <div className="tip-header">
        <span className="tip-icon" role="img" aria-label="lightbulb">
          💡
        </span>
        <h2>Educational Savings Tip</h2>
      </div>
      <p className="tip-text">{tip}</p>
      <p className="tip-disclaimer">
        This tip is general educational content for a university capstone
        prototype and is not financial or investment advice.
      </p>
    </section>
  )
}

export default SavingsTip
