import React from "react";
import { useConnect } from "wagmi";
import "./styles.css";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <div className="wallet-options">
      <h2
        style={{
          background: "linear-gradient(to right, #32d8f9, #aef1ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Connect Wallet
      </h2>
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          className="wallet-button"
          onClick={() => connect({ connector })}
        >
          {connector.name}
        </button>
      ))}
    </div>
  );
}
