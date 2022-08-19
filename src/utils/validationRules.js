export const isRequired = (value) => ({
  hasPassed: !!value,
  message: "Fill in this field, please",
});

export const charLimit = (limit) => (value) => ({
  hasPassed: value.length <= limit,
  message: "The char limit has been exceeded",
});

export const emailValidation = (value) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
  message: "The email is wrong",
});

export const passwordValidation = (value) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(value),
  message: "The password must contain at least one number and one symbol",
});
