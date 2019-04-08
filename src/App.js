import React, { Component } from "react";
import { TimePicker } from "antd";
import TimePickerTimes from "react-times";
import moment from "moment";

import { data } from "./components/businesshourspicker/constants";
import BusinessHoursPicker from "./components/businesshourspicker";

import "antd/dist/antd.css";
import "react-times/css/material/default.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <BusinessHoursPicker data={data} />

        <div className="clean" />

        <BusinessHoursPicker
          data={data}
          activeClassName="customActiveClass"
          inactiveClassName="customInactiveClass"
        />

        <div className="clean" />

        <BusinessHoursPicker
          data={data}
          activeClassName="reactTimes"
          TimePicker={(defaultTime, onChange) => (
            <TimePickerTimes
              time={defaultTime}
              onTimeChange={onChange}
              theme="classic"
              className="block"
            />
          )}
          timePickerParseValue={value => `${value.hour}:${value.minute}`}
        />

        <div className="clean" />

        <BusinessHoursPicker
          data={data}
          TimePicker={(defaultTime, onChange) => (
            <TimePicker
              defaultValue={moment(defaultTime, "HH:mm")}
              onChange={onChange}
              format="HH:mm"
              className="block"
            />
          )}
          timePickerParseValue={value => moment(value).format("HH:mm")}
        />
      </>
    );
  }
}

export default App;
