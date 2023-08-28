import styled from "styled-components";
import IconComponent from "./icon-component";

const EmptyStateStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  .heading {
    font: var(--headline2-semi-bold);
    color: var(--grey-1);
  }
`;

function EmptyState() {
  return (
    <EmptyStateStyled>
      <IconComponent name={"search"} color="var(--white)" size={40} />
      <h2 className="heading">
        No se encontraron repositorios que coincidan con tu búsqueda
      </h2>
    </EmptyStateStyled>
  );
}

export default EmptyState;
