import apiServiceClient from './api-service-client'

async function login(username, password) {
  const response = await apiServiceClient.post('/api/token/', {
    username,
    password,
  })

  return { token: response.data.access }
}

async function getBooks() {
  const response = await apiServiceClient.get('me/books/')

  return response
}

async function deleteBook(isbn) {
  const response = await apiServiceClient.delete('books/', isbn)

  return response
}

async function recognizeBook(file) {
  const response = await apiServiceClient.post('me/books/', { file })
  return response
}

async function performAction(url) {
  const response = await apiServiceClient.post(url)

  return response
}

export default {
  login,
  deleteBook,
  getBooks,
  recognizeBook,
  performAction,
}
