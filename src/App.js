
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import { LandingPage } from './LandingPage';
import Footer from './component/Footer';
import Nav from './component/Nav'

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
       <Route path='/' element={<LandingPage />} exat={true} />
     </Routes>
     <Footer/>
    </>
  );
}


export default App;
