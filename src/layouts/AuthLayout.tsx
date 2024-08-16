import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className='bg-primary h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-12 w-1/4'>
        <Outlet />
      </div>
    </main>
  )
}
