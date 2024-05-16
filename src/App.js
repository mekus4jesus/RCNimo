
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import { LandingPage } from './LandingPage';
import Footer from './component/Footer';
import Nav from './component/Nav'
import { GalleryComponent } from './component/GalleryComponent';

function App() {
  return(
  <Router basename={process.env.PUBLIC_URL}>
    <AppContent />
  </Router>
  )
}

function AppContent(){
  return (
    <>
     <Nav/>
     <Routes>
       <Route path='/' element={<LandingPage />} exact={true} />
       <Route path='/gallery' element={<GalleryComponent />} />
     </Routes>
     <Footer/>
    </>
  );
}


export default App;
