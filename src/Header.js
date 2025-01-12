function Header() {
  return (
    <header className="header">
      <div className="header__notifications-text-number">
        <span className="header__notifications-text">Notifications</span>
        <span className="header__notifications-number">3</span>
      </div>
      <span className="header__mark">Mark all as read</span>
    </header>
  );
}

export default Header;
