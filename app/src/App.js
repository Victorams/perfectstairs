import React, { useState } from 'react';
import STAIRS from './data.json';
import logo from './logo.svg';
import stairsImage from './stairs.jpg';
import './App.css';

function App() {

  const [ stair, setStair ] = useState(null);

  const handleChange = (event) => {
    const index = event.target.value;
    setStair(STAIRS.data[index]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ margin: 0 }}>
          Perfect Stairs
        </p>
      </header>
      <div className='App-content'>
        <p className='heightSelectText'>
          Select the height of the stairs you want to build:
        </p>
        <div>
          <select
            defaultValue={'placeholder'}
            onChange={handleChange}
          >
            <option hidden disabled value='placeholder'>Choose Here</option>
            {STAIRS.data.map((stairObj, idx) => {
              return (
                <option key={stairObj.altura} value={idx}>
                  {new Number(stairObj.altura).toFixed(2)}m
                </option>
              );
            })}
          </select>
        </div>
        {stair && (
          <div className='stairTypesDiv'>
            <div className='upperDiv'>
              <div className='idealDiv'>
                <p className='idealTitle'>Ideal</p>
                <p>Width: {new Number(stair.comprimentoIdeal).toFixed(2)}m</p>
                <p>Mirror: {new Number(stair.espelhoIdeal).toFixed(2)}m</p>
                <p>Steps: {new Number(stair.degrausIdeal).toFixed(2)}m</p>
              </div>
              <div className='veryGoodDiv'>
                <p className='veryGoodTitle'>Very Good</p>
                <p>Width: {new Number(stair.comprimentoMB).toFixed(2)}m</p>
                <p>Mirror: {new Number(stair.espelhoMB).toFixed(2)}m</p>
                <p>Steps: {new Number(stair.degrausMB).toFixed(2)}m</p>
              </div>
            </div>
            <div className='middleDiv'>
              <div className='goodForBigStepsDiv'>
                <p className='goodForBigStepsTitle'>Good For Big Steps</p>
                <p>Width: {new Number(stair.comprimentoOPG).toFixed(2)}m</p>
                <p>Mirror: {new Number(stair.espelhoOPG).toFixed(2)}m</p>
                <p>Steps: {new Number(stair.degrausOPG).toFixed(2)}m</p>
              </div>
              <div>
                <img src={stairsImage} style={{ width: '250px', height: '250px', borderRadius: '100px'}}></img>
              </div>
              <div className='goodDiv'>
                <p className='goodTitle'>Good</p>
                <p>Width: {new Number(stair.comprimentoBom).toFixed(2)}m</p>
                <p>Mirror: {new Number(stair.espelhoBom).toFixed(2)}m</p>
                <p>Steps: {new Number(stair.degrausBom).toFixed(2)}m</p>
              </div>
            </div>
            <div className='lowerDiv'>
              <div className='averageDiv'>
                <p className='averageTitle'>Average</p>
                <p>Width: {new Number(stair.comprimentoMedio).toFixed(2)}m</p>
                <p>Mirror: {new Number(stair.espelhoMedio).toFixed(2)}m</p>
                <p>Steps: {new Number(stair.degrausMedio).toFixed(2)}m</p>
              </div>
              <div className='badDiv'>
                <p className='badTitle'>Bad</p>
                <p>Width: {new Number(stair.comprimentoRuim).toFixed(2)}m</p>
                <p>Mirror: {new Number(stair.espelhoRuim).toFixed(2)}m</p>
                <p>Steps: {new Number(stair.degrausRuim).toFixed(2)}m</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='footerDiv'>
        Made with ReactJS
        by <a className='git' href='https://github.com/Victorams'>@Victorams</a>
      </div>
    </div>
  );
}

export default App;
