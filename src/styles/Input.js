import styled from "styled-components";

const Input = styled.input`
display: inline-block;
background: ${({ background }) => (background ? background : '#ffff')};
border-radius: ${({ radius }) => (radius ? radius : '3px')};
padding: ${({ padding }) => (padding ? padding : '12px 20px')};
margin: ${({ margin }) => (margin ? margin : '8px 0')};
color: ${({ color }) => (color ? color : "#000")};
border: ${({ border }) => (border ? border : 'none')};
width: ${({ width }) => (width ? width : '500px')};
text-transform: uppercase;

::placeholder {
  color: ${(placeholderColor) => (placeholderColor ? placeholderColor : '#ccc')};
}
`;

export default Input;