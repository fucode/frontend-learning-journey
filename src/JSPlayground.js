import React from 'react';
import Calculator from './components/Calculator';
import TodoApp from './components/TodoApp';
import './JSPlayground.css';  

const JSPlayground = () => {
  return (
    <div className="js-playground">
      <h1>JavaScript Playground</h1>
      
      <section>
        <h2>Calculator</h2>
        <Calculator />
      </section>

      <section>
        <h2>To-Do App</h2>
        <TodoApp />
      </section>
    </div>
  );
};

export default JSPlayground;
