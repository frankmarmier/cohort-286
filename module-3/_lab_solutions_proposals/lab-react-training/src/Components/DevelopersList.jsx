import React from 'react';

const DevelopersList = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.developers.map((dev) => {
        return (
          <div>
            <p>{dev.firstName}</p>
            <p>{dev.country}</p>
            <p>{dev.language}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DevelopersList;
