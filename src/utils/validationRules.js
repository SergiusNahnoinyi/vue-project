export const isRequired = (value) => ({
  hasPassed: !!value,
  message: "Fill in this field, please",
});

export const charLimit = (limit) => (value) => ({
  hasPassed: value.length <= limit,
  message: "The char limit has been exceeded",
});
