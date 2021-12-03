import React, { useState, useEffect } from 'react'
import ToggleSwitch from './ToggleSwitch'

const Main = ({ 
        service, 
        setService, 
        dangerousCargoToggle, 
        setDangerousCargoToggle, 
        cargoDetailsToggle, 
        setCargoDetailsToggle,
        cargoDetailsIndex, 
        setCargoDetailsIndex }) => {

  const [index, setIndex] = useState(0);
  // const [locIndex, setLocIndex] = useState(0);


  // console.log(index)


  // useEffect(() => {
  //   localStorage.setItem('newService', service);
  //   localStorage.setItem('newIndex', index);
  //   // nIndex = localStorage.getItem('newIndex')
    
  // }, [index, service])
  

  const getService = (e) => {
    e.preventDefault();
    setService(e.target.textContent)
    // setLocIndex(localStorage.getItem('newIndex'))
  }

  const handleCargoDetails = (e) => {
    e.preventDefault();
    setCargoDetailsToggle(e.target.textContent)
  }

  // window.onload = () => {
    // nService = localStorage.getItem('newService')
    
  // } 

  // console.log(locIndex);

  return (
    <div className="main">
      <div className="main-container">
        <i className="fa fa-arrow-left"></i>
        <div className="main-heading">
          <h1>New Booking</h1>
          <p>Fill in the information below to get a quote or create a new booking</p>
        </div>
        <form>
          <div className="service-section">
            <h3>Select a service</h3>
            <div className="service">
              <button 
                onClick={(e)=>{
                  getService(e); 
                  setIndex(0);
                }} 
                className={index === 0 ? `active` : undefined}
              >
                  Air Freight
                  <i className="fa fa-plane"></i>
              </button>
              <button 
                onClick={(e)=>{
                  getService(e); 
                  setIndex(1);
                }} 
                className={index === 1 ? `active` : undefined}
              >
                Sea Freight
                <i className="fa fa-ship"></i>
              </button>
              <button 
                onClick={(e)=>{
                  getService(e); 
                  setIndex(2);
                }} 
                className={index === 2 ? `active` : undefined}
              >
                Inland<br/> (Truck & Barge)
                <i className="fa fa-truck"></i>
              </button>
              <button 
                onClick={(e)=>{
                  getService(e); 
                  setIndex(3);
                }} 
                className={index === 3 ? `active` : undefined}
              >
                Customs<br/> Clearance 
                <i className="fa fa-user"></i>
              </button>
            </div>
          </div>
          <div className="service-section">
            <a href="" className="info">
              <i className="fa fa-info"></i>
            </a>
            <div className="transport-terms">
              <div className="btns">
                <button>Import</button>
                <button>Export</button>
              </div>
              <div className="from">
                <label htmlFor="from"> <i className="fa fa-map-marker"></i> From</label>
                <input type="text" id="from" name="from" placeholder="City or port" />
              </div>
              <div className="to">
                <label htmlFor="to"><i className="fa fa-map-marker"></i> To</label>
                <input type="text" id="to" name="to" placeholder="City or port" />
              </div>
              <div className="date">
                <label><i className="fa fa-calendar"></i></label>
                <input type="text" id="date" name="date" placeholder="Ready Date" />
              </div>
              <div className="options">
                <select name="options">
                  <option>Incoterms</option>
                  <option>Incoterms</option>
                  <option>Incoterms</option>
                </select>
              </div>
              <div className="cargo-val">
                <input type="text" id="date" name="date" placeholder="Total Cargo Value" />
              </div>
            </div>
          </div>
          <div className="service-section">
            <div className="cargo-toggle-head">
              <h3>Cargo Details</h3>
              <div className="cargo-toggle-group">
                <ToggleSwitch 
                  dangerousCargoToggle={dangerousCargoToggle} 
                  setDangerousCargoToggle={setDangerousCargoToggle}
                />
                <h5>Dangerous Cargo (ex. Chemicals, Battery)</h5>
              </div>
            </div>
            <div className="details-switch">
              <span className={cargoDetailsIndex === 1 ? 'move-right' : undefined}></span>
              <button 
                className={cargoDetailsIndex === 0 ? 'active' : undefined}
                onClick={(e) => {
                  handleCargoDetails(e);
                  setCargoDetailsIndex(0);
              }}>
                Total Dimensions
              </button>
              <button
                className={cargoDetailsIndex === 1 ? 'active' : undefined}
                onClick={(e) => {
                    handleCargoDetails(e);
                    setCargoDetailsIndex(1);
                }}>
                Package Details
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Main
