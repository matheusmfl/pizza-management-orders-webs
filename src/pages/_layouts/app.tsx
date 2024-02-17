import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <h1>Cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
