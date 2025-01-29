import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AccessYourLand from './Components/AccessYourLand';
import CreateOrganicFertilizers from './Components/CreateOrganicFertilizers';
import PlanAFarmVisit from './Components/PlanAFarmVisit';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import BalconyCropRecommender from './Components/BalconyCropRecommendation';
import RooftopCropRecommender from './Components/RooftopCropRecommendation';
import VerandaCropRecommender from './Components/VerandaCropRecommendation';
import BuyPremium from './Components/BuyPremium';
import InsuranceTerms from './Components/InsuranceTerms';
import PremiumPurchase from './Components/PremiumPurchase';

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
        <Route path='/access-your-land/balcony-crop-recommendation' element={<BalconyCropRecommender></BalconyCropRecommender>}></Route>
        <Route path='/access-your-land/rooftop-crop-recommendation' element={<RooftopCropRecommender></RooftopCropRecommender>}></Route>
        <Route path='/access-your-land/veranda-crop-recommendation' element={<VerandaCropRecommender></VerandaCropRecommender>}></Route>
        <Route path='/buy-premium' element={<BuyPremium></BuyPremium>}></Route>
        <Route path='/insurance-terms' element={<InsuranceTerms></InsuranceTerms>}></Route>
        <Route path='/premium-purchase' element={<PremiumPurchase></PremiumPurchase>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
