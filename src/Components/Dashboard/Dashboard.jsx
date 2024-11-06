import React from 'react';
import SummaryCards from './SummaryCards.jsx';
import ActivityChart from './ActivityChart.jsx';
import ProductChart from './ProductChart.jsx';
import './Dashboard.css';
import bar_chart from "../../assets/bar-chart.png";
import pie_chart from "../../assets/pie-chart.png";
function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <SummaryCards />


      <div className='activity'>
        <h1>Activities</h1>
        <div className='act-mid-row'>
          <p className='bar-months'>May-June 2021</p>
          <div className='labels'>
            <div className='label-each'>
              <div className='dot green'></div>
              <p>Guest</p>
            </div>
            <div className='label-each'>
              <div className='dot red'></div>
              <p>User</p>
            </div>
          </div>

        </div>
        <img src={bar_chart} alt="" />
      </div>
      
      <div className='product'>
        <div className='product-each'>
          <div className='pro-top'>
            <h2>Top Profiles</h2>
            <p>May-June 2021</p>
          </div>
          <div className='pro-charts'>
            <img src={pie_chart} alt="" />

            <div className='pro-info'>
              <div className='pro-info-each'>
                <div className='dot-info'>
                  <div className='dot  green'></div>
                  <p>Basic Tees</p>
                </div>
                <p  className='dot-per'>55%</p> 
              </div>

              <div className='pro-info-each'>
                <div className='dot-info'>
                  <div className='dot yellow'></div>
                  <p>Custom Short Pants</p>
                </div>
                <p  className='dot-per'>31%</p> 
              </div> 

              <div className='pro-info-each'>
                <div className='dot-info'>
                  <div className='dot red'></div>
                  <p>Super Hoodies</p>
                </div>
                <p  className='dot-per'>14%</p> 
              </div>
            </div>
            </div>
        </div>
        <div  className='product-each product-add'>
          <div className='add'>+</div>
          <p>Add profile</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
