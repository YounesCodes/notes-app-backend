const info = (...params) => {
  if (process.env.NODE_ENV !== 'test'){ // dont clog in test mode pls and ty
    console.log(...params)
  }
}

const error = (...params) => {
  if (process.env.NODE_ENV !== 'test'){
    console.error(...params)
  }
}

module.exports = { info, error }