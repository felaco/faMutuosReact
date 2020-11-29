import React from 'react';
import { DatepickerDayProps } from "../../../index";
import classes from "../DatepickerLayout.module.scss";
import classNames from "classnames";

const DatepickerDay: React.FC<DatepickerDayProps> = (props) => {
    const { dateAdapter, day, month, year, selectedDate, onDateSelected } = props;

    const today = dateAdapter.getToday();
    const currDate = dateAdapter.constructDate(year, month, day);
    const isToday = dateAdapter.dateCompare(today, currDate) === 0;
    const isSelected = dateAdapter.dateCompare(currDate, selectedDate) === 0;

    const apliedClasses = classNames({
        [classes.datepickerDay]: true,
        [classes.dayTextToday]: isToday,
        [classes.selectedDay]: isSelected,
        [classes.selectedDayAndToday]: isToday && isSelected
    });

    return (
        <div className={apliedClasses} onMouseDown={() => onDateSelected(currDate)}>
            {day}
        </div>
    );
};

export default DatepickerDay;