// ExpenseChart: a doughnut chart (Recharts PieChart with an inner radius)
// that visualises how the user's monthly spending breaks down across
// categories. Each slice is colour-coded and the legend shows amounts.

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

// Fire-themed palette: warm oranges, ambers, and a green accent.
const COLORS = ['#FF6B35', '#F7931E', '#FFC93C', '#FF5722', '#C70039']

// Human-readable labels + currency formatting for the tooltip and legend.
const LABELS = {
  rent: 'Rent / Housing',
  groceries: 'Groceries',
  transportation: 'Transportation',
  entertainment: 'Entertainment',
  other: 'Other',
}

const fmt = (n) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)

function ExpenseChart({ values }) {
  // Build the chart data array from the expense fields, filtering out
  // any categories with zero spend so the chart stays uncluttered.
  const data = ['rent', 'groceries', 'transportation', 'entertainment', 'other']
    .map((key) => ({ name: LABELS[key], value: Number(values[key]) || 0 }))
    .filter((item) => item.value > 0)

  // Custom tooltip that shows the dollar amount instead of the raw number.
  const customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <span className="tooltip-name">{payload[0].name}</span>
          <span className="tooltip-value">{fmt(payload[0].value)}</span>
        </div>
      )
    }
    return null
  }

  // If there are no expenses to show, display a friendly placeholder.
  if (data.length === 0) {
    return (
      <section className="expense-chart card">
        <h2>Expense Breakdown</h2>
        <div className="chart-empty">
          <span className="empty-icon">🔥</span>
          <p>Enter some expenses above to see your spending breakdown.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="expense-chart card">
      <h2>Expense Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          {/* innerRadius > 0 turns the pie into a doughnut */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            paddingAngle={3}
            dataKey="value"
            stroke="none"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={customTooltip} />
          <Legend
            verticalAlign="bottom"
            iconType="circle"
            formatter={(value) => <span className="legend-text">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </section>
  )
}

export default ExpenseChart
