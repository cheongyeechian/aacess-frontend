import "./App.css";
import { useState } from "react";
//import logo from "./moralisLogo.svg";
import { Select } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./components/MainPage";
import CreateNewAccount from "./components/CreateNewAccount";
import LoginAccount from "./components/LoginAccount";
import ViewWalletPage from "./components/ViewWalletPage";

function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");

  return (
    <div className="App">
      <header>
        <img src={null} className="headerLogo" alt="logo" />
        <Select
          onChange={(val) => setSelectedChain(val)}
          value={selectedChain}
          options={[
            {
              label: "Mantle",
              value: "0x1389",
            },
            {
              label: "Polygon Mumbai Testnet",
              value: "0x13881",
            },
            {
              label: "Polygon zkEVM Testnet",
              value: "0x5a2",
            },
            {
              label: "Scroll Testnet",
              value: "0x8274f",
            },
          ]}
          className="dropdown"
        ></Select>
      </header>
      {wallet && seedPhrase ? (
        <Routes>
          <Route
            path="/yourwallet"
            element={
              <ViewWalletPage
                wallet={wallet}
                setWallet={setWallet}
                seedPhrase={seedPhrase}
                setSeedPhrase={setSeedPhrase}
                selectedChain={selectedChain}
              />
            }
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recover"
            element={
              <LoginAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
          <Route
            path="/yourwallet"
            element={
              <CreateNewAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
