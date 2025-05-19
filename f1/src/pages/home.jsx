import React from "react";
import "../styles/home.css";
// import NextRace from "../containers/next-race";

const Home = ({ year, formatDate }) => {
  return (
    <div className="home">
      <h1 className="animated-heading">Welcome to the World of F1</h1>
      <div className="data">
        {/* To display the next race, uncomment the line below */}
        {/* <NextRace formatDate={formatDate} /> */}
      </div>
    </div>
  );
};

export default Home;
