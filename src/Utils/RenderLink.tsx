import { useTranslation } from "react-i18next";

interface RenderLinksProps {
  links: string[] | null;
}

const RenderLinks: React.FC<RenderLinksProps> = ({ links }) => {
  const { t } = useTranslation();

  if (!links || links.length === 0) return <p>{t("CompanyPage.noLink")}</p>;

  return (
    <div>
      <p>{t("CompanyPage.link")}:</p>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RenderLinks;
