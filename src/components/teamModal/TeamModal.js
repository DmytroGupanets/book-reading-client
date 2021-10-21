import React, { useContext } from "react";
import TeamModalStyled from "./TeamModalStyled";
import photos from "./team-data/team-photo";
import teamdata from "./team-data/team-data.json";
import sprite from "./team-data/sprite.svg";
import { ThemeContext } from "../App";

const TeamModal = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <TeamModalStyled colors={theme}>
      <div className="TeamModalWrapper">
        <h2 className="TeamName">
          Наша команда розробників <b>"Bootсamp 8"</b>
        </h2>
        <ul className="TeamModalList">
          {teamdata.map((data) => (
            <li className="TeamModalListItem" key={data.name}>
              <img
                src={photos[data.id]}
                className="TeamMemberPhoto"
                alt={data.name}
              />
              {/* <div className="TeamMemberInfo"> */}
              <div>
                <h3 className="TeamMemberName">{data.name}</h3>
                <p className="TeamMemberPosition">{data.position}</p>
              </div>
              <ul className="SocialList">
                {data.links.map((link) => (
                  <li className="SocialListItem" key={link.name}>
                    <a
                      className="SocialListLink"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <svg
                        className="SocialListLinkIcon"
                        width="15"
                        height="15"
                      >
                        <use href={sprite + `${link.icon}`}></use>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              {/* </div> */}
            </li>
          ))}
        </ul>
      </div>
    </TeamModalStyled>
  );
};

export default TeamModal;
