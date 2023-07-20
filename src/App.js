import React from 'react';
import './App.css';
import MyjournalInfo from './components/MyjournalInfo';
import MyTable from './components/MyTable';


function App() {
  const thoughtList = [
    {
      "Date": "07-19-2023",
      "Thoughts": "Coding is hard"
    },
    {
      "Date": "07-20-2023",
      "Thoughts": "Hart to say"
    }];
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <MyjournalInfo />   
          <MyTable thoughtList={thoughtList} />  
        </div>
      </header>
    </div>
  );
}

export default App;
