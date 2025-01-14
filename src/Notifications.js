import Notification from "./Notification";

function Notifications({ notificationsData }) {
  return (
    <div className="notifications">
      {notificationsData.map((notification) => (
        <Notification key={notification.name} notificationObj={notification} />
      ))}
    </div>
  );
}

export default Notifications;
