export const DEFAULT_URL_IMG = "https://i.ibb.co/JvKSP4t/default.png";

export const MIN_LENGHT_PASSWORD = 8;

export const MIN_LENGHT_NAME = 10;

export const LONG_NAME = `The name must be no more than ${MIN_LENGHT_NAME} characters long.`;

export const SHORT_PASSWORD = `The password must be at least ${MIN_LENGHT_PASSWORD} characters.`;

export const CODE_SEND = `Verification code was successfully sent to the mail.`;

export enum ERROR {
  INCORRECT_INPUT = "Incorrect email, password or name.",
  USER_EXIST = "User with this email exists.",
  PASSWORD_REQUIREMENTS = "The password must contain at least one number, one letter in upper and lower case, and one special character.",
  NO_PERSONAL_DATA = "The password must not contain the username, last name or email address.",
  SIMPLE_PASSWORD = "The password is too easy.",
  INCORRECT_EMAIL = "Incorrect email format.",
  USER_NOT_FOUND = "User with this email was not found.",
  INCORRECT_PASSWORD = "Incorrect password.",
  UNAUTHORIZED_USER = "User is not logged in.",
  USERNAME_NOT_FOUND = "User was not found.",
  FILE_NOT_IMAGE = "The file is not an image.",
  INCORRECT_NAME = "An invalid name was entered.",
  INCORRECT_CODE = "Incorrect code.",
}
