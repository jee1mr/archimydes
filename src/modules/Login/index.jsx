// Imports
import React, { useEffect } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

// UI
import { Card } from 'antd'
import { useHistory } from 'react-router-dom'

// App Imports
import './style.scss'
import LoginFormUI from './FormUI'
import routesApi from 'setup/routesApi'
import { apiUrl } from 'setup/helpers'
import useUser from 'modules/Auth/useUser'

const Login = () => {
  // State
  const [user, setUser] = useUser()
  const history = useHistory()

  // Check logged in status
  useEffect(() => {
    if (user) {
      user.role === 'Admin'
        ? history.push('/admin/story/list')
        : history.push('/user/story/list')
    }
  }, [user, history])

  // Schema
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Please enter your email address'),
    password: yup.string().required('Please enter your password'),
    isAdmin: yup.bool().required('Please select a role'),
  })
  // Form Submission
  const onSubmit = async (formData) => {
    try {
      const { data } = await axios.post(apiUrl(routesApi.login.path), formData)
      if (data) {
        setUser(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card className="login-card" title="Log in">
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '', isAdmin: false }}
        onSubmit={onSubmit}
      >
        <LoginFormUI />
      </Formik>
    </Card>
  )
}

export default Login
