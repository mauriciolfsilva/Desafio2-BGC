import React from 'react';
import dave from './dave.jpg';
import happy from './happy.png';
import hitman from './hitman.jfif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='minions'>
          <img src={dave} className="App-logo1" alt="logo" />
          <h4>Dave</h4>
        </div>
        <div className='minions'>
          <img src={happy} className="App-logo2" alt="logo" />
          <h4>Happy</h4>
        </div>
        <div className='minions'>
          <img src={hitman} className="App-logo3" alt="logo" />
          <h4>Hitman</h4>
        </div>
        <form method='get' action='https://xj5xrrs460.execute-api.us-east-2.amazonaws.com/Prod/'>
            <p>Escolha seu minion</p>
            <select name='produto'>
              <option value='Dave'>Dave</option>
              <option value='Hitman'>Hitman</option>
              <option value='Happy'>Happy</option>
            </select>

            <p>E-mail para enviarmos a reserva</p>
            <input type='text' name='email'></input>
            <br></br>
            <input type='submit' value='Enviar'/>
        </form>
      </header>
    </div>
  );
}

export default App;
