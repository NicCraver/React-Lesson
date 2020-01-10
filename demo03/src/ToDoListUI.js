import React from 'react'
import { Input, Button, List } from 'antd'

function ToDoListUI(props) {
  console.log('props :', props)
  const { inputValue, list, changeInpueValue, add, deleteItem } = props
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          style={{ width: '250px', marginRight: '10px' }}
          onChange={changeInpueValue}
          value={inputValue}
        />
        <Button type="primary" onClick={add}>
          增加
        </Button>
      </div>
      <div style={{ margin: '10px 0 0 0', width: '400px' }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                deleteItem(index)
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default ToDoListUI
