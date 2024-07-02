import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store, {  persistor } from './app/Store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import TodoList from './components/TodoList.jsx'
import { PersistGate } from 'redux-persist/integration/react'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "TodoList/",
    element: <TodoList />,
    errorElement: <ErrorPage />

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
)
