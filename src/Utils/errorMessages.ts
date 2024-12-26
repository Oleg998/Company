export const getErrorMessages = (error: unknown) => {
  const errorMessages: Record<number | string, string> = {
    500: "Errors.serverError",
    404: "Errors.notFound",
    401: "Errors.unauthorized",
    403: "Errors.forbidden",
    400: "Errors.badRequest",
    unexpected: "Errors.unexpectedError",
  };

  return errorMessages;
};
