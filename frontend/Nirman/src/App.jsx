import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AccessYourLand from './Components/AccessYourLand';
import CreateOrganicFertilizers from './Components/CreateOrganicFertilizers';
import PlanAFarmVisit from './Components/PlanAFarmVisit';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/access-your-land" element={<AccessYourLand />} />
        <Route path='/create-organic-fertilizers' element={<CreateOrganicFertilizers></CreateOrganicFertilizers>}></Route>
        <Route path='/plan-a-farm-visit' element={<PlanAFarmVisit></PlanAFarmVisit>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
