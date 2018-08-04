import React, { Component } from 'react';

class LandingPage extends Component {

    displayCalendar(datesArray) {
        const renderedCalendar = [[], [], [], [], [], []];
        let calendarIndex = 0;
        for (let i = 0; i < datesArray.length; i++) {
            if ((i + 1) % 7 === 0) {
                renderedCalendar[calendarIndex].push(datesArray[i]);
                calendarIndex++;
            }
            else {
                renderedCalendar[calendarIndex].push(datesArray[i])
            }
        }

        const data = (
            <table style={{ 'width': '100%' }} cellspacing="0">
                <tr>
                    <th className="week-day-name">Sun</th>
                    <th className="week-day-name">Mon</th>
                    <th className="week-day-name">Tue</th>
                    <th className="week-day-name">Wed</th>
                    <th className="week-day-name">Thu</th>
                    <th className="week-day-name">Fri</th>
                    <th className="week-day-name">Sat</th>
                </tr>

                <tr className="week-row">{renderedCalendar[0]}</tr>
                <tr className="week-row">{renderedCalendar[1]}</tr>
                <tr className="week-row">{renderedCalendar[2]}</tr>
                <tr className="week-row">{renderedCalendar[3]}</tr>
                <tr className="week-row">{renderedCalendar[4]}</tr>
                <tr className="week-row">{renderedCalendar[5]}</tr>
            </table>
        )

        return data;
    }

    fillCalendar(dateObject) {
        let dates = [];
        let display = [];
        for (let i = 0; i < dateObject.length; i++) {
            let splitDateObject = dateObject[i].toString().split(" ");
            let dayOfWeek = splitDateObject[0];
            let dayNumber = splitDateObject[2];
            dates.push({
                dayWeek: dayOfWeek,
                dayNum: dayNumber
            })
        }

        for (let index = 0; index < 42; index++) {
            display.push(<td className="week-day"></td>)
        }

        //firstDayOfMonth gets the day of the week, for example monday = 1, thursday = 3, sunday = 0
        const firstDayOfMonth = this.getMonthStart(dates[0].dayWeek);

        //the second for loop fills in the boxes with actual dates, it will be filled in
        //with the day of the week and month number
        for (let k = 0; k < Number(dates[dates.length - 1].dayNum); k++) {
            display[k + firstDayOfMonth] = <td className="week-day">{dates[k].dayNum}</td>;
        }

        return this.displayCalendar(display);
    }

    getDaysInMonth(month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    getMonthName() {
        const dateObj = new Date();
        const monthNum = dateObj.getMonth();

        switch (monthNum) {
            case 0:
                return "January";
            case 1:
                return "February";
            case 2:
                return "March";
            case 3:
                return "April";
            case 4:
                return "May";
            case 5:
                return "June";
            case 6:
                return "July";
            case 7:
                return "August";
            case 8:
                return "September";
            case 9:
                return "October";
            case 10:
                return "November";
            case 11:
                return "December";
        }
    }

    getMonthStart(day) {
        switch (day) {
            case "Sun":
                return 0;
            case "Mon":
                return 1;
            case "Tue":
                return 2;
            case "Wed":
                return 3;
            case "Thu":
                return 4;
            case "Fri":
                return 5;
            case "Sat":
                return 6;
        }
    }

    render() {
        const test = this.getDaysInMonth(7, 2018);
        const cal = this.fillCalendar(test);
        const month = this.getMonthName();
        return (
            <div className="calendar">
                <div className="calendar_header">
                    {month}
                </div>
                <div className="calendar_body">
                    {cal}
                </div>
            </div>
        );
    }
}

export default LandingPage;