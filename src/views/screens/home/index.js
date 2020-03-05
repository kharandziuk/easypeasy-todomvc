import React, { memo } from 'react'

import './index.scss'

import useReactRouter from 'use-react-router'
import routes from '../../../common/routes'
//import classnames from 'classnames'
import { useStoreActions, useStoreState } from '../../../store'
function useHome() {
  const { history } = useReactRouter()
  const { private: privateRoutes } = routes

  const todos = useStoreState(state => state.todos.items)

  return {
    todos,
  }
}

const Item = ({ text }) => (
  <li>
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>{text}</label>
      <button className="destroy" />
    </div>
    <input className="edit" defaultValue="something" />
  </li>
)

function Home() {
  const { todos } = useHome()

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
          {todos.map((el, i) => (
            <Item key={i} text={el.text} />
          ))}
        </ul>
      </section>
      <footer className="footer" style={{ display: 'block' }}>
        <span className="todo-count">
          <strong>{todos.length}</strong> items left
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
