export const getCategoryValue = (category) => {
  if (category.toLowerCase() === 'sports') {
    return 21;
  } else if (category.toLowerCase() === 'history') {
    return 23;
  } else if (category.toLowerCase() === 'politics') {
    return 24;
  }
};
