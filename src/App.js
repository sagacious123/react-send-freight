import './App.css';
import BookingPage from './components/BookingPage';
import React, { useState } from 'react'

function App() {

	const [service, setService] = useState('Air Freight');
  const [dangerousCargoToggle, setDangerousCargoToggle] = useState(false);
  const [cargoDetailsToggle, setCargoDetailsToggle] = useState("Total Dimensions");
  const [cargoDetailsIndex, setCargoDetailsIndex] = useState(0);


	// localStorage.setItem(service, 'newService');
	// window.onload = () => {
	// 	localStorage.getItem(newService)
	// 	localStorage.getItem(newIndex)
	// } 
	console.log(cargoDetailsToggle, cargoDetailsIndex)

  return (
    <>
      <BookingPage 
      	service={service}
      	setService={setService}
        dangerousCargoToggle={dangerousCargoToggle} 
        setDangerousCargoToggle={setDangerousCargoToggle}
        cargoDetailsToggle={cargoDetailsToggle} 
        setCargoDetailsToggle={setCargoDetailsToggle}
        cargoDetailsIndex={cargoDetailsIndex}
        setCargoDetailsIndex={setCargoDetailsIndex}
      />
    </>
  );
}

export default App;
