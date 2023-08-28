import styled from "styled-components";
import RepoItem from "../components/repo-item";

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-block: 20px;

  .button {
    border: none;
    background: var(--buttonBG);
    font: var(--button);
    color: var(--white);
    padding: 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
    }
  }
  @media screen and (min-width: 768px) {
    padding-block: 10px;
  }
`;

function RepoList({ filterLanguage, finalPagination, setFinalPagination }) {
  function handlePagination() {
    const newFinal = finalPagination + 4;
    setFinalPagination(newFinal);
  }

  return (
    <RepoListStyled>
      {filterLanguage.map((item) => {
        return <RepoItem key={item.id} {...item} />;
      })}
      <button className="button" onClick={handlePagination}>
        Ver Más
      </button>
    </RepoListStyled>
  );
}

export default RepoList;
