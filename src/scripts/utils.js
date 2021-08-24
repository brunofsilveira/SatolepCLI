export function concatArrays(objValue, srcValue) {
  if (lodash.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
}
