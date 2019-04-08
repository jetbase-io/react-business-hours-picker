import React, { Component } from "react";
import PropTypes from "prop-types";

import Day from "./day";
import "./index.css";

class BusinessHoursPicker extends Component {
  state = {
    data: [...JSON.parse(JSON.stringify(this.props.data || []))],
    result: ""
  };

  toggleDay = weekday => {
    this.setState(prevState => {
      return {
        data: prevState.data.map((day, i) => {
          if (weekday === i) {
            day.isActive = !day.isActive;
            day.timeFrom = day.isActive ? "09:00" : null;
            day.timeTill = day.isActive ? "18:00" : null;
          }
          return day;
        })
      };
    });
  };

  onTimeChange = (weekday, name, value) => {
    const timeValue = this.props.timePickerParseValue
      ? this.props.timePickerParseValue(value)
      : value;

    this.setState(prevState => {
      return {
        data: prevState.data.map((day, i) => {
          if (weekday === i) {
            day[name] = timeValue;
          }
          return day;
        })
      };
    });
  };

  serialize = () => {
    this.setState({
      result: JSON.stringify(this.state.data)
    });
  };

  render() {
    return (
      <>
        <div className={`businessHoursPicker ${this.props.className}`}>
          {this.state.data.map((day, index) => (
            <Day
              key={index}
              data={day}
              weekday={index}
              toggleDay={this.toggleDay}
              onTimeChange={this.onTimeChange}
              activeClassName={this.props.activeClassName}
              inactiveClassName={this.props.inactiveClassName}
              TimePicker={this.props.TimePicker || null}
            />
          ))}
          <div className="result clean">
            <br />
            <button onClick={this.serialize}>serialize</button>
            <p>{this.state.result}</p>
          </div>
        </div>
      </>
    );
  }
}

BusinessHoursPicker.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  inactiveClassName: PropTypes.string,
  TimePicker: PropTypes.func,
  TimePickerParseValue: PropTypes.func
};

export default BusinessHoursPicker;
