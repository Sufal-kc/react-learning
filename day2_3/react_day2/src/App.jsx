import {Greetings} from "./Greetings"
import { CardWrapper } from "./CardWrapper"
import { UserDetails } from "./UserDetails"

function App() {
  return (
    <>
      <UserDetails name="SUFAL" isOnline={true} isPremium={true} isNewUser={true} role="admin"/>
      <UserDetails name="Spiderman: No way home" isOnline={false} hideOffline={true}/>
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
