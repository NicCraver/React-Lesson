import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
function Index() {
  useEffect(() => {
    console.log('useEffect=>老弟，你来了！Index页面')
    return () => {
      console.log('老弟，你走了!Index页面')
    }
  })
  return <h2>JSPang.com</h2>
}

function List() {
  useEffect(() => {
    console.log('useEffect=>老弟，你来了！List页面')
    return () => {
      console.log('老弟，你走了!Index页面')
    }
  })

  return <h2>List-Page</h2>
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>说金钱是罪恶，都在捞;说美女是祸水，都想要;说高处不胜寒，都在爬;说烟酒伤身体，都不戒;说天堂最美好，都不去!</div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        click me
      </button>

      <Router>
        <ul>
          <li>
            {' '}
            <Link to="/">首页</Link>{' '}
          </li>
          <li>
            <Link to="/list/">列表</Link>{' '}
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  )
}

export default App
