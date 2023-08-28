import styled from "styled-components";
import SelectComponent, { SortSelect } from "./select-component";
import LightDarkMode from "./light-dark-mode";

const FilterStyled = styled.div`
  grid-area: filters;

  .heading {
    display: none;
  }
  .headerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .headingRepos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .input {
    background-color: transparent;
    color: var(--grey-1);
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 100%;
  }
  .selectComp {
    display: flex;

    align-items: center;
    gap: 1rem;
  }
  .filterSection {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    .filterSection {
      flex-direction: row;
    }
    .heading {
      display: flex;
    }
  }
`;

function Filter({ setSearchRepo, repoResults, setSelectedValue, setSortRepo }) {
  function onLanguageChange(value) {
    setSelectedValue(value);
  }
  function onSortChange(value) {
    setSortRepo(value);
  }

  const typeOptions = ["All", "Sources", "Forks", "Archived", "Mirrors"];
  const languageOptions = ["All", "CSS", "JavaScript", "Java", "HTML"];
  const orderOptions = ["Last updated", "Name", "Stars"];
  return (
    <FilterStyled>
      <div className="headingRepos">
        <div className="headerContainer">
          <h2 className="heading"> Repositorios ({repoResults.length})</h2>
          <LightDarkMode />
        </div>
        <div className="filterSection">
          <input
            className="input"
            type="search"
            placeholder="Busca un Repositorio"
            onChange={(event) => setSearchRepo(event.target.value)}
          />
          <div className="selectComp">
            <SelectComponent
              title="Type"
              label="Select type"
              options={typeOptions}
            />
            <SelectComponent
              onValueChange={onLanguageChange}
              title="Language"
              label="Select language"
              options={languageOptions}
            />
            <SortSelect
              onValueChange={onSortChange}
              title="Sort"
              label="Select order"
              options={orderOptions}
            />
          </div>
        </div>
      </div>
    </FilterStyled>
  );
}

export default Filter;
