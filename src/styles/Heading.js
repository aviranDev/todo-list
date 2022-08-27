import styled from "styled-components";

const Heading = styled.h1`
color: ${({ color }) => (color ? color : '#000')};
font-size: ${({ fontSize }) => (fontSize ? fontSize : '')};
font-family:${({ fontFamily }) => (fontFamily ? fontFamily : '')};
`;

export default Heading;