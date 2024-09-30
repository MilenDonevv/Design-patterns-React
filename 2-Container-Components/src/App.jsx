import { CurrentUserLoader } from "./CurrentUserLoader"
import { UserInfo } from "./UserInfo"



function App() {

  return (
    <CurrentUserLoader> 
      <UserInfo />
    </CurrentUserLoader>
  )
}

export default App

/*

<CurrentUserLoader>  - it will pass a user prop to  <UserInfo /> 

just because <UserInfo /> is one of its children


*/