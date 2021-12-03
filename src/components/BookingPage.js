import React from 'react'
import Header from './Header'
import Main from './Main'

const BookingPage = ({ 
		service, 
		setService, 
		dangerousCargoToggle, 
		setDangerousCargoToggle, 
		cargoDetailsToggle, 
		setCargoDetailsToggle, 
		cargoDetailsIndex, 
		setCargoDetailsIndex }) => {

  return (
    <div>
      <Header />
      <Main 
      	service={service}
      	setService={setService}
      	dangerousCargoToggle={dangerousCargoToggle} 
      	setDangerousCargoToggle={setDangerousCargoToggle}
      	cargoDetailsToggle={cargoDetailsToggle}
      	setCargoDetailsToggle={setCargoDetailsToggle}
      	cargoDetailsIndex={cargoDetailsIndex} 
      	setCargoDetailsIndex={setCargoDetailsIndex}
      />
    </div>
  )
}

export default BookingPage
