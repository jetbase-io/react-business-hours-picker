import React, { Component } from "react";
import { TimePicker } from "antd";
import moment from "moment";

import { data } from "./components/businesshourspicker/constants";
import BusinessHoursPicker from "./components/businesshourspicker";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <BusinessHoursPicker data={data} />

        <div className="clean" />

        <BusinessHoursPicker
          /* Adding custom classNames */
          data={data}
          activeClassName="customActiveClass" /* optional: className for an active day. isActive = true */
          inactiveClassName="customInactiveClass" /* optional: className for an inactive day. isActive = false */
        />

        <div className="clean" />

        <BusinessHoursPicker
          data={data}
          TimePicker={(defaultTime, onChange) => (
            /* optional: pass a function that returns custom time picker for time input. */
            /* Customize your component as you wish
                 NOTE: your component's props may defer from example */
            <TimePicker
              defaultValue={moment(defaultTime, "HH:mm")}
              onChange={onChange}
              format="HH:mm"
              className="block"
            />
          )}
          /* optional: pass a function that parses the value returned by onChange function and returns string value.
             NOTE: it is required for some components e.g, "react-time", "antd", etc. They return object as a value in onChange callback */
          timePickerParseValue={value => moment(value).format("HH:mm")}
        />
      </>
    );
  }
}

export default App;
