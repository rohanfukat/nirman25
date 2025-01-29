import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AccessYourLand from './Components/AccessYourLand';
import CreateOrganicFertilizers from './Components/CreateOrganicFertilizers';
import PlanAFarmVisit from './Components/PlanAFarmVisit';
import Navbar from './Components/Navbar';
import PNavbar from './PremiumComponents/Navbar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import BalconyCropRecommender from './Components/BalconyCropRecommendation';
import RooftopCropRecommender from './Components/RooftopCropRecommendation';
import VerandaCropRecommender from './Components/VerandaCropRecommendation';
import BuyPremium from './Components/BuyPremium';
import PremiumPurchase from './Components/PremiumPurchase';
import WeatherDashboard from './PremiumComponents/WeatherDashboard';
import PHomePage from './PremiumComponents/HomePage';

import PCreateOrganicFertilizers from './PremiumComponents/CreateOrganicFertilizers';
import PPlanAFarmVisit from './PremiumComponents/PlanAFarmVisit';
import PAccessYourLand from './PremiumComponents/AccessYourLand';
import PInsuranceTerms from './PremiumComponents/InsuranceTerms';
import PCropForm from './PremiumComponents/PCropForm';
import PCropAns from './PremiumComponents/PCropAns';

import CommunityPage from './Components/Community';

// Wrapper component to handle navbar logic
const AppContent = () => {
  const location = useLocation();
  
  // Check if we're on the premium homepage or other premium routes
  const isPremiumRoute = (location.pathname === '/homepage-premium') || (location.pathname === '/create-organic-fertilizers-premium') || (location.pathname === '/access-your-land-premium') || (location.pathname === '/plan-a-farm-visit-premium') || (location.pathname === '/insurance-terms-premium') || (location.pathname === '/weather-dashboard-premium');
  
  return (
    <>
      {isPremiumRoute ? <PNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/access-your-land" element={<AccessYourLand />} />
        <Route path="/create-organic-fertilizers" element={<CreateOrganicFertilizers />} />
        <Route path="/plan-a-farm-visit" element={<PlanAFarmVisit />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route 
          path="/access-your-land/balcony-crop-recommendation" 
          element={<BalconyCropRecommender />} 
        />
        <Route 
          path="/access-your-land/rooftop-crop-recommendation" 
          element={<RooftopCropRecommender />} 
        />
        <Route 
          path="/access-your-land/veranda-crop-recommendation" 
          element={<VerandaCropRecommender />} 
        />
        <Route path="/buy-premium" element={<BuyPremium />} />
        
        <Route path="/premium-purchase" element={<PremiumPurchase />} />
        <Route path="/homepage-premium" element={<PHomePage />} />

        <Route 
          path="/create-organic-fertilizers-premium" element={<PCreateOrganicFertilizers />} 
        />
        <Route path="/plan-a-farm-visit-premium" element={<PPlanAFarmVisit />} />
        <Route path="/access-your-land-premium" element={<PAccessYourLand />} />
        <Route path="/insurance-terms-premium" element={<PInsuranceTerms />} />
        <Route path="/access-your-land-premium/weather-dashboard-premium" element={<WeatherDashboard />} />
        <Route path="/crop-form-premium" element={<PCropForm />} />
        <Route path="/crop-ans-premium" element={<PCropAns />} />

        <Route path="/community" element={<CommunityPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;