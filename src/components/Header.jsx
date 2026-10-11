// Header: fire-themed title bar with an animated flame emoji accent
function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <span className="flame-icon" role="img" aria-label="fire">
          🔥
        </span>
        <div className="header-text">
          <h1>FireFinance</h1>
          <p>Budget Dashboard — a personal finance &amp; investment education prototype</p>
        </div>
      </div>
    </header>
  )
}

export default Header
