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
    flex: ${props => props.weight};
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

export const SplitScreen = ({children, leftWeight = 1, rightWeight = 1,}) => {
    const [left, right] = children;  // these are elements, NOT COMPONENTS 
    return (
        <Container>
            <Pane weight={leftWeight}>
                {/* <Left /> */}
                {left}
            </Pane>
            <Pane weight={rightWeight}>
                {/* <Right /> */}
                {right}
            </Pane>
        </Container>
    )
}