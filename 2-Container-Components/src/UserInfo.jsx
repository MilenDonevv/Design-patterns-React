



export const UserInfo = ({ user }) => {
    const { name, age, hairColor, hobbies } = user || {}

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {
                    Array.isArray(hobbies) && hobbies.length > 0 ? (
                        hobbies.map(hobby => <li key={hobby}>{hobby}</li>)
                    ) : <p>No hobbies listed.</p>
                }
            </ul>
        </>
    ) : <p>Loading...</p>
}