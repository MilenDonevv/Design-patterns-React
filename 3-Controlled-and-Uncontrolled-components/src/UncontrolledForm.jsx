import React from 'react'

export const UncontrolledForm = () => {

    // in order to get the values from the form, we need react refs
    const nameInput = React.createRef()
    const ageInput = React.createRef()
    const hairColorInput = React.createRef()



    const handleSubmit = (e) => {
        console.log(nameInput.current.value)
        console.log(ageInput.current.value)
        console.log(hairColorInput.current.value)
        e.preventDefault(); // default behavior is to refresh when we submit sth to the page
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder='Name' ref={nameInput}/>
            <input name="age" type="number" placeholder='Age' ref={ageInput}/>
            <input name="hairColor" type="text" placeholder='Hair Color' ref={hairColorInput}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}


/*

What makes this Uncontrolled is that the component doesn't really care what the value of each of these 
inputs is until some event occurs. Each of these inputs is handling its own state until we submit the form
at which point we get all of the values.

*/