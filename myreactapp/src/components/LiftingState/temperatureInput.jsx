import React from "react";

const scaleNames = {
    c: 'Celcius',
    f: 'Fahrenheit',
};

export default function TemperatureInput({ temperature, scale, onTempuratureChange }) {

    return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}: </legend>
          <input
            type="text"
            value={temperature}
            onChange={(e) => onTempuratureChange(e, scale)}
          />
        </fieldset>
    )
}
