// Imports
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// App Imports
import Login from 'modules/Login'
import AdminStoryList from 'modules/Admin/StoryList'
import AdminStoryReview from 'modules/Admin/StoryReview'
import UserStoryList from 'modules/User/StoryList'
import UserStoryCreate from 'modules/User/StoryCreate'
import RequireAuth from 'modules/Auth/RequireAuth'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/admin/story/list"
        component={RequireAuth(AdminStoryList, 'Admin')}
      />
      <Route
        path="/admin/story/review/:id"
        component={RequireAuth(AdminStoryReview, 'Admin')}
      />
      <Route
        exact
        path="/user/story/list"
        component={RequireAuth(UserStoryList, 'user')}
      />
      <Route
        exact
        path="/user/story/create"
        component={RequireAuth(UserStoryCreate, 'user')}
      />
    </Router>
  )
}

export default App
