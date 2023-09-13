export const updateWhere = (whereFn, updateFn, thing) => {
  if (whereFn(thing)) {
    return updateFn(thing);
  }
  if (Array.isArray(thing)) {
    return thing.map((subThing) => updateWhere(whereFn, updateFn, subThing));
  }
  if (thing !== null && typeof thing === "object") {
    return Object.keys(thing).reduce((acc, key) => {
      acc[key] = updateWhere(whereFn, updateFn, thing[key]);
      return acc;
    }, {});
  }
  return thing;
};
