import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/scrollToTop';

import { Nav } from './components/Nav/Nav';
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactsPage } from './pages/ContactsPage';
import { BiographyPage } from './pages/BiographyPage';
import { Footer } from './components/Footer/Footer';

import { ProjectPage } from './pages/ProjectPage';

import './styles/index.css';

function App() {
  return (
    <div className={'App'}>
      <Router>
        <ScrollToTop/>
        <Nav/>
        <Routes>
          <Route path={'/'} element={<HomePage/>} />
          <Route path={'/project/:id'} element={<ProjectPage/>} />
          <Route path={'/skills'} element={<SkillsPage/>} />
          <Route path={'/contacts'} element={<ContactsPage/>} />
          <Route path={'/biography'} element={<BiographyPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
