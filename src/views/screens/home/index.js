import React, { memo } from 'react'

import './index.scss'

//import classnames from 'classnames'

function Home() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
      <section className="main" style={{ display: 'block' }}>
        <input className="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>something</label>
              <button className="destroy" />
            </div>
            <input className="edit" defaultValue="something" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>important</label>
              <button className="destroy" />
            </div>
            <input className="edit" defaultValue="important" />
          </li>
        </ul>
      </section>
      <footer className="footer" style={{ display: 'block' }}>
        <span className="todo-count">
          <strong>2</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a className="selected" href="#/">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
      </footer>
    </section>
  )
}

export default memo(Home)
