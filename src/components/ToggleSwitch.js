import React from 'react'
import Header from './Header'
import Main from './Main'

const ToggleSwitch = ({ service, setService, dangerousCargoToggle, setDangerousCargoToggle }) => {
  return (
    <>
      <label htmlFor="checkbox" className={dangerousCargoToggle ? `toggle-bg` : `toggle-bg false`}>
        <input type="checkbox" onChange={(e)=> setDangerousCargoToggle(e.target.checked)} id="checkbox" />
        <span className={dangerousCargoToggle ? undefined : `false`}></span>
      </label>
    </>
  )
}

export default ToggleSwitch
