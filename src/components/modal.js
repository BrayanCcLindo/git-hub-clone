import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "styled-components";
import IconComponent from "./icon-component";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .modal__title {
    font: var(--headline2-semi-bold);
    color: var(--white);
  }
`;

const OpenModalStyled = styled.div`
  background-color: transparent;
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--white);
`;

function Modal() {
  const [inputValue, setInputValue] = useState("");

  const [open, setOpen] = useState(false);

  const navigator = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setInputValue("");
    if (inputValue === "") {
      setInputValue("brayanCCLindo");
    }
    navigator(`/${inputValue}`);
    setOpen(false);
  }
  function handleInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <OpenModalStyled>
          <IconComponent name="search" color="var(--white)" size={50} />
        </OpenModalStyled>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <FormStyled className="form" onSubmit={handleSubmit}>
            <label className="modal__title" htmlFor="search">
              Type to Search
            </label>
            <input
              onChange={handleInput}
              name="username"
              id="search"
              type="text"
              placeholder="Ej. BrayanCCLindo"
              className="Button violet"
            />
            <button className="Button green">Buscar</button>
          </FormStyled>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
