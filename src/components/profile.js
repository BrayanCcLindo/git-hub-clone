import styled from "styled-components";
import Button from "./button";
import IconComponent from "./icon-component";
import { useState } from "react";

const ProfileStyled = styled.div`
  grid-area: profile;
  .info {
    color: var(--grey-1);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
    font: var(--body2-semi-bold);
  }
  a {
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  }
  .avatar {
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid var(--grey-1);
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    font: var(--headline1);
    margin-block-end: 0.5rem;
    color: var(--white);
  }
  .username {
    margin-block-start: 0.5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
  }
  .buttons {
    border: none;
    display: flex;
    gap: 0.5rem;
    margin-block-end: 1.5rem;
  }
  .decoration {
    height: 0.25rem;
    width: 0.25rem;
    background: #fff;
    border-radius: 50%;
  }
  .followersAmount {
    color: var(--white);
    font-weight: 700;
  }
`;

function Profile({ gitUser }) {
  const [followers, setFollowers] = useState(gitUser.followers);
  return (
    <ProfileStyled>
      <img
        src={gitUser.avatar_url}
        className="avatar"
        width="278"
        height="278"
        alt=""
      />
      <h2 className="name">{gitUser.name}</h2>
      <p className="username">{gitUser.login}</p>
      <div className="buttons">
        <Button text="Sponsors" link="#" className="custom" />
        <Button
          onClick={() => setFollowers(followers + 1)}
          text="Follow"
          icon={<IconComponent size={24} color="var(--pink)" name={"heart"} />}
        />
      </div>
      <p className="bio info">{gitUser.bio}</p>
      <p className="followers info">
        <IconComponent name="user" color="var(--white)" size={24} />
        <span className="followersAmount">{followers}</span>
        <span>Followers</span>
        <span className="decoration"></span>{" "}
        <span className="followersAmount">{gitUser.following}</span>{" "}
        <span>Following</span>
        <span className="decoration"></span>
      </p>
      <p className="stars info">
        <IconComponent name="star" color="var(--white)" size={24} />
        81
      </p>
      <p className="location info">
        <IconComponent name="location" color="var(--white)" size={24} />
        {gitUser.location ?? "Remote"}
      </p>

      <a
        className="info"
        href={gitUser.html_url}
        target="_blank"
        rel="noreferrer"
      >
        <IconComponent name="link" color="var(--white)" size={24} />
        {gitUser.html_url}
      </a>
      <a className="info" href="/" target="_blank" rel="noreferrer">
        <IconComponent name="twitter" color="var(--white)" size={24} />@
        {gitUser.twitter_username ?? "Pending"}
      </a>
    </ProfileStyled>
  );
}

export default Profile;
