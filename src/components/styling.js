import React from 'react'
import styled from 'styled-components';
import {device} from './sizes'

export const Page = styled.div`
max-width: 370px;
margin: 20px auto; 

@media ${device.mobileM} { 
    max-width: 420px;
  }
@media ${device.mobileL} { 
    max-width: 700px;
  }

@media ${device.laptop} { 
  max-width: 800px;
}
@media ${device.laptopL} { 
    max-width: 1200px;
  }
@media ${device.desktop} {
  max-width: 1400px;
}
`
export const Board = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

@media ${device.tablet} { 
    flex-direction: row;
    flex-wrap: wrap;
  }
@media ${device.laptop} { 
    flex-wrap: nowrap;
  }

`
export const StyledButton = styled.button`
width: 200px;
height: 40px;
background-color: #ae4951;
color: white;

&:disabled{
background-color: #b98d72;
}
:hover{
    background-color: #57233a;
}

`

