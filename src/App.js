import { useState } from "react";
import Header from "./Header";
import Notifications from "./Notifications";
import data from "./data/data";

function App() {
  // STATE
  const [notificationsData, setNotificationsData] = useState(
    structuredClone(data)
  );

  // HANDLER FUNCTIONS
  function handleMarkReadClick() {
    // Update the 'unread' property in the objects in 'notificationsData'
    setNotificationsData(
      notificationsData.map((notification) =>
        notification.unread === true
          ? { ...notification, unread: false }
          : notification
      )
    );
  }

  return (
    <div className="app">
      <Header
        notificationsData={notificationsData}
        onMarkReadClick={handleMarkReadClick}
      />
      <Notifications notificationsData={notificationsData} />
    </div>
  );
}

export default App;
