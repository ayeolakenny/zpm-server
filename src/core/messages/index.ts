const AUTH = {
  EMAIL_CONFLICT: 'email address is already registered',
  PHONENUMBER_CONFLICT: 'phone number is already registered',
  UNAUTHORIZED: 'wrong credentials',
  LOGGED_IN: 'login successful',
  VERIFY_EMAIL: 'kindly verify your email',
  SHORT_PASSWORD: 'password must be 8 or more',
  FORGOT_PASSWORD_EMAIL: 'check your email to reset your password',
  PASSWORD_MISMATCH: 'password does not match',
  PASSWORD_RESET_SUCCESS:
    'password has been reset, kindly login with new password',
};

const USER = {
  CREATED: 'user created successfully, check email for confirmation',
  NOT_FOUND: 'user does not exist',
  INVALID_EMAIL: 'invalid email',
  FOUND: 'user found',
  INVALID_PHONE_NUMBER: 'the provided phone number is invalid',
  EMAIL_SENT: 'if you have an account an email has been sent',
};

const GENERIC = {
  SOMETHING_WENT_WRONG: 'something went wrong',
};

const OTP = {
  INVALID: 'token is invalid',
};

export const MESSAGES = { AUTH, GENERIC, USER, OTP };
