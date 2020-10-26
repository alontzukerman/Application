import React from 'react';
import './App.css';
import StyledGlobalCovidChart from './styledComponents/StyledGlobalCovidChart';
import StyledCovidChart from './styledComponents/StyledCovidChart';
import StyledNavbar from './styledComponents/StyledNavbar';

function App() {
  return (
    <div className="App">
      {/* <StyledNavbar /> */}
      <h1 style={{letterSpacing: '4px'}}> COVID-19 DASHBOARD</h1>
      <div className="Main">
        <StyledCovidChart />
        <StyledGlobalCovidChart />
      </div>
    </div>
  );
}

export default App;
