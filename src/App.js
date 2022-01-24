import './assets/css/style.css'
import './App.css';
import useAuth from './hooks/useAuth';
import  './assets/slim.min'
import Router from './routes';
import './chart.css'
function App() {
  const { isInitialized } = useAuth();
  console.log(isInitialized)
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
