import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getStarships } from "../ducks/starshipsDucks";

const Starships = ({ getStarships, data }) => {
  useEffect(() => {
    if (data.length === 0) {
      getStarships();
    }
  }, [data.length, getStarships]);

  return (
    <div>
      <p>Starships</p>

      {data.map(ships => (
        <h2 key={ships.name}>{ships.name}</h2>
      ))}
    </div>
  );
};

const mapStateToProps = ({ starships }) => ({ data: starships.data });
const mapDispatchToProps = { getStarships };

export default connect(mapStateToProps, mapDispatchToProps)(Starships);
