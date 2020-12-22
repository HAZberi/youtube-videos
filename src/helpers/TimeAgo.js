const timeAgo = function (date) {
  const timeStamp = new Date(date);
  const timeElapsed = new Date() - timeStamp;
  const timeElapsedInSeconds = timeElapsed / 1000;
  const timeElapsedInMinutes = timeElapsedInSeconds / 60;
  const timeElapsedInHours = timeElapsedInMinutes / 60;
  const timeElapsedInDays = timeElapsedInHours / 24;
  const timeElapsedInMonths = timeElapsedInDays / 30.42;
  const timeElapsedInYears = timeElapsedInMonths / 12;
  if (timeElapsedInYears > 1) {
    return `${Math.round(timeElapsedInYears)} ${
      timeElapsedInYears < 2 ? "year ago" : "years ago"
    }`;
  }
  if (timeElapsedInMonths > 1 && timeElapsedInMonths < 13) {
    return `${Math.round(timeElapsedInMonths)} ${
      timeElapsedInMonths < 2 ? "month ago" : "months ago"
    }`;
  }
  if (timeElapsedInDays > 1 && timeElapsedInDays < 31) {
    return `${Math.round(timeElapsedInDays)} ${
      timeElapsedInDays < 2 ? "day ago" : "days ago"
    }`;
  }
  if (timeElapsedInHours > 1 && timeElapsedInHours < 24) {
    return `${Math.round(timeElapsedInHours)} ${
      timeElapsedInHours < 2 ? "hour ago" : "hours ago"
    }`;
  }
  if (timeElapsedInMinutes > 1 && timeElapsedInMinutes < 60) {
    return `${Math.round(timeElapsedInMinutes)} ${
      timeElapsedInMinutes < 2 ? "minute ago" : "minutes ago"
    }`;
  }
  if (timeElapsedInSeconds > 1 && timeElapsedInSeconds < 60) {
    return `${Math.round(timeElapsedInSeconds)} ${
      timeElapsedInSeconds < 2 ? "second ago" : "seconds ago"
    }`;
  }
};

export default timeAgo;

//Notes:
//The time ago function takes a date string in the past.
//The time ago function will not work with dates in the future.
//The date string should follow ISO 8601 syntax (JavaScript ISO Date)
//For more information on the date format https://www.w3schools.com/js/js_date_formats.asp
