export const createError = () => {
  const error = new Error(msg)
  error.code = code
  throw error
} 