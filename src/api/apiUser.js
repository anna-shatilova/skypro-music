import { baseURL } from './apiTrack'

export async function registerUser({ email, password }) {
  const response = await fetch(`${baseURL}/user/signup/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0];
    throw new Error(error)
  }

  return data
}

export async function loginUser({ email, password }) {
  const response = await fetch(`${baseURL}/user/login/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    const error = data.email ?? data.password ?? data.detail;
    throw new Error(error)
  }

  return data
}

export async function getToken({ email, password }) {
  const response = await fetch(`${baseURL}/user/token/`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    const error = data.email?.[0] ?? data.username?.[0] ?? data.password?.[0];
    throw new Error(error)
  }

  return data
}
