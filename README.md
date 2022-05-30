# relative-time-ago

## relativeTimeAgo( date, key );

Returns a specified amount of time since a specified date.

## Installation

```sh
npm install relative-time-ago
```

## Usage

```sh
import relativeTimeAgo from "relative-time-ago";
```

#### Inputs

`date` - Either a date string **or** UNIX number.

`key` - What you want your time intervals to be relevant to..

- `year` - returns number of years ago
- `month` - returns number of months ago
- `day` - returns number of days ago
- `hour` - returns number of hours ago
- `minute` - returns number of minutes ago
- `second` - returns number of seconds ago

#### Outputs

By default will return the number of milliseconds between the given date and whenever `relativeTimeAgo` is called.

Alternatively, if given a key, will return a message:

```sh
console.log(relativeTimeAgo(date, 'second');

  ---> // X seconds ago
```

If the difference in time is less than the requested interval, a different message is returned:

```sh
console.log(relativeTimeAgo(dateLessThanAYearAgo, 'year');

  ---> // less than one year ago
```

If no key is given, the time since the given date is returned in milliseconds:

```sh
console.log(relativeTimeAgo(date);

  ---> // XXXXX milliseconds ago
```
