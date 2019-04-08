import React from "react";
import PropTypes from "prop-types";

const OperationTime = ({ time, name, weekday, onTimeChange, TimePicker }) => {
  if (!TimePicker)
    return (
      <div className="operationTime block">
        <input
          type="text"
          className="mini-time operationTimeFrom"
          defaultValue={time}
          onChange={e => onTimeChange(weekday, name, e.target.value)}
        />
      </div>
    );
  else {
    return TimePicker(time, value => onTimeChange(weekday, name, value));
  }
};

OperationTime.propTypes = {
  time: PropTypes.string,
  name: PropTypes.string.isRequired,
  weekday: PropTypes.number,
  onTimeChange: PropTypes.func.isRequired,
  TimePicker: PropTypes.func
};

export default OperationTime;
