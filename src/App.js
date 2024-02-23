import './App.css';
import BasicPie from './components/budget-planner/budget-planner';
import Navbar from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BasicPie/>
    </div>
  );
}

export default App;
