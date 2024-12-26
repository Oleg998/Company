import css from "./aboutPage.module.css";
import team1 from "../../img/team/team1.jpg";
import team2 from "../../img/team/team2.jpg";
import { Trans, useTranslation } from "react-i18next";
import RenderEmail from "Utils/RenderEmail/RenderEmail";
const About = () => {
  const { t } = useTranslation();
  const emailAddress = "example@example.com";
  return (
    <div className={css.container}>
      <h1 className={css.title}>{t("AboutPage.aboutUs")}</h1>
      <p className={css.description}>{t("AboutPage.description")}</p>
      <h2 className={css.subtitle}>{t("AboutPage.ourMission")}</h2>
      <p className={css.description}>{t("AboutPage.missionDescription")}</p>
      <h2 className={css.subtitle}>{t("AboutPage.ourTeam")}</h2>
      <div className={css.team}>
        <div className={css.member}>
          <img
            src={team1}
            alt={t("AboutPage.teamMember.position")}
            className={css.memberImage}
          />
          <h3>{t("AboutPage.teamMember.name")}</h3>
          <p>{t("AboutPage.teamMember.position")}</p>
        </div>
        <div className={css.member}>
          <img
            src={team2}
            alt={t("AboutPage.teamMember.position")}
            className={css.memberImage}
          />
          <h3>{t("AboutPage.teamMember.name")}</h3>
          <p>{t("AboutPage.teamMember.position")}</p>
        </div>
      </div>
      <h2 className={css.subtitle}>{t("AboutPage.contactUs")}</h2>
      <p className={css.contact}>
        <Trans
          i18nKey="AboutPage.contactDescription"
          values={{ email: emailAddress }}
          components={{
            1: <RenderEmail email={emailAddress} />,
          }}
        />
      </p>
    </div>
  );
};

export default About;
