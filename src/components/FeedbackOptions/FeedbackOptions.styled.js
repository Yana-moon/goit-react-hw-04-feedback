import styled from 'styled-components';

export const ButtonsList = styled.ul`
list-style-type: none;
display: flex;
flex-direction: row;
gap: 10px;
margin-top: 20px;
`;

export const Button = styled.button`
width: 100px;
height: 40px;
font-size: 18px;
font-weight: 500;
border-radius: 4px;
text-transform: capitalize;
border: 2px solid #0a4ff0;
color: #0a4ff0;
background-color: #f9fae6;
`;