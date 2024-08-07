import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
import { Link } from 'react-router-dom'

function AddTodo() {

    const [input, setiInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        if (e && typeof e.preventDefault === 'function') {
            e.preventDefault()
        }
        if (input.trim() !== '') {
            dispatch(addTodo(input))
            setiInput('')
        }
    }



    return (
        <div className='flex gap-2'>
            <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
                <input
                    type="text"
                    className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-6 leading-8 transition-colors duration-200 ease-in-out'
                    placeholder='Enter a Todo...'
                    value={input}
                    onChange={(e) => setiInput(e.target.value)} />
                <button
                    type="submit"
                    className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                    Add Todo
                </button>
            </form>
            <Link to='/TodoList'>
            <button
            className=' text-white bg bg-stone-500 border-0 py-2 px-6 focus:outline-none hover:bg-stone-700 rounded text-lg mt-12'>
                Todo List
            </button>
            </Link>
        </div>
    )
}

export default AddTodo

{/*  */}