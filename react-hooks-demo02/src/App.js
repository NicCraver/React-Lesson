import React, { useState } from 'react'

function App() {
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [work, setWork] = useState('前端程序员')
  const [appList, setAppList] = useState([
    {
      app: 1111
    },
    {
      app: 1111
    },
    {
      app: 1111
    },
    {
      app: 1111
    },
    {
      app: 1111
    }
  ])
  return (
    <div>
      <div>
        {appList.map((item, index) => {
          return <div key={index}>{item.app}</div>
        })}
      </div>
      <div>{sex}</div>
      <div>{work}</div>
    </div>
  )
}

export default App
