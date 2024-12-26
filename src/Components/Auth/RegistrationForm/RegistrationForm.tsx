import css from "./registrationForm.module.css";
import { Form, Formik } from "formik";
import { validationSchema } from "../../../Utils/validationSchema";
import { Button } from "@mui/material";
import InputField from "../InputFild/InpudFild";
import { useTranslation } from "react-i18next";

export type UserValues = {
  user_email: string;
  user_firstname?: string;
  user_lastname?: string;
  user_password?: string;
  user_password_repeat?: string;
};

const createInitialState = (fields: Array<keyof UserValues>): UserValues => {
  return fields.reduce((state, field) => {
    state[field] = "";
    return state;
  }, {} as UserValues);
};

export interface RegProps {
  onSubmit: (values: UserValues) => void | Promise<void>;
  submitButtonText: string;
  fields: Array<keyof UserValues>;
}

const RegistrationForm = ({ onSubmit, submitButtonText, fields }: RegProps) => {
  const { t } = useTranslation();
  const INITIAL_STATE = createInitialState(fields);

  const loadFormState = () => {
    const storedFormState = localStorage.getItem("registrationFormState");
    if (storedFormState) {
      const parsedState = JSON.parse(storedFormState);
      return parsedState;
    }
    return INITIAL_STATE;
  };

  const handleFormSubmit = (values: UserValues) => {
    onSubmit(values);
    localStorage.removeItem("registrationFormState");
  };

  return (
    <Formik
      initialValues={loadFormState()}
      validationSchema={validationSchema(t, fields)}
      onSubmit={handleFormSubmit}
    >
      {({ setValues, isValid }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setValues((prevValues) => {
            const updatedValues = { ...prevValues, [name]: value };
            const stateToSave = Object.fromEntries(
              Object.entries(updatedValues).filter(
                ([key]) => !key.toLowerCase().includes("password")
              )
            ) as UserValues;
            localStorage.setItem(
              "registrationFormState",
              JSON.stringify(stateToSave)
            );
            return updatedValues;
          });
        };
        return (
          <Form className={css.formContainer}>
            <p className={css.formHeader}>{submitButtonText}</p>
            <div className={css.inputWrapper}>
              {fields.map((field) => {
                const fieldName = `${field}` as keyof UserValues;
                const fieldType = field.includes("email")
                  ? "email"
                  : field.includes("password")
                  ? "password"
                  : "text";
                return (
                  <div key={fieldName}>
                    <InputField
                      label={t(`Form.${field}`)}
                      placeholder={t(`Form.${field}_ph`)}
                      name={fieldName}
                      type={fieldType}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
            </div>
            <Button
              className={css.submitButton}
              type="submit"
              disabled={!isValid}
            >
              {submitButtonText}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
