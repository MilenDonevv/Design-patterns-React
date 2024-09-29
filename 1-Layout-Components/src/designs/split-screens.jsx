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

----------

npm install styled-components 

--> Very easy way to add styles to react components


*/

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

const Pane = styled.div`
    flex: 1;
`;

// export const SplitScreen = ({
//     left: Left,                      // property left has a value the Component Left
//     right: Right,
// }) => {
//     return (
//         <div>
//             <div>
//                 <Left />
//             </div>
//             <div>
//                 <Right />
//             </div>
//         </div>
//     )
// }

export const SplitScreen = ({
    left: Left,                      // property left has a value the Component Left
    right: Right,
}) => {
    return (
        <Container>
            <Pane>
                <Left />
            </Pane>
            <Pane>
                <Right />
            </Pane>
        </Container>
    )
}