import React, { Component } from 'react';
import { getMonthName, daysInMonth } from '../getDates';

class SpecifiedDay extends Component {
    componentDidMount(){
        if(this.validateMonth() && this.validateDays())
            alert("VALID DATE");
        else
            alert("NOT VALID DATE");
    }

    validateDays(){
        const month = Number(this.props.match.params.month);
        const year = Number(this.props.match.params.year);
        const days = Number(this.props.match.params.day);
        const dayCount = daysInMonth(month, year);
        if(dayCount < days || days < 1)
            return false;
        else
            return true;
    }

    validateMonth(){
        const months = [
            "january","february",
            "march","april",
            "may","june",
            "july", "august",
            "september","october",
            "november","december"
        ];
        const monthName = getMonthName(Number(this.props.match.params.month));
        for(let i = 0; i < months.length; i++){
            if(months[i] === monthName.toLowerCase())
                return true;
        }
        return false;
    }

    render() {
        return (
            <div>
                <h1>{getMonthName(Number(this.props.match.params.month))}</h1>
                <h2>{this.props.match.params.day}</h2>
                <h3>{this.props.match.params.year}</h3>
            </div>
        );
    }
}

export default SpecifiedDay;