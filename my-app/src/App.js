import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableWrapper from './components/TableWrapper';

function App() {
  return (
    <div className="App-header">
      <header style={{padding: "0px 50px"}}>
      <h1 style={{marginBottom: "0px"}}>2020 Corporate Equality Index</h1>
      <p style={{marginTop: "0px"}}>Data parsed from the Human Rights Council</p>
        <ul style={{listStyle: "none", fontSize: "16px", lineHeight: 1.5}}>
          <li>1a - Prohibits discrimination based on sexual orientation for all operations (15 points)</li>
          <li>1b - Prohibits discrimination based on gender identity for all operations (15 points)</li>
          <li>2a - Equivalency in same- and different-sex spousal medical and soft benefits (10 points)</li>
          <li>2b - Equivalency in same- and differentsex domestic partner medical and soft benefits (10 points / half credit for parity across some, but not all benefits)</li>
          <li>2c - Equal health coverage for transgender individuals without exclusion for medically necessary care (10 points / half credit for inclusive coverage, but blanket exclusions for transitionrelated care remain in place)</li>
          <li>3a - Three LGBTQ internal training and education best practices (10 points)</li>
          <li>3b - Employee group or diversity council (10 points)</li>
          <li>3c - Three distinct efforts of outreach or engagement to broader LGBTQ community, and if supplier diversity program is in place, must include LGBTQ suppliers (15 points)</li>
          <li>3d - Contractor/supplier non-discrimination standards and philanthropic giving guidelines (5 points)</li>
          <li>4 - Employers will have 25 points deducted from their score for a large-scale official or public anti-LGBTQ blemish on
their recent records.</li>
        </ul>

      </header>
      <header className="App-header">
        <p>
          <TableWrapper />
        </p>
      </header>
    </div>
  );
}

export default App;
