// Imports
import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

// UI
import { Card, Descriptions, Button, Space } from 'antd'

// App Imports
import api from 'setup/api'
import { apiUrl } from 'setup/helpers'
import routesApi from 'setup/routesApi'
import Logout from 'modules/Auth/Logout'

// Component
const StoryReview = () => {
  const history = useHistory()
  let { id } = useParams()

  // State
  const [storyDetail, setStoryDetail] = useState([])

  // Load Stories
  useEffect(() => {
    fetchStoryDetail()
  })

  const fetchStoryDetail = async () => {
    // if (!id) return
    try {
      const { data } = await api.get(apiUrl(routesApi.stories.get(id)))
      if (data) {
        setStoryDetail(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const updateStoryStatus = async (status) => {
    try {
      const { statusText } = await api.put(
        apiUrl(routesApi.stories.update(storyDetail.id, status)),
      )
      if (statusText === 'OK') {
        history.push('/admin/story/list')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const accept = () => {
    updateStoryStatus('accepted')
  }

  const reject = () => {
    updateStoryStatus('rejected')
  }

  return (
    <div>
      <Logout />
      <Link to={'/admin/story/list'}>Go back</Link>
      <Card title={storyDetail.summary}>
        <Descriptions column={1} layout="horizontal">
          <Descriptions.Item label="Description">
            {storyDetail.description}
          </Descriptions.Item>
          <Descriptions.Item label="Complexity">
            {storyDetail.complexity}
          </Descriptions.Item>
          <Descriptions.Item label="Type">{storyDetail.type}</Descriptions.Item>
          <Descriptions.Item label="Cost">{storyDetail.cost}</Descriptions.Item>
          <Descriptions.Item label="Created By">
            {storyDetail.createdBy}
          </Descriptions.Item>
          <Descriptions.Item label="Estimated Hours">
            {storyDetail.estimatedHrs}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Space>
        <Button type="primary" onClick={accept}>
          Accept
        </Button>
        <Button type="danger" onClick={reject}>
          Reject
        </Button>
      </Space>
    </div>
  )
}

export default StoryReview
