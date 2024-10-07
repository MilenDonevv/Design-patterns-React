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

// instead of using useState hook inside the modal, we will pass it as a prop

export const ControlledModal = ({ shouldShow, onRequestClose, children }) => {
    // const [shouldShow, setShouldShow] = useState(false);

    return shouldShow ? (<ModalBackground onClick={onRequestClose}>
                    <ModalBody>
                        <button onClick={onRequestClose}>Hide</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
                ) : null
}