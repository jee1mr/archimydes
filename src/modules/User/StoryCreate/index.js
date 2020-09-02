// Imports
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from 'yup'

// UI
import { Card, Space } from 'antd'

// App Imports
import './style.scss'
import api from 'setup/api'
import { apiUrl } from 'setup/helpers'
import routesApi from 'setup/routesApi'
import StoryCreateFormUI from './FormUI'
import Logout from 'modules/Auth/Logout'

const StoryCreate = () => {
  const history = useHistory()
  // Schema
  const schema = yup.object().shape({
    summary: yup.string().required('Please enter a summary'),
    description: yup.string().required('Please enter a description'),
    type: yup.string().required('Please select a type'),
    complexity: yup.string().required('Please select a complexity'),
    estimatedHrs: yup.string().required('Please enter the time estimation'),
    cost: yup.number().required('Please enter the cost'),
  })
  // Form Submission
  const onSubmit = async (formData) => {
    try {
      const { statusText } = await api.post(
        apiUrl(routesApi.stories.path),
        formData,
      )
      if (statusText === 'Created') {
        history.push('/user/story/list')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Space direction="vertical" size="large" className="user-story-create">
      <Logout />
      <Card className="story-create-card" title="Create a Story">
        <Formik
          validationSchema={schema}
          initialValues={{
            summary: '',
            description: '',
            type: 'enhancement',
            complexity: 'low',
            estimatedHrs: '0',
            cost: 0,
          }}
          onSubmit={onSubmit}
        >
          <StoryCreateFormUI />
        </Formik>
      </Card>
    </Space>
  )
}

export default StoryCreate
