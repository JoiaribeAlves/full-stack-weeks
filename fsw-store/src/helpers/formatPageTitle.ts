const formatPageTitle = (title: string) => {
  const pageTitle = title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .concat(" FSW Store");

  return pageTitle;
};

export { formatPageTitle };
