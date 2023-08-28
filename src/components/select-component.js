import * as Select from "@radix-ui/react-select";
import styled from "styled-components";
import IconComponent from "./icon-component";

const SelectComponentStyled = styled.div`
  .SelectTrigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    width: 120px;
    padding: 0 15px;
    font-size: 13px;
    line-height: 1;
    height: 35px;
    gap: 5px;
    border: none;
    background-color: var(--select-bg);
    color: var(--grey-1);
    cursor: pointer;
    font-weight: 700;
  }
  .SelectTrigger:hover {
    box-shadow: 0 0 0 2px black;
  }
  .SelectTrigger:focus {
    box-shadow: 0 0 0 2px black;
  }

  .SelectContent {
    overflow: hidden;
    background-color: var(--select-bg);
    border-radius: 6px;
    padding: 0.5rem;
  }
  .SelectItem {
    line-height: 1;
    color: var(--grey-1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 35px 0 25px;
    position: relative;
    user-select: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 24px; /* 171.429% */
    width: 200px;
  }

  .SelectItem[data-highlighted] {
    outline: none;
    background-color: var(--bg);
    color: var(--primary);
  }
  .SelectItemIndicator {
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .SelectLabel {
    padding: 0 25px;
    font-size: 12px;
    line-height: 25px;
    color: var(--grey);
  }
`;

function SelectComponent({ label, options, title, onValueChange }) {
  return (
    <SelectComponentStyled>
      <Select.Root onValueChange={onValueChange}>
        <Select.Trigger className="SelectTrigger" aria-label="github filter">
          <Select.Value placeholder={title} />
          <Select.Icon>
            <IconComponent name="arrowDown" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content
          sideOffset={5}
          position="popper"
          className="SelectContent"
        >
          <Select.Group>
            <Select.Label className="SelectLabel">{label}</Select.Label>
            <Select.Viewport>
              {options.map((option, id) => {
                return (
                  <Select.Item key={id} value={option} className="SelectItem">
                    <Select.ItemText> {option}</Select.ItemText>
                    <Select.ItemIndicator className="SelectItemIndicator">
                      <IconComponent name="check" size={20} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Viewport>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </SelectComponentStyled>
  );
}

export function SortSelect({ options, title, label, onValueChange }) {
  return (
    <SelectComponentStyled>
      <Select.Root onValueChange={onValueChange}>
        <Select.Trigger className="SelectTrigger" aria-label="github filter">
          <Select.Value placeholder={title} />
          <Select.Icon>
            <IconComponent name="arrowDown" />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content
          sideOffset={5}
          position="popper"
          className="SelectContent"
        >
          <Select.Group>
            <Select.Label className="SelectLabel">{label}</Select.Label>
            <Select.Viewport>
              {options.map((option, id) => {
                return (
                  <Select.Item key={id} value={option} className="SelectItem">
                    <Select.ItemText> {option}</Select.ItemText>
                    <Select.ItemIndicator className="SelectItemIndicator">
                      <IconComponent name="check" size={20} />
                    </Select.ItemIndicator>
                  </Select.Item>
                );
              })}
            </Select.Viewport>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </SelectComponentStyled>
  );
}

export default SelectComponent;
