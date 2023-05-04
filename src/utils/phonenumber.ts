import parsePhoneNumber from 'libphonenumber-js';

export const isPhoneNumberValid = (number: string) => {
  const phoneNumber = parsePhoneNumber(number);
  return phoneNumber?.isValid();
};
