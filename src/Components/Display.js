import React from "react";
import CustomButton from "../Custom/CustomButton";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";
import { Checkout, Options, TodoItem } from "../styles/style";

/* colors */
import { colors } from "../styles/Button";
const { removeBackground, removeBackgroundHover } = colors;

const Display = (props) => (
  <TodoItem
    completed={props.completed}>
    <Checkout
      type="checkbox"
      checked={props.checked}
      onChange={(e) => e.target.value}
      onClick={props.handleCheckbox} />
    {props.todoTask}
    <Options>

      <CustomButton
        fontSize="20px"
        margin="5px"
        onClick={props.handleRemoveClick}
        background={removeBackground}
        hoverBackground={removeBackgroundHover}
        top="1px"
        bottom="-1px"
      >
        <BsFillTrashFill fontSize="30px" />
      </CustomButton>

      <CustomButton
        background="#0A5E00"
        hoverBackground="#0F9000"
        margin="2px"
        onClick={props.handleEdit}
        top="1px"
        bottom="-1px"
      >
        <BsPencil fontSize="30px" />
      </CustomButton>
    </Options>
  </TodoItem>
);

export default Display;