import logo from './logo.svg';
import './App.css';
import Header from './Components/header/header.component';
import { Dashboard } from './Components/dashboard/dashboard.component';
function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
