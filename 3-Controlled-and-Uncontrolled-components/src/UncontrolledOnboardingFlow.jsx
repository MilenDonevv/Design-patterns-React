import React, { useState } from 'react'

// onFinish prop --> a function which will be called when the Uncontrolled... finishes
export const UncontrolledOnboardingFlow = ({ children, onFinish}) => {
const [onboardingData, setOnboardingData] = useState({})
const [currentIndex, setCurrentIndex] = useState(0) // initial value - first child


const goToNext = () => {
    setCurrentIndex(currentIndex + 1)
}


// toArray(children) --> covers us in case 'children' is a single element
const currentChild = React.Children.toArray(children)[currentIndex];


    if (React.isValidElement(currentChild)) {

        return React.cloneElement(currentChild, { goToNext });
    }

    return currentChild
  
}
