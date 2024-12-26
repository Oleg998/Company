export const ValidationConfig = {
  email: {
    pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    messageKey: "Valid.emailInvalid",
  },
  phone: {
    pattern: /^(\+?\d{1,2})?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}$/,
    messageKey: "Valid.phoneInvalid",
  },
  passwordUpperCase: {
    pattern: /[A-ZА-Я]/,
    messageKey: "Valid.passwordUpperCase",
  },
  passwordLowerCase: {
    pattern: /[a-zа-я]/,
    messageKey: "Valid.passwordLowerCase",
  },
  passwordNumber: {
    pattern: /\d/,
    messageKey: "Valid.passwordNumber",
  },
};

export const ValidationMessages = {
  firstNameRequired: "Valid.firstNameRequired",
  lastNameRequired: "Valid.lastNameRequired",
  emailRequired: "Valid.emailRequired",
  passwordRequired: "Valid.passwordRequired",
  confirmPasswordRequired: "Valid.confirmPasswordRequired",
  passwordsMustMatch: "Valid.passwordsMustMatch",
};
