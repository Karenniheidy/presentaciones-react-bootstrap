import SidebarTabs from "./SidebarTabs";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  return (
    <div className="d-flex">
      <SidebarTabs />
      <Dashboard />
    </div>
  );
}

export default App;