import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    //wrapper container with tailwind utitlity classes
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      {/* wrapper for side bar */}
      <div className="sm:flex hidden mr-10 relative"> 
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          {/* dynamic route to show details of every single campaign  */}
          <Route path="/campaign-details/:id" element={<CampaignDetails />} /> 
        </Routes>
      </div>
    </div>
  )
}

export default App