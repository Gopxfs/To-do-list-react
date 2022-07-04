import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todos } = props;
  return (
    <ul>
      {
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={todos.handleChangeProps}
          deleteTodoProps={todos.deleteTodoProps}
          setUpdate={todos.setUpdate}
        />
      ))
    }
    </ul>
  );
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

TodosList.defaultProps = {

};

export default TodosList;
