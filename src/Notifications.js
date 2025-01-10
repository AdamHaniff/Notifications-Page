import data from "./data/data";
import Notification from "./Notification";

function Notifications() {
  return (
    <div className="notifications">
      {data.map((notification) => (
        <Notification key={notification.name} notificationObj={notification} />
      ))}
    </div>
  );
}

export default Notifications;
