import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import {  Link } from "react-router-dom";
import About from './About.js'
import {Nav, Container} from "react-bootstrap";
import style from "../src/css/style.css";


    export default function Navbar () {

    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="https://PopFizzABQ.com" target="_blank">
                        <img src="config/images/PopFizzBlackAndWhiteSidelogo.png" alt="logo"/>
                    </a>
                </div>
                <div className="menu">
                    <a
                        href="https://discord.gg/d3PA7tejTJ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="config/images/header/discord.webp" alt="discord Icon(website).png" alt="Discord"/>
                    </a>
                    <a
                        href="https://twitter.com/PaletaPalNFT"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="config/images/header/twitter.webp" alt="Twitter"/>
                    </a>
                    <a
                        href="https://opensea.io/collection/popfizzpaletapals"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="config/images/header/opensea.webp" alt="Opensea"/>
                    </a>
                    <button className="wallet-btn btn" id="connectWallet">
                        <a href="https://www.popfizzabq.com/popfizzpaletapals" target="_blank">
                        <span>Pop Fizz Paleta Pals</span>
                      </a>
                    </button>
                </div>
            </div>
        </header>
    );
}
// export default navbar;