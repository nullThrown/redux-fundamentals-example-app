import React from 'react'
import TodoList from './components/todoList'
import Footer from './components/footer'
import Input from './components/input'

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <main className="main-container">
        <h2 className="title">Todo App</h2>
        <Input />
        <TodoList />
        <Footer />
      </main>
    </div>
  )
}

export default App
