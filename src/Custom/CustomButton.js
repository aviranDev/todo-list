import Button from '../styles/Button';

const CustomButton = (props) => (
  <Button
    background={props.background}
    hoverBackground={props.hoverBackground}
    onClick={props.onClick}
    fontSize={props.fontSize}
    padding={props.padding}
    margin={props.margin}
    radius={props.radius}
    border={props.border}
    width={props.width}
    color={props.color}
    left={props.left}
    right={props.right}
    top={props.top}
    bottom={props.bottom}
  >
    {props.children}
  </Button>
);

export default CustomButton