import lodash from 'lodash'

export function concatArrays(objValue, srcValue) {
  if (lodash.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
}
