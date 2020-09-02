import React from 'react'

const RequireAuth = (Component, requiredRole) => {
  return class App extends React.Component {
    componentWillMount() {
      const user = localStorage.getItem('user')
      if (!user) {
        this.props.history.replace({ pathname: '/' })
      }
      if (user) {
        try {
          const userJSON = JSON.parse(user)
          if (userJSON.role !== requiredRole) {
            this.props.history.replace({ pathname: '/' })
          }
        } catch (error) {
          this.props.history.replace({ pathname: '/' })
        }
      }
    }
    render() {
      return <Component {...this.props} />
    }
  }
}

export default RequireAuth
