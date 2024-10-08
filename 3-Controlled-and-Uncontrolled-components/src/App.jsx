import { UncontrolledForm } from './UncontrolledForm'
import { ControlledForm } from './ControlledForm'
import { useState } from 'react'
import { UncontrolledModal } from './UncontrolledModal'
import { ControlledModal } from './ControlledModal'
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow'


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


// function App() {

//   const [shouldShowModal, setShouldShowModal] = useState(false)

//   return (
//     <>
//       <ControlledModal 
//         shouldShow={shouldShowModal}
//         onRequestClose={() => {
//           alert('Are you sure you want to close it?')
//           setShouldShowModal(false)
//         }}
//       >
//         <h1>Hello!</h1>
//       </ControlledModal>
//       <button onClick={() => setShouldShowModal(!shouldShowModal)}>
//         {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
//       </button>
//     </>
//   )
// }

// export default App

// The parent is taking care of the state of the Modal --> Controlled modal


// const StepOne = () => <h1>Step 1</h1>
// const StepTwo = () => <h1>Step 2</h1>
// const StepThree = () => <h1>Step 3</h1>


const StepOne = ({ goToNext }) => (
  <>
  <h1>Step 2</h1>
  <button onClick={() => goToNext({ name: 'Milen Donev'})}>Next</button>
  </>
)


const StepTwo = ({ goToNext }) => (
  <>
  <h1>Step 3</h1>
  <button onClick={() => goToNext({ age: 29})}>Next</button>
  </>
)


const StepThree = ({ goToNext }) => (
  <>
  <h1>Step 1</h1>
  <button onClick={() => goToNext({ hairColor: 'black'})}>Next</button>
  </>
)




function App() {


  return (
    <>
      {/* inside we will have several other components each of which represents a step in the onboarding flow*/}
      <UncontrolledOnboardingFlow onFinish={data => {
        alert('Onboarding complete')
        console.log(data)}}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  )
}

export default App