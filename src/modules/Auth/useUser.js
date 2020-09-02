// Imports
import { useState, useEffect } from 'react'

const getUser = (key, initialValue) => {
  try {
    const savedUser = JSON.parse(localStorage.getItem(key))
    if (savedUser) return savedUser
  } catch (error) {}
  if (initialValue instanceof Function) return initialValue()
  return initialValue
}

export default function (key = 'user', initialValue = null) {
  const [user, setUser] = useState(() => {
    return getUser(key, initialValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(user))
  }, [user, key])

  return [user, setUser]
}
