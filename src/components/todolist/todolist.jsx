// TodoList.js
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TodoDetailPage from '../../pages/DetailPages/detailpages';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedTodo, setEditedTodo] = useState('');
  const [detailTodo, setDetailTodo] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingTodo ? { ...todo, text: editedTodo } : todo
    );
    setTodos(updatedTodos);
    setEditingTodo(null);
    setEditedTodo('');
  };

  const setEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(id);
    setEditedTodo(todoToEdit.text);
  };

  const cancelEdit = () => {
    setEditingTodo(null);
    setEditedTodo('');
  };

  const showDetail = (id) => {
    const todoToShow = todos.find((todo) => todo.id === id);
    setDetailTodo(todoToShow);
  };

  const closeDetail = () => {
    setDetailTodo(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingTodo === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedTodo}
                  onChange={(e) => setEditedTodo(e.target.value)}
                />
                <button onClick={editTodo}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => setEditTodo(todo.id)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <Link to={`/detail/${todo.id}`}>
                  <button>Detail</button>
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
      {detailTodo && (
        <TodoDetailPage todos={todos} onCloseDetail={closeDetail} />
      )}
    </div>
  );
};

export default TodoList;
