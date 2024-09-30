/*


<div styles={...}>
    <h1>Component Code</h1> 
</div>


-----------

<div styles={...}>
    {children}
</div>

<>
    <h1>Component Code</h1>
</>

Separation between the component itself and where that component is being displayed on the page.

--> Components should't know where they're being displayed !! 


*/


import { useState } from 'react';
import styled from 'styled-components'

const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5)
`;

const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%
`;






export const Modal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false);

    return (
        <>
            <button onClick={() => setShouldShow(true)}>Show Modal</button>
            {
                shouldShow && (<ModalBackground onClick={() => setShouldShow(false)}>
                    <ModalBody>
                        <button onClick={() => setShouldShow(false)}>Hide</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
                )}

        </>
    )
}