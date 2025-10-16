import React from 'react'

export function StorybookProvider({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
