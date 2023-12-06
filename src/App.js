import React, { useState } from 'react'
import './style.css';

function App() {
  const [value, setValue] = useState('0');

  function evaluate() {
    if (value.length >= 1) {
      const temp = value.charAt(value.length - 1)

      if (["+", "-", "/", "*"].includes(temp)) {
        return
      }

      // Your code here
      setValue(eval(value))
    }

  }

  function changeHandler(e) {
    setValue(value + e.target.value)
  }

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={value} />
          </div>
          <div className='actions'>
            <input type='button' value="AC" onClick={e => setValue('')} />
            <input
              type='button'
              value='DE'
              onClick={e => {
                if (typeof value === 'string' && value.length > 0) {
                  // Remove the last character from the string
                  setValue(value.slice(0, -1));
                }
              }}
            />
            <input type='button' value='.' onClick={changeHandler} />
            <input type='button' value="/" onClick={changeHandler} />
          </div>
          <div className='actions'>
            <input type='button' value="7" onClick={changeHandler} />
            <input type='button' value="8" onClick={changeHandler} />
            <input type='button' value="9" onClick={changeHandler} />
            <input type='button' value="*" onClick={changeHandler} />
          </div>
          <div className='actions'>
            <input type='button' value="4" onClick={changeHandler} />
            <input type='button' value="5" onClick={changeHandler} />
            <input type='button' value="6" onClick={changeHandler} />
            <input type='button' value="+" onClick={changeHandler} />
          </div>
          <div className='actions'>
            <input type='button' value="1" onClick={changeHandler} />
            <input type='button' value="2" onClick={changeHandler} />
            <input type='button' value="3" onClick={changeHandler} />
            <input type='button' value="-" onClick={changeHandler} />
          </div>
          <div className='actions'>
            <input type='button' value="00" onClick={changeHandler} />
            <input type='button' value="0" onClick={changeHandler} />
            <input type='button' value="=" className='equal' onClick={evaluate} />

          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
