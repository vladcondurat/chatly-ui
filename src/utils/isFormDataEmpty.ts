export const isFormDataEmpty = (formData: FormData): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ of formData.entries()) {
    return false;
  }
  return true;
};
