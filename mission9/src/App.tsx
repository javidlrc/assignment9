import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json';

interface TeamData {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <div>
      <h1>Welcome to MARCH MADNESS!!!!</h1>
      <h3>
        With March Madness upon us, we created this website that lists out
        information about all the colleges in NCAA Basketball.
      </h3>
    </div>
  );
}

class Team extends React.Component<TeamData> {
  render() {
    const oneTeam = this.props;

    return (
      <div className="team-card">
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList({ teams }: { teams: TeamData[] }) {
  return (
    <div>
      {teams.map((teamNum) => (
        <Team key={teamNum.tid} {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="App">
        <Welcome />
      </div>
      <br></br>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/March_Madness_logo.svg/1200px-March_Madness_logo.svg.png"
          width="400"
          alt="March Madness Logo"
        />
      </div>
      <br></br>
      <div>
        <TeamList teams={teamData.teams} />
      </div>
    </div>
  );
}

export default App;
