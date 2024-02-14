// import { useLayoutEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/index';
import Process from './Pages/Process/index.jsx';
import Promise from './Pages/Promise/index.jsx';
import DealerPage from './Pages/Dealer/index.jsx';
import Story from './Pages/Story/index';
import Vision from './Pages/Vision/index';
import Login from './Pages/Login';
import Verification from './Pages/Login/Verification.jsx';
import Dashbord from './Pages/Dashboard';
import SignUp from './Pages/SignUp';
import Team from './Pages/Team/index';
import Trade from './Pages/Tradein';
import ScrollToTop from './ScrollToTop.jsx';
import ContactUs from './Pages/ContactUs/index.jsx';
import AddPage from './Pages/AddProduct/Addproduct.jsx';
import Steper from './Pages/Dashboard/Steps.jsx';
import Recent from './Pages/Recent';
import Previous from './Pages/Previous';
import Chat from './Pages/Chat';
import ChatModule from './Pages/Chat/ChatModule.jsx';

import NewPages from './Pages/NewPages/VerifyPage.jsx';
import ConfirmPost from './Pages/NewPages/ConfirmPost.jsx';
import Estimateoffer from './Pages/NewPages/Estimateoffer.jsx';
import BookAppointment from './Pages/NewPages/BookAppointment.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route exact path='/Dashbord' element={<Dashbord />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Verification' element={<Verification />} />
          <Route exact path='/SignUp' element={<SignUp />} />
          <Route path='/process' element={<Process />} />
          <Route path='/promise' element={<Promise />} />
          <Route path='/DealerPage' element={<DealerPage />} />
          <Route path='/story' element={<Story />} />
          <Route path='/vision' element={<Vision />} />
          <Route path='/team' element={<Team />} />
          <Route path='/Trade' element={<Trade />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route exact path='/Add/Car' element={<Steper />} />
          <Route exact path='/Recent' element={<Recent />} />
          <Route exact path='/Previous' element={<Previous />} />
          <Route exact path='/Chat' element={<Chat />} />
          <Route exact path='/Chat/admin' element={<ChatModule />} />

          <Route exact path='/Add' element={<AddPage />} />

          <Route exact path='/NewPages' element={<NewPages />} />
          <Route exact path='/BookAppointment' element={<BookAppointment />} />
          <Route exact path='/ConfirmPost' element={<ConfirmPost />} />
          <Route exact path='/Estimateoffer' element={<Estimateoffer />} />
        
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
