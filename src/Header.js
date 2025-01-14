import { useState } from "react";

function Header({ notificationsData }) {
  // VARIABLES
  const unreadNumber = notificationsData.filter(
    (notification) => notification.unread
  ).length;

  // STATE
  const [unreadNotifications, setUnreadNotifications] = useState(unreadNumber);

  // HANDLER FUNCTIONS
  const handleMarkReadClick = () => setUnreadNotifications(0);

  return (
    <header className="header">
      <div className="header__notifications-text-number">
        <span className="header__notifications-text">Notifications</span>
        <span className="header__notifications-number">
          {unreadNotifications}
        </span>
      </div>
      <span className="header__mark" onClick={handleMarkReadClick}>
        Mark all as read
      </span>
    </header>
  );
}

export default Header;
