import React, { Component } from 'react';

class LandingPage extends Component {

    fillCalendar(dateObject){
        let dates = [];
        let display = [];
        for(let i = 0; i < dateObject.length; i++){
            let splitDateObject = dateObject[i].toString().split(" ");
            let dayOfWeek = splitDateObject[0];
            let dayNumber = splitDateObject[2];
            dates.push({
                dayWeek: dayOfWeek,
                dayNum: dayNumber
            })
        }

        //firstDayOfMonth gets the day of the week, for example monday = 1, thursday = 3, sunday = 0
        const firstDayOfMonth = this.getMonthStart(dates[0].dayWeek);

        let startEmpty;
        //startEmpty fills the first empty spots in the calendar, for example
        //if the month begins on a tuesday, then sunday, and monday will be filled in blank

        //if it's equal to 0, then that means the first week is blank because a calendar has a
        //default of 35 spots, 5 rows with 7 days each
        if(firstDayOfMonth === 0)
          startEmpty = 7;
        //otherwise keep it at whatever the first day is
        else
          startEmpty = firstDayOfMonth;

        //first for loop fills in the first set of empty boxes in the calendar if necessary
        for(let j = 0; j < firstDayOfMonth; j++){
            display.push("EMPTY");
        }

        //the second for loop fills in the boxes with actual dates, it will be filled in
        //with the day of the week and month number
        for(let k = 0; k < Number(dates[dates.length-1].dayNum); k++){
            display.push(dates[k])
        }

        //the third for loop fills in the second set of empty boxes
        //starts at 0 and counts up to (35 minus the amount of items in the display array)
        const endEmpty = Math.abs(35-(Number(dates[dates.length-1].dayNum))+firstDayOfMonth);
        //endEmpty holds the number of remaining available spots in the 35 length of the calendar
        //it takes 35 and subtracts it by the amount of starting empty spots and day number of the last
        //day of the week
        //for example in august 2018, the calendar starts with 3 empty spots because month starts on wednsday
        //and the last day of the month is the 31st, so we have 35 - (31 + 3) = 1, so we have one spot remaining
        for(let l = 0; l < endEmpty; l++){
          display.push("EMPTY");
        }
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

   getMonthStart(day){
        switch(day){
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
        return (
            <div className="calendar">
                <div className="calendar_header">
                    Month
                </div>
                <div className="calendar_body">
                    <div className="calendar_body__dayTitle">
                        <ul>
                            <li className="calendar_body__day">Sun</li>
                            <li className="calendar_body__day">Mon</li>
                            <li className="calendar_body__day">Tue</li>
                            <li className="calendar_body__day">Wed</li>
                            <li className="calendar_body__day">Thu</li>
                            <li className="calendar_body__day">Fri</li>
                            <li className="calendar_body__day">Sat</li>
                        </ul>
                    </div>
                    <div className="calendar_body__days">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;