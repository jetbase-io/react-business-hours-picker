import React from "react";
import PropTypes from "prop-types";

import OperationTime from "./time";
import { activeClassName, inactiveClassName, weekdays } from "./constants";

const Day = props => {
  const additionalBoxClass = props.data.isActive
    ? props.activeClassName || activeClassName
    : props.inactiveClassName || inactiveClassName;

  return (
    <div className="dayContainer">
      <div
        className={`colorBox ${additionalBoxClass}`}
        onClick={() => props.toggleDay(props.weekday)}
      />
      <div className="weekday">{weekdays[props.weekday]}</div>
      {props.data.isActive && (
        <div className="operationTimeContainer">
          <OperationTime
            time={props.data.timeFrom}
            name="timeFrom"
            onTimeChange={props.onTimeChange}
            weekday={props.weekday}
            TimePicker={props.TimePicker}
          />
          <OperationTime
            time={props.data.timeTill}
            name="timeTill"
            onTimeChange={props.onTimeChange}
            weekday={props.weekday}
            TimePicker={props.TimePicker}
          />
        </div>
      )}
    </div>
  );
};

Day.propTypes = {
  isActive: PropTypes.bool,
  data: PropTypes.object,
  toggleDay: PropTypes.func,
  onTimeChange: PropTypes.func,
  activeClassName: PropTypes.string,
  inactiveClassName: PropTypes.string,
  TimePicker: PropTypes.func
};

export default Day;
