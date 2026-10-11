# FireFinance Budget Dashboard

A beginner-friendly personal finance and investment education prototype built as a university capstone project. The dashboard lets users enter their monthly income and expenses, then automatically calculates totals, remaining income, and a savings rate — all visualised with a fire-themed dark navy interface.

> **Disclaimer:** This application is a research prototype for educational purposes only. It does **not** connect to real bank accounts and does **not** provide financial or investment advice.

## Features

- Enter monthly income and five expense categories (rent, groceries, transportation, entertainment, other)
- Automatic calculation of total expenses, remaining income, and savings rate
- Doughnut chart showing the expense breakdown (powered by Recharts)
- Clear warning banner when expenses exceed income
- Reset button that restores sample values
- Educational savings tip that adapts to the user's savings rate
- Responsive layout that works on mobile and desktop
- Fire-themed dark navy, white, and green styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes bundled with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

The development server runs at `http://localhost:5173` by default.

## Technologies Used

| Technology | Purpose | Pros | Cons |
|---|---|---|---|
| **React** | UI library for building component-based interfaces | Large ecosystem, reusable components, strong community, declarative syntax | Virtual DOM overhead, need build tooling, learning curve for beginners |
| **Vite** | Build tool and dev server | Extremely fast HMR, simple config, optimized production builds | Newer ecosystem than Webpack, some plugins may lack Vite support |
| **Recharts** | Composable charting library for React | Easy to use with React, declarative API, responsive by default, customizable | Limited chart types compared to D3, larger bundle size, can be slow with very large datasets |
| **JavaScript (ES6+)** | Application logic and state management | No compilation step needed, widely understood, fast iteration for prototypes | No static type checking (unlike TypeScript), easier to introduce runtime bugs |
| **CSS3** | Styling with custom properties and flexbox/grid | Full control over appearance, no extra dependencies, modern layout primitives | Manual responsive design effort, potential duplication without a preprocessor |

## Project Structure

```
src/
├── App.jsx                  # Main app component with state and calculations
├── App.css                  # Fire-themed dark navy styling
├── index.css               # Global resets
├── main.jsx                # React entry point
└── components/
    ├── Header.jsx          # Title bar with animated flame accent
    ├── BudgetForm.jsx      # Income and expense input form
    ├── SummaryCards.jsx    # Total expenses, remaining income, savings rate
    ├── ExpenseChart.jsx    # Doughnut chart of expense breakdown
    ├── SavingsTip.jsx      # Educational tip based on savings rate
    └── WarningBanner.jsx   # Alert shown when expenses exceed income
```

## How It Works

1. **State management:** A single React `useState` object in `App.jsx` holds all budget values (income and five expense fields).
2. **Calculations:** Total expenses, remaining income, and savings rate are derived on every render — no manual recalculation needed.
3. **Savings rate formula:** `(remaining income / monthly income) × 100`
4. **Chart:** Recharts renders a doughnut chart from the expense values, filtering out zero-spend categories.

## Notes

- This is a **frontend-only** application with no authentication, backend, database, or external API calls.
- All calculations happen in the browser using React state and JavaScript.
- The sample values on load (and after reset) are: $4,000 income, $1,200 rent, $400 groceries, $200 transportation, $150 entertainment, $250 other.
