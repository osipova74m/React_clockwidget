import logo from './logo.svg';
import './App.css'; 
import Clockwidget from './components/clockwidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Clockwidget/>
        <Clockwidget/>
        <Clockwidget/>
        <Clockwidget/>
        {/* вызов  комп clockwidget */}


      </header>
    </div>
  );
}

export default App;
