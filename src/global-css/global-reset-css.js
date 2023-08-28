import { createGlobalStyle } from "styled-components";

const GlobalResetStyle = createGlobalStyle`



.DialogOverlay {
  backdrop-filter :blur(7px);
  position: fixed;
  inset: 0;
}

.DialogContent {
  background-color : var(--black-2);
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 25rem;
  max-height: 85vh;
  padding: 25px;
}

.DialogContent:focus {
  outline: none;
}


.Button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
}
.Button.violet {
  background-color: var(--bg);
  color: var(--grey-1);
  border: 1px solid var(--grey);
  border-radius: .5rem;
}
.Button.violet:hover {
transform: scale(1.01)
}

.Button.violet:focus {
  transform: scale(1.01)}


.Button.green {
  background-color:var(--white);
  color: var(--black-2);
  border-radius: .5rem;
  cursor: pointer;
  font: var(--button)
}
.Button.green:hover {
  transform: scale(1.01)

}



  body {
*    
*::before,
*::after {
  box-sizing: border-box;
}
/*
    2. Remove default margin
  */
* {
  margin: 0;
}
/*
    3. Allow percentage-based heights in the application
  */
html,
body,
.page {
  height: 100%;
}
/*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
    6. Improve media defaults
  */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
/*
    7. Remove built-in form typography styles
  */
input,
button,
textarea,
select {
  font: inherit;
}
/*
    8. Avoid text overflows
  */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
.sr-only {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
ul,
li {
  margin: 0;
  padding: 0;
}



  }
  body[data-theme="light"] {
  --bg: #f2f2f2;
  --white: var(--grey-2);
  --buttonBG: #cccccc;
  --primary: #0099ae;
  --black-2: var(--grey-1);
  --select-bg: var(--grey-2);
  
}
body[data-theme="dark"] {
}
`;

export default GlobalResetStyle;
