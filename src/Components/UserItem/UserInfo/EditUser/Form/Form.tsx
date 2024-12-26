import css from "./form_edit.module.css";
import { Form, Formik } from "formik";
import { Button } from "@mui/material";
import { validationSchema } from "../../../../../Utils/validationSchema";
import UserAvatarUpload from "./InputFild/AvatarUpload/InpudPhoto";
import InputField from "./InputFild/InpudFild";
import UserStatusSelect from "./InputFild/SelectFild";
import UserLinksField from "./InputFild/LinkFild";
import { useTranslation } from "react-i18next";
import { selectAuth } from "Store/auth/auth-selectors";
import { useAppSelector } from "hooks/useTypedRedux";
import Loader from "Components/Loader/Loader";

export type UserUpdate = {
  user_firstname: string;
  user_lastname: string;
  user_status: string | null;
  user_city: string;
  user_phone: string;
  user_links: string[];
  user_password?: string;
  user_password_repeat?: string;
  user_avatar: string;
};

export interface RegProps {
  onSubmit: (values: UserUpdate) => void | Promise<void>;
  submitButtonText: string;
  fields: Array<keyof UserUpdate>;
}

const UpdateUser = ({ onSubmit, submitButtonText, fields }: RegProps) => {
  const { t } = useTranslation();
  const { user } = useAppSelector(selectAuth);

  if (!user) {
    return <Loader/>;
  }

  const INITIAL_STATE: UserUpdate = fields.reduce((acc, field) => {
    const value = user?.[field as keyof typeof user];
    if (field === "user_links") {
      acc[field] = Array.isArray(value) ? value : [""];
    } else if (typeof value === "string") {
      acc[field] = value ?? "";
    } else {
      acc[field] = "";
    }
    return acc;
  }, {} as UserUpdate);

  return (
    <Formik
      initialValues={INITIAL_STATE}
      onSubmit={onSubmit}
      validationSchema={validationSchema(t, fields)}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <p className={css.formHeader}>{submitButtonText}</p>
            {fields.map((field) => {
              if (field === "user_status") {
                return (
                  <UserStatusSelect
                    key={field}
                    value={values[field] || ""}
                    onChange={(value) => setFieldValue(field, value)}
                  />
                );
              }
              if (field === "user_links") {
                return (
                  <UserLinksField
                    key={field}
                    value={values[field] || []}
                    onChange={(links) => setFieldValue(field, links)}
                  />
                );
              }

              if (field === "user_avatar") {
                return (
                  <UserAvatarUpload
                    key={field}
                    value={values[field]}
                    onChange={(file: File) => {
                      setFieldValue(field, URL.createObjectURL(file));
                    }}
                  />
                );
              }
              return (
                <InputField
                  key={field}
                  name={field}
                  label={t(`UserListPage.${field}`)}
                  value={values[field] ?? ""}
                  onChange={(e) => setFieldValue(field, e.target.value)}
                />
              );
            })}
            <Button
              type="submit"
              variant="contained"
            >
              {submitButtonText}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateUser;
