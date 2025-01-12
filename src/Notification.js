function Notification({ notificationObj }) {
  // VARIABLES
  const { avatar, name, action, post, unread, time, group, message, picture } =
    notificationObj;

  return (
    <div className="notification">
      <img className="notification__avatar" src={avatar} alt="Avatar" />
      <div className="notification__text-time">
        <div className="notification__text">
          <span className="notification__name">{name}</span>
          <span className="notification__action">{action}</span>
          {post && <span className="notification__post">{post}</span>}
          {group && <span className="notification__group">{group}</span>}
          {unread && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              className="notification__unread"
            >
              <circle cx="4" cy="4" r="4" fill="#F65552" />
            </svg>
          )}
        </div>
        <span className="notification__time">{time}</span>
        {message && <div className="notification__message">{message}</div>}
      </div>
      {picture && (
        <img
          className="notification__picture"
          src={picture}
          alt="Girl playing chess"
        />
      )}
    </div>
  );
}

export default Notification;
