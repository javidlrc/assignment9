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
        With March Madness upon us, we wanted to create a website that lists out
        information about all the colleges in NCAA Basketball.
      </h3>
    </div>
  );
}

class Team extends React.Component<TeamData> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <h3>
          {oneTeam.city} {oneTeam.state}
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
    <div>
      <div className="App">
        <Welcome />
      </div>

      <div>
        <TeamList teams={teamData.teams} />
      </div>
    </div>
  );
}

export default App;
