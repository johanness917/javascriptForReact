import { useState } from "react";


const Bulb = () => {
  const [light, setLight] = useState('ON');
  const onLightClick = (e) => { setLight(light === 'ON' ? 'OFF' : 'ON') }

  console.log(light);
  return <>
    <div>
      {light === 'ON' ? (
        <h1 style={{ backgroundColor: 'orange', width: 150 }}>Bulb ON</h1>

      ) : (
        <h1 style={{ backgroundColor: 'gray', width: 150 }}>Bulb OFF</h1>
      )}
      <p>{console.log('rander')}</p>
      <button type="button" onClick={onLightClick}> {light === 'ON' ? 'OFF' : 'ON'} </button>
    </div >
  </>
}
export default Bulb;