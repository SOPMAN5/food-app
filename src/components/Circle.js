import styled from 'styled-components';

export const Circle = styled.div`
width: 40px;
height: 40px;
border-radius:50px;
background:${props => props.primary ? "white" : "transparent"};
color:${props => props.primary ? "#784D1D" : "#E9E5D6"};
border:2px solid #E9E5D6; ;
text-align:center;
display:flex;
  flex-wrap: wrap;
  align-items: center; 
  justify-content: center;
  font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
padding-top:5px;
&:after {
    content:'${props => props.text}';
    margin-top:10px;
    padding-top:10px;
    text-align:left;
    font-family: Poppins;
font-style: italic;
font-weight: 300;
font-size: 12px;
line-height: 18px;
color:#E9E5D6;
white-space: nowrap;
    
  }
`
export const Text = styled.span`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-family: Poppins;
font-style: italic;
font-weight: 300;
font-size: 12px;
line-height: 18px;
color:#E9E5D6;
`