import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../Redux/mission';
import Navigation from '../Navigation/Navigation';
// import { reservationUpdates } from '../../Redux/mission';

const Missions = () => {
  const getMissions = useSelector((state) => state.missions);
  const missions = getMissions;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!getMissions.length) {
      dispatch(fetchMissions());
    }
  }, []);
  return (
    <div>
      <Navigation />
      <div className="missionContainer">
        <table className="missionTable" cellSpacing="0">
          <thead>
            <tr>
              <th className="mission">Missions</th>
              <th className="descr">Description</th>
              <th className="status">Status</th>
              <th className="btn"> </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((data) => (
              <tr key={data.mission_id}>
                <td className="Title">{data.mission_name}</td>
                <td>{data.description}</td>
                <td>
                  {data.reserved && (
                    <span style={{ background: 'green' }}>Active member</span>
                  )}
                  {data.reserved && <span>NOT A MEMBER </span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Missions;
