import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missionList = missions.map((mission) => (
      <MissionCard
        key={ mission.name }
        name={ mission.name }
        country={ mission.country }
        destination={ mission.destination }
      />
    ));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionList}
      </div>
    );
  }
}

export default Missions;
