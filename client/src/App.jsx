
import { Routes, Route } from 'react-router-dom'

// React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

// Components
import Navbar from './components/Navbar.jsx'

// Pages
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'

// User Pages
import AllUsers from './pages/userPages/AllUsers.jsx'
import AddUser from './pages/userPages/AddUser.jsx'
import GetOneUser from './pages/userPages/GetOneUser.jsx'
import UpdateUser from './pages/userPages/UpdateUser.jsx'
import DeleteOneUser from './pages/userPages/DeleteOneUser.jsx'

// Project Pages
import AddProject from './pages/projectPages/AddProject.jsx'
import AllProjects from './pages/projectPages/AllProjects.jsx'
import DeleteOneProject from './pages/projectPages/DeleteOneProject.jsx'
import GetOneProject from './pages/projectPages/GetOneProject.jsx'
import UpdateProject from './pages/projectPages/UpdateOneProject.jsx'

// Post Pages
import AddPost from './pages/postPages/AddPost.jsx'
import AllPosts from './pages/postPages/AllPosts.jsx'
import DeleteOnePost from './pages/postPages/DeleteOnePost.jsx'
import GetOnePost from './pages/postPages/GetOnePost.jsx'
import UpdatePost from './pages/postPages/UpdateOnePost.jsx'

// Error Pages
import NotFound from './pages/errorPages/NotFound.jsx'



function App() {

  return (
    <>
      <Navbar />
      <Container fluid>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users' element={<AllUsers />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/:id' element={<GetOneUser />} />
          <Route path='/users/update/:id' element={<UpdateUser />} />
          <Route path='/users/delete/:id' element={<DeleteOneUser />} />
          <Route path='/projects' element={<AllProjects />} />
          <Route path='/projects/add' element={<AddProject />} />
          <Route path='/projects/:id' element={<GetOneProject />} />
          <Route path='/projects/update/:id' element={<UpdateProject />} />
          <Route path='/projects/delete/:id' element={<DeleteOneProject />} />
          <Route path='/posts' element={<AllPosts />} />
          <Route path='/posts/add' element={<AddPost />} />
          <Route path='/posts/:id' element={<GetOnePost />} />
          <Route path='/posts/update/:id' element={<UpdatePost />} />
          <Route path='/posts/delete/:id' element={<DeleteOnePost />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </Container>
    </>

  )
}

export default App
