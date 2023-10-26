export const isEmpty = (value) => {
  return value.length === 0 ? "Ingrese un valor por favor" : "";
};

export const isPhoneIncorrect = (value) => {
  const regex = /[0-9]{8}/g;
  return !regex.test(value) ? "Ingrese un numero válido por favor" : "";
};
