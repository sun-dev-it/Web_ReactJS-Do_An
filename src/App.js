import './App.css';
import Web3 from "web3";
import React, { useState, useEffect } from 'react';
import detectEthereumProvider from "@metamask/detect-provider"

function App() {

  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        await provider.request({ method: 'eth_requestAccounts' });
        setWeb3Api ({
          web3: new Web3(provider),
          provider,
        });
      } else {
        console.error("plese, Install Metamask");
      }
    }

    loadProvider()
  }, []);
  
  return (
    <div className="faucet-wrapper">
      <div className="faucet">
        <div className="balance-view is-size-2">
          Curent Balance: <strong>10 ETH</strong>
        </div>
        <button className="button is-primary mr-5">Donate</button>
        <button className="button is-danger">Withdraw</button>
      </div>
    </div>
  );
}

export default App;
