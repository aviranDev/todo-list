import { StyledInput } from "../styles/style";

const CustomInput = (props) => (
  <StyledInput
    width={props.width}
    value={props.value}
    defaultValue={props.defaultValue}
    type={props.type}
    checked={props.checked}
    name={props.name}
    onFocus={props.onFocus}
    onChange={props.onChange}
    placeholder={props.placeholder}
    onClick={props.onClick}
    margin={props.margin}
    padding={props.padding}
  />
);

export default CustomInput;