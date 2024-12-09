async function failable(promise) {
  try {
    const data = await promise
    return [undefined, data] 
  } catch (error) {
    return [error] 
  }
}

function failableSync(func, ...args) {
  try {
    const retVal = func(...args) 
    return [undefined, retVal] 
  } catch (error) {
    return [error] 
  }
}

module.exports = { failable, failableSync }
