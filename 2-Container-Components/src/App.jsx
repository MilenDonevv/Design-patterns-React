// import { CurrentUserLoader } from "./CurrentUserLoader"
import { UserInfo } from "./UserInfo"
import { UserLoader } from "./userLoader"


const userIds = ['123', '234', '345']

function App() {

  // return (
  //   <>
  //     <UserLoader userId={123}>
  //       <UserInfo />
  //     </UserLoader>
  //     <UserLoader userId={234}>
  //       <UserInfo />
  //     </UserLoader>
  //     <UserLoader userId={345}>
  //       <UserInfo />
  //     </UserLoader>
  //   </>
  // )
  return (
    <>
      {
        userIds.map((id) => (
          <UserLoader key={id} userId={id}>
            <UserInfo />
          </UserLoader>
        ))
      }
    </>
  )
}

export default App

/*

<CurrentUserLoader>  - it will pass a user prop to  <UserInfo /> 

just because <UserInfo /> is one of its children


*/