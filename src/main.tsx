import { createRoot } from 'react-dom/client'
import { ModalProvider } from '@/contexts/ModalContext'
import { AuthProvider } from '@/contexts/AuthContext'
import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root') as Element).render(
  <AuthProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </AuthProvider>
)
