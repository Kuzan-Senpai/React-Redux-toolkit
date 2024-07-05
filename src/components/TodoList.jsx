import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, editTodo } from '../features/todo/todoSlice';
import { Link } from 'react-router-dom'

function TodoList() {

    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleInputChange = (id, text) => {
        dispatch(editTodo({ id, text }));
    };

    const handleEditClick = (id) => {
        dispatch(editTodo({ id, isEditing: true }));
    };

    const handleSaveClick = (id, text) => {
        dispatch(editTodo({ id, text, isEditing: false }));
    };

    return (
        <div className='container mx-auto flex flex-col'>
            <div className='text-2xl font-semibold'>Todos</div>
            <Link to='/'>
            <button
            className=' text-white bg bg-stone-500 border-0 py-2 px-6 focus:outline-none hover:bg-stone-700 rounded text-lg mt-12'>
                Back
            </button>
            </Link>
            <ul className='list-none'>
                {Array.isArray(todos) && todos?.map((todo) => (
                    <li
                    className='mt-4 flex justify-between items-center bg-zinc-700 px-4 py-2 rounded space-x-48'
                    key={todo.id}
                    >
                    {todo.isEditing ? (
                        <input
                            type='text'
                            value={todo.text}
                            onChange={(e) => handleInputChange(todo.id, e.target.value)}
                            autoFocus
                            className='bg-transparent text-white focus:outline-none'
                            />
                        ) : (
                            <div className='text-white'>{todo.text}</div>
                        )}
                        <div className='flex space-x-3 py-2'>
                            {todo.isEditing ? (
                                <button
                                    onClick={() => handleSaveClick(todo.id, todo.text)}
                                    className='text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md'
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    onClick={() => handleEditClick(todo.id)}
                                    className='text-white bg-blue-400 border-0 py-1 px-4 focus:outline-none hover:bg-blue-500 rounded text-md'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={1.5}
                                        stroke='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
                                        />
                                    </svg>
                                </button>
                            )}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='w-6 h-6'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default TodoList
