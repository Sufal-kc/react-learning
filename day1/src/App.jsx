import './App.css'
import { Welcome, Button } from './Welcome'
import { Hello, HelloWithoutJsx } from './Hello';
import { UserProfile } from './Userprofile';
import { Product } from './Product';

function App() {  
  return (
      <div>
        <Product
         title="Predator" 
         price={159999} 
         inStock={true} 
         category={["Electronics", "Gaming", "Laptops"]} />
        <h1>React course learning</h1>
        {/* this is the child component of the App component */}
        <UserProfile />
        <Welcome name="Sufal" alias="Spiderman"/>
        <Button />
        <HelloWithoutJsx />
        <Hello />
      </div>
      );
    }


export default App
