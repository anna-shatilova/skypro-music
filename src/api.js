const baseURL = 'https://skypro-music-api.skyeng.tech'

export async function getTracks() {
  const response = await fetch(`${baseURL}/catalog/track/all/`)
  if (!response.ok) {
    throw new Error('Ошибка сервера')
  }
  const data = await response.json()

  return data
}
