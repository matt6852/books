import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Main from './pages/Main';
import Events from './pages/Events';
import Cooworkers from './pages/Cooworkers';
import News from './pages/News';
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <div className='main'>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="news" element={<News />} />
            <Route path="cooworkers" element={<Cooworkers />} />
            <Route path="events" element={<Events />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>


  )
}

export default App
