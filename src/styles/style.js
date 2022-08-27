import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

const colors = {
  container: ["#0A0A29", "#0E0E33"],
  wrapper: '#fff',
  inputBorder: '#ccc',
  item: '#f4f4f4f4',
  title: '#000'
};

export const Container = styled.div`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
background-image: linear-gradient(to bottom, ${colors.container[0]}, ${colors.container[1]} );
`;

export const Wrapper = styled.div`
max-width: 600px;
min-width: 455px;
min-height: 60vh;
padding: 20px;
background-color: ${colors.wrapper};
box-shadow: 5px 2px 44px 1px rgba(190,990,909,0.75);
border-radius: 2px;
`;

export const Form = styled.form`
display: flex;
align-items: center;
`;

export const TodoItem = styled.div`
display: flex;
flex: 1;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
margin-top: 10px;
background-color: ${colors.item};
padding: 5px 10px 5px;
border-radius: 50px;
font-weight: bold;
text-decoration: ${(props) => (props.completed ? "line-through" : null)};
text-decoration-color: blue;
cursor: pointer;
`;

export const Options = styled.div`
display: flex;
flex: 1;
flex-direction: row;
align-items: center;
justify-content: flex-end;
background-color: ${colors.item};
text-decoration: none;
cursor: pointer;
`;


export const Checkout = styled.input`
 position: relative;
  display: block;
  width: 30px;
  border: 1px solid #808080;
  content: "";
  background: #FFF;
`;

export const Title = styled.h1`
font-weight: 600;
text-align: center;
color: ${(props) => (props.color ? props.color : colors.title)};
`;

export const StyledInput = styled.input`
width: 80%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 2px solid ${colors.inputBorder};
border-radius: 4px;
`;


