import React from 'react';
import {  Link } from "react-router-dom";
import About from './About.js'
import {Nav, Container} from "react-bootstrap";
import style from "../src/css/style.css";


    export default function Navbar () {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="/">
                        <img src="." alt="logo"/>
                    </a>
                </div>
                <div className="menu">
                    <a
                        href="https://discord.gg/A9CnsVzzkZ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="images/header/discord.webp" alt="Discord"/>
                    </a>
                    <a
                        href="https://twitter.com/CodeCats10k"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="images/header/twitter.webp" alt="Twitter"/>
                    </a>
                    <a
                        href="https://opensea.io/collection/codecats"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="images/header/opensea.webp" alt="Opensea"/>
                    </a>
                    <button className="wallet-btn btn" id="connectWallet">
                        <span>Connect Wallet</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
// export default navbar;