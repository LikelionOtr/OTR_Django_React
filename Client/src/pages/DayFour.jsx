import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import DayFourCard from './components/DayFourCard';
import Footer from './components/Footer';

const DayFour = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice}/></div>
        <br/><br/><br/>
        <div id = "container">
        <DayFourCard/>
        </div>
        <br/><br/>
        <Footer/>
        </>
    );
};

export default DayFour;