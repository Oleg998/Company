import { useState, useEffect } from "react";
import { getStatus, CheckResponse } from "../../Api/api";
import { useTranslation } from "react-i18next";
import css from "./StatusComponent.module.css";


interface StatusComponentState {
  status: CheckResponse | null;
  error: string | null;
}

const StatusComponent = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<StatusComponentState>({
    status: null,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStatus();
        setState({ status: data, error: null });
      } catch (error) {
        setState({ status: null, error: (error as Error).message });
      }
    };

fetchData();
  }, []);

  return (
    <div>
      {state.error ? (
        <div className={css.errorMessage}>
          {t(state.error)}
        </div>
      ) : state.status ? (
        <div className={css.statusContainer}>
          <h2 className={css.statusCode}>
            {t("Status.status")}: {state.status.status_code}
          </h2>
          <p className={css.statusDetail}>
            {t("Status.detail")}: {state.status.detail}
          </p>
          <p className={css.statusDetail}>
            {t("Status.result")}: {state.status.result}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default StatusComponent;
