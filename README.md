# Business Hours component for React

## Installation

### npm

```
npm install
```

### yarn

```
yarn install
```

## Usage:

### Basic Usage

```JavaScript

import React from 'react';
import BusinessHoursPicker from './components/businesshourspicker';

/* initial data */
const data = [
  { isActive: true, timeFrom: "10:00", timeTill: "18:00" },
  { isActive: true, timeFrom: "9:00", timeTill: "18:00" },
  { isActive: true, timeFrom: "9:00", timeTill: "18:00" },
  { isActive: true, timeFrom: "9:00", timeTill: "18:00" },
  { isActive: true, timeFrom: "9:00", timeTill: "18:00" },
  { isActive: false, timeFrom: null, timeTill: null },
  { isActive: false, timeFrom: null, timeTill: null }
]

<BusinessHoursPicker
  data={data}
  activeClassName="customActiveClass" /* optional: className for an active day. i.e isActive = true */
  inactiveClassName="customInactiveClass" /* optional: className for an inactive day. i.e isActive = false */
/>

```

### Advanced Usage

```Javascript

/* antd TimePicker example */
<BusinessHoursPicker
  data={data}
  /* optional: pass a function that returns custom time picker for time input. */
  /* Customize your component as you wish
     NOTE: your time picker component's props may defer from the example */
  TimePicker={
    (defaultTime, onChange) => (
    <TimePicker
      defaultValue={moment(defaultTime, "HH:mm")}
      onChange={onChange}
      format="HH:mm"
      className="block"
    />
  )}
  /* optional: pass a function that parses the value returned by onChange function and returns string value.
     NOTE: it is required for some components e.g, "react-times", "antd", etc. They return object as a value from onChange callback. You need to somehow manage it before using */
  timePickerParseValue={value => moment(value).format("HH:mm")}
/>

```

```Javascript

/* react-times example */
<BusinessHoursPicker
  data={data}
  activeClassName="reactTimes"
  /* optional: pass a function that returns custom time picker for time input. */
  /* Customize your component as you wish
     NOTE: your time picker component's props may defer from the example */
  TimePicker={
    (defaultTime, onChange) => (
    <TimePicker
      defaultValue={defaultTime}
      onTimeChange={onChange}
      className="block"
    />
  )}
  /* optional: pass a function that parses the value returned by onChange function and returns string value.
     NOTE: it is required for some components e.g, "react-times", "antd", etc. They return object as a value from onChange callback. You need to somehow manage it before using */
  timePickerParseValue={value => `${hour}:${minute}`}
/>

```

## Examples

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
