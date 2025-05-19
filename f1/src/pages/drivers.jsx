import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SeasonHeader from "../containers/season-header";
import { getDriverStandings } from "../data/seasons-data";

const Drivers = ({ year }) => {
  const { seasonYear } = useParams();
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDriverStandings = async () => {
      try {
        const data = await getDriverStandings(seasonYear);
        const driverStandings = data[0]?.DriverStandings || [];
        setDrivers(driverStandings);
      } catch (error) {
        console.error("Failed to fetch driver standings:", error);
      }
    };

    fetchDriverStandings();
  }, [seasonYear]);

  const displayYear = seasonYear === "current" ? year : seasonYear;

  return (
    <div>
      <SeasonHeader />
      <h2>{displayYear} Drivers Championship</h2>

      {drivers.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Driver</th>
              <th>Nationality</th>
              <th>Car</th>
              <th>Wins</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver.Driver.driverId}>
                <td>{driver.position}</td>
                <td>
                  {driver.Driver.givenName} {driver.Driver.familyName}
                </td>
                <td>{driver.Driver.nationality}</td>
                <td>{driver.Constructors[0]?.name || "N/A"}</td>
                <td>{driver.wins}</td>
                <td>{driver.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Drivers;
