import styled from "styled-components";
import IconComponent from "./icon-component";
import { formatDistance } from "date-fns";

const RepoItemStyled = styled.article`
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid var(--grey);
  justify-content: center;
  color: #fff;
  flex-direction: column;
  gap: 1rem;

  &:last-child {
    border-bottom: none;
  }

  .title__repo {
    text-decoration: none;
    font: var(--headline2-semi-bold);
    color: var(--primary);
  }

  .title__container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .tag__public {
    border: 1px solid var(--grey);
    padding-inline: 0.5rem;
    padding-block: 2px;
    border-radius: 0.5rem;
    color: var(--grey);
  }
  .tags__container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .count {
    font: var(--caption-regular);
    color: var(--grey);
  }
  .count__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }
  .footer__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  .decoracion {
    width: 1rem;
    height: 1rem;
    background: ${({ color }) => color ?? "#f2f2f2"};
    border-radius: 50%;
  }
  .languageStyle {
    color: var(--grey);
    font: var(--body2-regular);
  }
`;
const TagComponentStyled = styled.button`
  background: var(--black-2);
  border: none;
  color: var(--primary);
  border-radius: 2rem;
  padding-inline: 0.5rem;
  padding-block: 2px;
  font: var(--caption-medium);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
const TextGlobalStyled = styled.p`
  color: var(--grey);
  font: var(--body2-regular);
`;

function RepoItem({
  name,
  privates,
  description,
  forks_count,
  stargazers_count,
  branch,
  updated_at,
  html_url,
  topics,
  language,
}) {
  const dateResult = formatDistance(new Date(updated_at), new Date(), {
    addSuffix: true,
  });
  const formattedLanguage = language?.toLowerCase();

  const languages = {
    html: "var(--primary)",
    css: "var(--purple)",
    undefined: "var(--yellow)",
    javascript: "var(--yellow)",
    reactjs: "var(--primary)",
  };
  const color = languages[formattedLanguage];
  return (
    <RepoItemStyled color={color}>
      <div className="title__container">
        <h2>
          <a
            className="title__repo"
            href={html_url}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        </h2>
        <p className="tag__public">{!privates ? "Public" : "Private"}</p>
      </div>
      <TextGlobalStyled>{description}</TextGlobalStyled>
      <div className="tags__container">
        {topics
          ? topics.map((topic, id) => <TagComponent key={id} text={topic} />)
          : null}
      </div>
      <div className="footer__container">
        <div className="count__container">
          <span className="decoracion" color={color}></span>
          <p className="languageStyle">{language}</p>
        </div>
        <div className="tags__container">
          <p className="count__container">
            <span className="count">{stargazers_count}</span>{" "}
            <IconComponent size={24} name={"star"} color={"var(--grey)"} />
          </p>
          <p className="count__container">
            <span className="count">{forks_count}</span>
            <IconComponent size={24} name={"branch"} color={"var(--grey)"} />
            <span>{branch}</span>
          </p>
          <span className="count">Updated: {dateResult}</span>
        </div>
      </div>
    </RepoItemStyled>
  );
}
function TagComponent({ text }) {
  return <TagComponentStyled>{text}</TagComponentStyled>;
}

export default RepoItem;
