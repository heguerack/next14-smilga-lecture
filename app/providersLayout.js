'use client'

import { Toaster } from 'react-hot-toast'

export default function ProvidersLayout({ children }) {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  )
}
