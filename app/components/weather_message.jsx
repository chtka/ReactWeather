var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props;

  return (
    <div>
      It is {temp} in {location}.
    </div>
  );
};

module.exports = WeatherMessage;