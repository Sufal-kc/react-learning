import './App.css'
import { Welcome, Button } from './Welcome'

function App() {  
  return (
      <div>
        <h1>React course learning</h1>
        {/* this is the child component of the App component */}
        <Welcome />
        <Button />
      </div>
      );
    }


export default App
