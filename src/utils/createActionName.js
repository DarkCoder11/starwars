const createActionName = (prefix, name) => {
  return `@Starwars_${prefix}_${name}`.toUpperCase();
};

export default createActionName;
