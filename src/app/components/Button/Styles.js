import styled from "styled-components";

export const Button = styled.button`
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  margin: 0.15em;
  font-size: ${props => (props.font ? props.font : ".75")}rem;
  background-color: transparent;
  display: ${props => (props.display ? displayBlock : "inline-block")};
  ${props => themePicker(props.inverted, props.button)};
  ${props => (props.disabled ? disabledButton : "")};
`;

export const displayBlock = `
display: block; 
width: 100%; 
`;

export const disabledButton = `
opacity: .65; 
pointer-events: none; 
`;

const activeButton = `
opacity: 0; 
pointer-events: auto; 
`;

const PrimaryButton = `
color: #fff;
background-color: #20a8d8;
border-color: #20a8d8;
:hover {
  background-color: #1b8eb7;
  border-color: #1985ac;
}
`;

const InvertedPrimaryButton = `
color: #20a8d8;
border-color: #20a8d8;
:hover {
  color: #fff;
  background-color: #20a8d8;
  border-color: #20a8d8;
}
`;

const SecondaryButton = `
color: #111;
background-color: #c0cadd;
border-color: #c0cadd;
:hover {
  background-color: #a7b5d0;
  border-color: #9faecb;
}
`;

const InvertedSecondaryButton = `
color: #c0cadd;
border-color: #c0cadd;
:hover {
  color: #fff;
  background-color: #c0cadd;
  border-color: #c0cadd;
}
`;

const SuccessButton = `
color: #111;
background-color: #79c447;
border-color: #79c447;
:hover {
  background-color: #67ad38;
  border-color: #61a434;
}
`;

const InvertedSuccessButton = `
color: #79c447;
border-color: #79c447;
:hover {
  color: #fff;
  background-color: #79c447;
  border-color: #79c447;
}
`;

const WarningButton = `
color: #111;
background-color: #fabb3d;
border-color: #fabb3d;
:hover {
  background-color: #f9ae18;
  border-color: #f9aa0b;
}
`;

const InvertedWarningButton = `
color: #fabb3d;
border-color: #fabb3d;
:hover {
  color: #fff;
  background-color: #fabb3d;
  border-color: #fabb3d;
}
`;

const DangerButton = `
color: #fff;
background-color: #ff5454;
border-color: #ff5454;
:hover {
  background-color: #ff2e2e;
  border-color: #ff2121;
}
`;

const InvertedDangerButton = `
color: tomato;
border-color: tomato;
:hover {
  color: #fff;
  background-color: #ff2e2e;
  border-color: #ff2121;
}
`;

const themePicker = (inverted, button) => {
  if (inverted) return invertedButtonPicker(button);
  else return buttonPicker(button);
};

let invertedButtonPicker = button => {
  if (button === "Primary") return InvertedPrimaryButton;
  else if (button === "Secondary") return InvertedSecondaryButton;
  else if (button === "Success") return InvertedSuccessButton;
  else if (button === "Warning") return InvertedWarningButton;
  else if (button === "Danger") return InvertedDangerButton;
};

let buttonPicker = button => {
  if (button === "Primary") return PrimaryButton;
  else if (button === "Secondary") return SecondaryButton;
  else if (button === "Success") return SuccessButton;
  else if (button === "Warning") return WarningButton;
  else if (button === "Danger") return DangerButton;
};
