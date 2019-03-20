import React, { useState } from 'react';

function useInput(){
  const [value, setValue ] = useState('');

  function onChange(event){
    setValue(event.target.value);
  }

  return{
    value,
    onChange
  }
}
function App(){

  // const {value: name, onChange: handleNameChange } = useInput()
  // const {value: surname, onChange: handleSurnameChange } = useInput()
  // const {value: age, onChange: handleAgeChange } = useInput()

  return(
    <form>
      <input
        type="text"
        placeholder="Name"
        { ...useInput}
        // value={name}
        // onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Surname"
        { ...useInput}
        // value={surname}
        // onChange={handleSurnameChange}
      />
      <input
        type="number"
        placeholder="Age"
        {...useInput}
        // value={age}
        // onChange={handleAgeChange}
      />

      
    </form>
  )
}

export default App;
