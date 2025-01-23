function Header({ notificationsData, onMarkReadClick }) {
  // VARIABLES
  const unreadNotifications = notificationsData.filter(
    (notification) => notification.unread
  ).length;

  return (
    <header className="header">
      <div className="header__notifications-text-number">
        <span className="header__notifications-text">Notifications</span>
        <span className="header__notifications-number">
          {unreadNotifications}
        </span>
      </div>
      <span className="header__mark" onClick={onMarkReadClick}>
        Mark all as read
      </span>
    </header>
  );
}

export default Header;
