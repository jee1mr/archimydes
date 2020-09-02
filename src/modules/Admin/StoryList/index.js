// Imports
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

// UI
import { Table } from 'antd'

// App Imports
import './style.scss'
import api from 'setup/api'
import { apiUrl } from 'setup/helpers'
import routesApi from 'setup/routesApi'
import tableColumns from 'modules/User/StoryList/tableColumns'
import Logout from 'modules/Auth/Logout'

const StoryList = () => {
  const history = useHistory()
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

  const getRowStyle = (record) => {
    return record.status ? record.status : 'default'
  }

  const onRow = (record) => {
    return {
      onClick: () => {
        history.push(`/admin/story/review/${record.id}`)
      },
    }
  }

  return (
    <>
      <Logout />
      <Table
        onRow={onRow}
        rowClassName={getRowStyle}
        dataSource={storyList}
        columns={tableColumns}
        pagination={false}
        rowKey="id"
        className="admin-story-table"
      />
    </>
  )
}

export default StoryList
