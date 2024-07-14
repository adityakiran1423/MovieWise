// form for inputting user movie name

import React from 'react';

function InputForm() {
    return (
        <form>
          <label htmlFor="fname">Enter your movie name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <button type="submit">Get Recs!</button>
        </form> 
    );
}

export default InputForm;