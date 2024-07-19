import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/Navbar';
import TransactionTable from './components/TransactionTable';
import BuyCrypto from './pages/BuyCrypto';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivacyPolicy from './pages/Privacy-Policy';
import ShippingPolicies from './pages/ShippingPolicies';
import TermsConditions from './pages/Tearms-Condication';
import Aboutpage from './pages/Aboutus';
import RefundAndReturnPolicies from './pages/RefundRetrund';
// import BuyPage from './components/BuyPage';  // Assuming you have a BuyPage component
// import Header from './components/Header';   // Assuming you have a Header component

function App() {
  return (
    <BrowserRouter>
      
      <div className="flex min-h-screen flex-col bg-muted/40">
        <NavBar />
        <main className="flex-1 p-4">
          <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<TransactionTable />} />
            <Route path="/buy" element={<BuyCrypto />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policies" element={<ShippingPolicies />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/policies-refund" element={<RefundAndReturnPolicies />} />
            {/* <Route path="/buy" element={<BuyPage />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
