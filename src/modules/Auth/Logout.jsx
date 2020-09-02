// Imports
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// UI
import { Button } from 'antd'

// App Imports
import useUser from './useUser'

// Component
const Logout = () => {
  const [user, setUser] = useUser()
  const history = useHistory()

  useEffect(() => {
    if (!user) {
      history.push('/')
    }
  }, [user, history])

  return (
    <Button
      onClick={() => {
        setUser(null)
      }}
    >
      Logout
    </Button>
  )
}

export default Logout
