import { Col} from 'react-bootstrap'


import styled from 'styled-components'

export const Listap = styled.div` {/*modificar html*/ }
background-color:hsl(180, 52%, 96%);
display: flex;
padding: 40px;
justify-content: center;
       
`
export const Card = styled(Col)` {/*modificar html*/ }
background:hsl(180, 31%, 95%);

border:3px solid #09f;
border-radius:5px;
cursor: pointer;
transition: all .3s ease;

&:hover {
    background: hsl(180, 29%, 50%);
}
       
`