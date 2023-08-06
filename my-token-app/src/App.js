import './App.css';
import RouterMain from './main'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <RouterMain />
    </BrowserRouter>
  );
}

export default App;
