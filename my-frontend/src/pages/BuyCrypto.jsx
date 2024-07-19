import React from 'react';
// import Footer from '../model/Footer';

function BuyCrypto() {
  return (
    
    <div className="fixed inset-0 flex justify-center items-center bg-white">
      <iframe
        style={{ borderRadius: '4px', border: '1px solid #58585f', margin: 'auto', width: '420px' }}
        src="https://buy.onramper.com?apiKey=pk_prod_01HM6B5MM8MKP6NA324DB9MTY5"       
        height="630px"
        width="420px"
        title="Onramper widget"
        allow="accelerometer; autoplay; camera; gyroscope; payment"
      ></iframe>
      
    </div>
   
  );
}

export default BuyCrypto;
