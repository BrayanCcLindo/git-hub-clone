import styled from "styled-components";

const LayoutStyled = styled.main`
  max-block-size: 100vh;
  padding-inline: 20px;
  display: grid;
  grid-template-areas: "profile" "filters" "repo-list";
  .modalLocation {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    bottom: 20px;
    right: 20px;
  }

  @media screen and (min-width: 768px) {
    max-inline-size: 75rem;
    margin: auto;
    grid-template-columns: 278px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 2rem;
    grid-template-areas: "profile filters" "profile repo-list";
  }
`;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
