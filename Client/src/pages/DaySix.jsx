import React from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import SevenDaysNotice from './pageimg/SevenDaysNotice.png';
import './DayOne.css';
import DaySixCard from './components/DaySixCard';
import Footer from './components/Footer';

const DaySix = () => {
    return (
        <>
        <Header/>
        <br/><br/><br/>
        <div class="notice"><img alt="notice"src={SevenDaysNotice}/></div>
        <br/><br/><br/>
        <div id  = "container">
        <DaySixCard/>
        </div>
        <br/><br/>
        <Footer/>
        </>
    );
};

export default DaySix;