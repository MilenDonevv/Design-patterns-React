import React, { useState, useEffect } from 'react'
import axios from 'axios'



export const UserLoader = ({ userId, children }) => {
    const [user, setUser] = useState(null)
    const { id } = 

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`users/${userId}`)
                setUser(response.data)
            } catch (error) {
                console.error('Error fetching user:', error)
            }

        })()
    }, [userId])

    return (
        <>  
            {React.Children.map(children, child => {

                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }

                return child
            })}
        </>
    )
}