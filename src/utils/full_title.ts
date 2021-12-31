export const fullTitle = (pageTitle?: string) => {
  const baseTitle = "Sample App";
  if (pageTitle) {
    return `${pageTitle} | ${baseTitle}`;
  }
  return baseTitle;
};
