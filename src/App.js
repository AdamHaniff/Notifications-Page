import Header from "./Header";
import Notifications from "./Notifications";
import data from "./data/data";

function App() {
  // VARIABLES

  return (
    <div className="app">
      <Header notificationsData={data} />
      <Notifications notificationsData={data} />
    </div>
  );
}

export default App;
