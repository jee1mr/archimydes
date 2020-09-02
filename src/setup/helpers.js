const baseUrl = process.env.REACT_APP_API_ENDPOINT

export const apiUrl = (_url) => {
  return `${baseUrl}${_url}`
}
