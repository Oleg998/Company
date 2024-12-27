import { Button } from "@mui/material";
import Modal from "Components/Modal/Modal";
import { useState } from "react";
import css from "./homepage.module.css";
import { useTranslation } from "react-i18next";
import StatusComponent from "Components/StatusComponent/StatusComponent";
const HomePage = () => {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const closeModal = () => setActiveModal(false);
  const openModal = () => setActiveModal(true);

  return (
    <div className={css.container}>
      <h4 className={css.title}>Company International</h4>
      <h6 className={css.subtitle}>{t("HomePage.titel")}</h6>
      <Button
        className={css.button}
        onClick={openModal}
        variant="contained"
        color="primary"
      >
        {t("Btn.homepage")}
      </Button>
      <Modal
        isOpen={activeModal}
        onClose={closeModal}
        title={t("Btn.homepage")}
      >
        <StatusComponent />
      </Modal>
    </div>
  );
};

export default HomePage;
