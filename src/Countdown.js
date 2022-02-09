//Countdown Timer
import React from "react";

export default function countdown (){
return (
<section className="container">
    <div className="owner-status"></div>
    <div className="countdown">
        <ul
            id="countdown"
            className="count-down"
            data-date="Feb 22, 2022 4:00:00 PM UTC"
        >
            <li className="clock-item">
                <span className="count-number days">20</span>
                <p className="count-text">Days</p>
            </li>

            <li className="clock-item">
                <span className="count-number hours">20</span>
                <p className="count-text">Hour</p>
            </li>

            <li className="clock-item">
                <span className="count-number minutes">20</span>
                <p className="count-text">Min</p>
            </li>

            <li className="clock-item">
                <span className="count-number seconds">20</span>
                <p className="count-text">Sec</p>
            </li>
        </ul>
        <h1>NFT Drop Coming Soon!!</h1>

        <p>We are a first of it's kind NFT that makes you part of our business</p>
        <a href="https://discord.gg/d3PA7tejTJ" target="_blank" rel="noopener noreferrer" className="hero-btn btn"
        ><span>Join the Paleta Pals</span>
        </a>
    </div>
</section>)




const clockDiv = document.getElementById("countdown");
const countDownTime = new Date(
    clockDiv.getAttribute("data-date")
).getTime();

const countdownFunction = setInterval(function () {
    const now = new Date().getTime();
    const diff = countDownTime - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(diff % (1000 * 60) / 1000);

    if (diff < 0) {
        clockDiv.style.display = "none";
        clearInterval(countdownFunction);
    } else {
        clockDiv.querySelector(".days").innerHTML = days;
        clockDiv.querySelector(".hours").innerHTML = hours;
        clockDiv.querySelector(".minutes").innerHTML = minutes;
        clockDiv.querySelector(".seconds").innerHTML = seconds;
    }
}, 1000);
}