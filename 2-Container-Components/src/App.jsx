import axios from "axios"
// import { CurrentUserLoader } from "./CurrentUserLoader"
import { UserInfo } from "./UserInfo"
// import { UserLoader } from "./userLoader"
import { ResourceLoader } from "./ResourceLoader"
import { ProductInfo } from './ProductInfo'
import { DataSource } from "./DataSource"


const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data
}
// const userIds = ['123', '234', '345']

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
  // return (
  //   <>
  //     {
  //       userIds.map((id) => (
  //         <UserLoader key={id} userId={id}>
  //           <UserInfo />
  //         </UserLoader>
  //       ))
  //     }
  //   </>
  // )
  // return (
  //   <>
  //     <ResourceLoader resourceUrl='/users/123' resourceName='user'>
  //       <UserInfo />
  //     </ResourceLoader>
  //     <ResourceLoader resourceUrl="/products/1234" resourceName='product'>
  //       <ProductInfo />
  //     </ResourceLoader>
  //   </>
  // )
  return (
    <>
      <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
        <UserInfo />
      </DataSource>
    </>
  )
}

export default App

/*

<CurrentUserLoader>  - it will pass a user prop to  <UserInfo /> 

just because <UserInfo /> is one of its children


*/