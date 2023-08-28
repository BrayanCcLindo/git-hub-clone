import styled from "styled-components";
import * as Switch from "@radix-ui/react-switch";
import IconComponent from "./icon-component";
import { useEffect, useState } from "react";

const LightDarkModeStyled = styled.div`
  button {
    all: unset;
  }
  .switchContainer {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .SwitchRoot {
    width: 42px;
    height: 25px;
    background-color: var(--grey-2);
    border-radius: 9999px;
    position: relative;
  }
  .SwitchRoot:focus {
    box-shadow: 0 0 0 2px black;
  }
  .SwitchRoot[data-state="checked"] {
    background-color: var(--buttonBG);
  }
  .SwitchThumb {
    display: block;
    width: 21px;
    height: 21px;
    background-color: #fff;
    border-radius: 9999px;

    transition: transform 100ms;
    transform: translateX(2px);
    will-change: transform;
  }
  .SwitchThumb[data-state="checked"] {
    transform: translateX(19px);
  }
`;

function LightDarkMode() {
  const [mode, setMode] = useState("light");
  const nextMode = mode === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);
  return (
    <LightDarkModeStyled>
      <div className="switchContainer">
        <IconComponent name="light" color="var(--white)" />
        <Switch.Root
          onClick={() => setMode(nextMode)}
          className="SwitchRoot"
          id="airplane-mode"
        >
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
        <IconComponent name="dark" color="var(--white)" />
      </div>
    </LightDarkModeStyled>
  );
}

export default LightDarkMode;
