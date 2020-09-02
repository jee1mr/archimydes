// Imports
import React from 'react'

// UI
import { Form, Input, Select } from 'formik-antd'
import { Button } from 'antd'

// App Imports
import { labelLayout } from './layout'

// Component
const StoryCreateFormUI = () => {
  const { Option } = Select

  return (
    <Form name="story-create-form" className="story-create-form">
      {/* Summary */}
      <Form.Item
        {...labelLayout}
        label="Summary"
        name="summary"
        required={true}
      >
        <Input name="summary" />
      </Form.Item>
      {/* Description */}
      <Form.Item
        {...labelLayout}
        label="Description"
        name="description"
        required={true}
      >
        <Input.TextArea name="description" />
      </Form.Item>
      {/* Type */}
      <Form.Item {...labelLayout} label="Type" name="type" required={true}>
        <Select defaultValue="enhancement" name="type">
          <Option value="enhancement">Enhancement</Option>
          <Option value="bugfix">Bugfix</Option>
          <Option value="development">Development</Option>
          <Option value="qa">QA</Option>
        </Select>
      </Form.Item>
      {/* Complexity */}
      <Form.Item
        {...labelLayout}
        label="Complexity"
        name="complexity"
        required={true}
      >
        <Select defaultValue="low" name="complexity">
          <Option value="low">Low</Option>
          <Option value="mid">Mid</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>
      {/* Estimate */}
      <Form.Item
        {...labelLayout}
        label="Estimated time for completion"
        name="estimatedHrs"
        required={true}
      >
        <Input name="estimatedHrs" />
      </Form.Item>
      {/* Cost */}
      <Form.Item {...labelLayout} label="Cost" name="cost" required={true}>
        <Input name="cost" prefix="$" />
      </Form.Item>
      {/* Submit */}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  )
}

export default StoryCreateFormUI
