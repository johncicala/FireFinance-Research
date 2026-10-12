import { useState } from 'react'


function SavingsGoal({ remainingIncome }) {
  const [goal, setGoal] = useState(1000)

  const progress = goal > 0
    ? Math.min(100, Math.max(0, (remainingIncome / goal) * 100))
    : 0

  return (
    <section className="card">
      <h2>Monthly Savings Goal</h2>

      <p className="goal-description">
  How much would you like to save this month?
</p>

<label className="goal-label" htmlFor="savingsGoal">
  YOUR SAVINGS TARGET
</label>

<div className="goal-input-wrapper">
  <span className="goal-dollar">$</span>
  <input
    id="savingsGoal"
    className="goal-input"
    type="number"
    min="0"
    value={goal}
    onChange={(e) => setGoal(Number(e.target.value))}
  />
</div>

    <button
  type="button"
  className="goal-reset-btn"
  onClick={() => setGoal(1000)}
>
  ↺ Reset Savings Goal
</button>
      <p>Goal Progress: {progress.toFixed(1)}%</p>

      <progress value={progress} max="100" />

      <p>
        {remainingIncome >= goal
          ? "Congratulations! You reached your savings goal!"
          : "Keep saving! You're working toward your goal."}
      </p>
    </section>
  )
}

export default SavingsGoal