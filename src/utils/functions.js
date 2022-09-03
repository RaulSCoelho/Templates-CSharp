export function AddToObj(oldObject, newObject) {
  if (newObject) {
    let both = {};

    for (const [key, value] of Object.entries(newObject)) {
      both = {
        ...oldObject,
        [key]: value,
      };
    }
    return both;
  }
  return oldObject;
}
