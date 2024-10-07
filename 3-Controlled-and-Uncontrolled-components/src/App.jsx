import { UncontrolledForm } from './UncontrolledForm'
import { ControlledForm } from './ControlledForm'
import { useState } from 'react'
import { UncontrolledModal } from './UncontrolledModal'
import { ControlledModal } from './ControlledModal'


// function App() {

//   return (
//     <>
//       <h1>My code is here</h1>
//       {/* <UncontrolledForm /> */}
//       {/* <ControlledForm /> */}
//       <UncontrolledModal />
//       <button>Show Modal</button>
//     </>
//   )

//   // the way this modal is right now is NOT CONTROLLED
//   // --> it has no control over the additional button below it
// }

// export default App


function App() {

  const [shouldShowModal, setShouldShowModal] = useState(false)

  return (
    <>
      <ControlledModal 
        shouldShow={shouldShowModal}
        onRequestClose={() => {
          alert('Are you sure you want to close it?')
          setShouldShowModal(false)
        }}
      >
        <h1>Hello!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
      </button>
    </>
  )
}

export default App

// The parent is taking care of the state of the Modal --> Controlled modal