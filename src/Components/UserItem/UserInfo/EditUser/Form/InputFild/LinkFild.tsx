import { Button } from "@mui/material";
import InputField from "./InpudFild";
import { useTranslation } from "react-i18next";

interface UserLinksFieldProps {
  value: string[];
  onChange: (links: string[]) => void;
}

const UserLinksField: React.FC<UserLinksFieldProps> = ({ value, onChange }) => {
  const { t } = useTranslation();

  const handleLinkChange = (index: number, newValue: string) => {
    const updatedLinks = [...value];
    updatedLinks[index] = newValue;
    onChange(updatedLinks);
  };

  const addLink = () => {
    onChange([...value, ""]);
  };

  const removeLink = (index: number) => {
    const updatedLinks = value.filter((_, i) => i !== index);
    onChange(updatedLinks);
  };

  return (
    <div>
      <label>{t("UserListPage.user_links")}</label>
      {value.map((link, index) => (
        <div
          key={index}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <InputField
            name={`user_links[${index}]`}
            label={t(`UserListPage.Link${index + 1}`)}
            value={link}
            onChange={(e) => handleLinkChange(index, e.target.value)}
          />
          <Button
            type="button"
            onClick={() => removeLink(index)}
            variant="contained"
          >
            {t("UserListPage.remove_link")}
          </Button>
        </div>
      ))}
      {value.length < 5 && (
        <Button
          type="button"
          onClick={addLink}
          variant="contained"
        >
          {t("UserListPage.add_link")}
        </Button>
      )}
    </div>
  );
};

export default UserLinksField;
