import { isValidElement } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  display: inline-flex;
  gap: 0.5rem;
  border: none;
  text-decoration: none !important;
  cursor: pointer;
  color: var(--white);
  background: var(--buttonBG);
  border: 1px solid var(--grey);
  min-width: 135px;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding-block: 0.25rem;
  font: var(--button);
  &:hover {
    background: var(--white);
    color: var(--buttonBG);
  }
`;

function Button({ text, link, className, icon, onClick }) {
  const component = link ? "a" : "button";
  let iconComponent = null;
  if (icon) {
    if (isValidElement(icon)) {
      iconComponent = icon;
    }
  }
  return (
    <ButtonStyled
      onClick={onClick}
      as={component}
      href={link}
      className={className}
    >
      {iconComponent}
      {text}
    </ButtonStyled>
  );
}

export default Button;
