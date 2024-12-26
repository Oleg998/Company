import * as Yup from "yup";
import { TFunction } from "i18next";
import { UserValues } from "../Components/Auth/RegistrationForm/RegistrationForm";
import { UserUpdate } from "../Components/UserItem/UserInfo/EditUser/Form/Form";
import {
  ValidationConfig,
  ValidationMessages,
} from "./validationPatterns";

export const validationSchema = (
  t: TFunction,
  fields: Array<keyof UserValues | keyof UserUpdate>
) => {
  const schema: Partial<
    Record<keyof UserValues | keyof UserUpdate, Yup.AnySchema>
  > = {
    user_firstname: Yup.string().required(
      t(ValidationMessages.firstNameRequired)
    ),

    user_lastname: Yup.string().required(
      t(ValidationMessages.lastNameRequired)
    ),

    user_email: Yup.string()
      .matches(
        ValidationConfig.email.pattern,
        t(ValidationConfig.email.messageKey)
      )
      .required(t(ValidationMessages.emailRequired)),

    user_password: Yup.string()
      .min(4, t("Valid.passwordMinLength"))
      .matches(
        ValidationConfig.passwordUpperCase.pattern,
        t(ValidationConfig.passwordUpperCase.messageKey)
      )
      .matches(
        ValidationConfig.passwordLowerCase.pattern,
        t(ValidationConfig.passwordLowerCase.messageKey)
      )
      .matches(
        ValidationConfig.passwordNumber.pattern,
        t(ValidationConfig.passwordNumber.messageKey)
      )
      .required(t(ValidationMessages.passwordRequired)),

    user_password_repeat: Yup.string()
      .oneOf(
        [Yup.ref("user_password")],
        t(ValidationMessages.passwordsMustMatch)
      )
      .required(t(ValidationMessages.confirmPasswordRequired)),

    user_phone: Yup.string()
      .notRequired()
      .matches(
        ValidationConfig.phone.pattern,
        t(ValidationConfig.phone.messageKey)
      ),

    user_city: Yup.string().notRequired(),
  };

  const filteredSchema = fields.reduce((acc, key) => {
    if (schema[key]) {
      acc[key] = schema[key];
    }
    return acc;
  }, {} as Partial<Record<keyof UserValues | keyof UserUpdate, Yup.AnySchema>>);

  return Yup.object(filteredSchema);
};
