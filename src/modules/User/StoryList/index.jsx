// Imports
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// UI
import { Button, Table, Space } from 'antd'

// App Imports
import './style.scss'
import api from 'setup/api'
import { apiUrl } from 'setup/helpers'
import routesApi from 'setup/routesApi'
import tableColumns from './tableColumns'
import Logout from 'modules/Auth/Logout'

const StoryList = () => {
  // State
  const [storyList, setStoryList] = useState([])

  // Load Stories
  useEffect(() => {
    fetchStories()
  }, [])

  const fetchStories = async () => {
    try {
      const { data } = await api.get(apiUrl(routesApi.stories.list))
      if (data) {
        setStoryList(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Space direction="vertical" size="large" className="user-story-list">
      <Space size="large">
        <Logout />
        <Link as={Button} to={'/user/story/create'}>
          Create Story
        </Link>
      </Space>
      <Table
        dataSource={storyList}
        columns={tableColumns}
        pagination={false}
        rowKey="id"
      />
    </Space>
  )
}

export default StoryList
