function displayDateTime() {
    var now = dayjs();
    var dateTimeString = now.format('MMM DD, YYYY [at] hh:mm:ss A');
    var dateTimeString = document.getElementById('current-datetime');
}

setInterval(displayDateTime, 1000);