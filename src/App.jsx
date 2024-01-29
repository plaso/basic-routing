import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import Navbar from './components/Navbar/Navbar';
import Error from './pages/Error/Error';
import PostDetail from './pages/PostDetail/PostDetail';
import postsJSON from './posts.json';
import './App.css'
import { useState } from 'react';

function App() {
  const [posts, setPosts] = useState(postsJSON);

  return (
    <div>
      <Navbar />

      <div className="container">
        {/* Aqui declaramos "estilo switch" las rutas de la aplicación y el componente que pintará en cada una de ellas */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts posts={posts} />} />
          <Route path='/posts/:postId' element={<PostDetail posts={posts} />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
