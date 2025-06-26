import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '@/routes/AppRouter.tsx'
import { Provider } from "react-redux"
import { store } from "./redux/store"

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>,
)
