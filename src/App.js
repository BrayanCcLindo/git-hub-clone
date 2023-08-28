// import logo from "./logo.svg";
import GlobalResetStyle from "./global-css/global-reset-css";
import Layout from "./components/layout";
import Profile from "./components/profile";
import RepoList from "./components/repoList";
import Filter from "./components/filter";
import { getRepos, getUser } from "./components/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmptyState from "./components/empty-state";
import Modal from "./components/modal";

function App() {
  let username = useParams().user;
  if (!username) {
    username = "brayanCCLindo";
  }
  const [userState, setUserState] = useState("idle");
  const isuserLoading = userState === "pending";
  const isuserSuccess = userState === "success";
  const isuserError = userState === "error";

  const [repoState, setRepoState] = useState("idle");
  const isrepoLoading = repoState === "pending";
  const isrepoSuccess = repoState === "success";
  const isrepoError = repoState === "error";

  const [gitUser, setGitUser] = useState({});
  const [gitRepos, setGitRepos] = useState([]);
  const [searchRepo, setSearchRepo] = useState([]);
  const [selectedValue, setSelectedValue] = useState("All");
  const [sortRepo, setSortRepo] = useState("");
  const [finalPagination, setFinalPagination] = useState(4);

  useEffect(() => {
    setUserState("pending");
    getUser(username)
      .then(({ data }) => {
        setUserState("success");
        setGitUser(data);
      })
      .catch(() => setUserState("error"));
    setRepoState("pending");
    getRepos(username)
      .then(({ data }) => {
        setRepoState("success");
        setGitRepos(data.splice(0, finalPagination)); //separar en arrays de 4
      })
      .catch(() => setGitRepos("error"));
  }, [username, finalPagination]);

  const repoResults = gitRepos?.filter((repo) => {
    const noTildes = (text) => {
      return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };
    const TodoTextLC = noTildes(repo.name.toLowerCase());
    return TodoTextLC.includes(searchRepo);
  });
  const filterLanguage = repoResults?.filter((repo) => {
    const language = repo.topics[0];
    if (selectedValue === "All") return repoResults;
    return selectedValue.toLowerCase() === language;
  });
  if (sortRepo === "Stars") {
    filterLanguage.sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
  // const filterSort = filterLanguage.filter((repo) => repo.name === sortRepo);

  return (
    <>
      <GlobalResetStyle />
      <Layout>
        <div>
          {isuserLoading && <p>Cargando...</p>}
          {isuserSuccess && <Profile gitUser={gitUser} />}
          {isuserError && <p>Error</p>}
        </div>
        <div>
          <Filter
            setSortRepo={setSortRepo}
            setSelectedValue={setSelectedValue}
            repoResults={repoResults}
            setSearchRepo={setSearchRepo}
            selectedValue={selectedValue}
            filterLanguage={filterLanguage}
          />
          {isrepoLoading && <p>Cargando REPOS...</p>}
          {isrepoSuccess && (
            <RepoList
              finalPagination={finalPagination}
              setFinalPagination={setFinalPagination}
              filterLanguage={filterLanguage}
            />
          )}
          {isrepoError && <p>Error Cargando REPOS</p>}
          {!isrepoLoading && !isrepoError && filterLanguage.length === 0 && (
            <EmptyState />
          )}
        </div>
        <div className="modalLocation">
          <Modal />
        </div>
      </Layout>
    </>
  );
}

export default App;
