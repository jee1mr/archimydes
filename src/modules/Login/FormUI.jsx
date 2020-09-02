// Imports
import React from 'react'
import { Form, Input, Radio } from 'formik-antd'

// UI
import { Button } from 'antd'

// App Imports
import { labelLayout } from './layout'

// Component
const LoginFormUI = () => {
  return (
    <Form name="login-form" className="login-form">
      {/* Email */}
      <Form.Item {...labelLayout} label="Email" name="email" required={true}>
        <Input name="email" autoComplete="email" />
      </Form.Item>
      {/* Password */}
      <Form.Item
        {...labelLayout}
        label="Password"
        name="password"
        required={true}
      >
        <Input.Password name="password" autoComplete="current-password" />
      </Form.Item>
      {/* Log in as */}
      <Form.Item name="isAdmin" label="Log in as" colon={false}>
        <Radio.Group name="isAdmin">
          <Radio name="isAdmin" value={false}>
            User
          </Radio>
          <Radio name="isAdmin" value={true}>
            Admin
          </Radio>
        </Radio.Group>
      </Form.Item>
      {/* Submit */}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  )
}

export default LoginFormUI
