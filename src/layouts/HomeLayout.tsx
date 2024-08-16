import { Outlet } from 'react-router-dom'

export default function HomeLayout() {
  return (
    <main className='w-full flex justify-center mt-16'>
      <Outlet />
    </main>
  )
}
