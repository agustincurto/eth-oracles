import React from "react";
import web3 from "../web3";
import contract from "../contracts/datafeedContract";
import { parsePriceTuple } from "../utils";

class DataFeed extends React.Component {
  state = {
    message: "",
    ethEnable: false,
    ethPrice: null,
    btcEnable: false,
    btcPrice: null,
    linkEnable: false,
    linkPrice: null,
  };

  getETHPrice = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    var msg = "Getting ETH price ... ";
    console.log(msg);
    this.setState( { message: msg });

    try {
      const value = await contract.methods.getETHPrice().
        call({ from: accounts[0], gas: "5000000" });

      const decimals = await contract.methods.getETHDecimals().
        call({ from: accounts[0], gas: "5000000"});

      const price = parsePriceTuple(value, decimals);

      msg = "Price get successfuly";
      console.log(msg, price);
      this.setState({ message: msg, ethEnable: true, ethPrice: price });
    } catch (e) {
      msg = "Error getting ETH price";

      console.log(msg, "Error: ", e);
      this.setState({ message: msg });
    }
  }

  getBTCPrice = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    
    var msg = "Getting BTC price ... ";
    console.log(msg);
    this.setState( { message: msg });

    try {
      const value = await contract.methods.getBTCPrice().
        call({ from: accounts[0], gas: "5000000" });

      const decimals = await contract.methods.getBTCDecimals().
        call({ from: accounts[0], gas: "5000000"});

      const price = parsePriceTuple(value, decimals);

      msg = "Price get successfuly";
      console.log(msg, price);
      this.setState({ message: msg, btcEnable: true, btcPrice: price });
    } catch (e) {
      msg = "Error getting BTC price";

      console.log(msg, "Error: ", e);
      this.setState({ message: msg });
    }
  }

  getLINKPrice = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    
    var msg = "Getting LINK price ... ";
    console.log(msg);
    this.setState( { message: msg });

    try {
      const value = await contract.methods.getLINKPrice().
        call({ from: accounts[0], gas: "5000000" });

      const decimals = await contract.methods.getLINKDecimals().
        call({ from: accounts[0], gas: "5000000"});

      const price = parsePriceTuple(value, decimals);

      msg = "Price get successfuly";
      console.log(msg, price);
      this.setState({ message: msg, linkEnable: true, linkPrice: price });
    } catch (e) {
      msg = "Error getting LINK price";

      console.log(msg, "Error: ", e);
      this.setState({ message: msg });
    }
  }

  render() {
    return (
      <div>
        <hr />
        <h1 align="center">Data Feeds</h1>
        <hr />
        <hr />
        <p>Get USD price of ETH, BTC and LINK crypto currencies</p>
        <hr />
        <button onClick={this.getETHPrice}>ETH</button>

        {this.state.ethEnable && (
          <div>{this.state.ethPrice}</div>
        )}
        <hr />

        <button onClick={this.getBTCPrice}>BTC</button>

        {this.state.btcEnable && (
          <div>{this.state.btcPrice}</div>
        )}
        <hr />

        <button onClick={this.getLINKPrice}>LINK</button>

        {this.state.linkEnable && (
          <div>{this.state.linkPrice}</div>
        )}
        <hr />

        <br></br>
        <br></br>
        <h4>Solidity code example</h4>
        <a href="https://remix.ethereum.org/#url=https://gist.githubusercontent.com/agustincurto/773485d30592238aa96e589e936a644f/raw/a564a0f7f2b75a2afe13ee6e0163d30289ceff25/example.sol">GO!</a>
      </div>
    );
  }
}

export default DataFeed;
