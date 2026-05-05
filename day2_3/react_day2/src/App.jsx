import {Greetings} from "./Greetings"
import { CardWrapper } from "./CardWrapper"

function App() {
  return (
    <>
      <CardWrapper title="User Profile">
        <p>Batman</p>
        <p>Spiderman@marvel.com</p>
        <button>Edit Profile</button>
      </CardWrapper>
      <Greetings name="Moneky" message="Hello"/>
      <Greetings name="Clark"/>
      <Greetings message="Goodmorning"/>
      <Greetings/>
    </>
  )
}

export default App
