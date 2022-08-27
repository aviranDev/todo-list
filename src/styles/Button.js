import styled from "styled-components";

export const colors = {
  primary: '#fff',
  secondary: '#000',
  border: '#ccc',
  removeBackground: '#853D3D',
  removeBackgroundHover: '#CB0000'
}

const Button = styled.button`
background: ${({ background }) => (background ? background : colors.secondary)};
border: 2px solid${({ border }) => (border ? border : colors.border)};
font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.4em')};
border-radius: ${({ radius }) => (radius ? radius : '5px')};
color: ${({ color }) => (color ? color : colors.primary)};
margin: ${({ margin }) => (margin ? margin : '15px')};
transition: background-color 1.5s;
padding-left:  ${(props) => (props.left ? props.left : '')};
padding-right: ${(props) => (props.right ? props.right : '')};
text-transform: uppercase;
padding-top: ${(props) => (props.top ? props.top : '')};
padding-bottom: ${(props) => (props.bottom ? props.bottom : '')};
cursor: pointer;

&:hover{
  background: ${({ hoverBackground }) => (hoverBackground ? hoverBackground : colors.primary)};
  color: ${({ hoverColor }) => (hoverColor ? hoverColor : colors.secondary)};
}
`;

export default Button;