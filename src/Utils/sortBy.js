export default (list, order) => {
  let propertyName = order.replace('-', '');

  let ret = [...list].sort((a, b) => {
    let aProperty = a[propertyName];
    let bProperty = b[propertyName];

    return aProperty > bProperty ? 1 : aProperty === bProperty ? 0 : -1;
  });

  return order[0] === '-' ? ret.reverse() : ret;
};