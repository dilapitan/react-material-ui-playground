import { Outlet } from 'react-router-dom'
import TableOfContents from './TableOfContents.js'
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <TableOfContents />
      <Outlet />
    </div>
  )
}

export default Home
