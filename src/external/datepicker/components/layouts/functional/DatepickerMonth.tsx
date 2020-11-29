import React, { useContext } from 'react';
import { DatepickerMonthProps, datePickerProvider } from "../../../index";
import classes from '../DatepickerLayout.module.scss';
import { DateContext } from "../../../dateContext";
import classnames from 'classnames';

export const DatepickerMonth = (props: DatepickerMonthProps) => {
    const context: datePickerProvider = useContext(DateContext);

    const klass = classnames({
        [classes.datepickerMonth]: true,
        [classes.todayMonth]: props.isTodayMonth,
        [classes.selectedMonth]: props.isSelectedMonth
    })

    return (
        <div className={klass} onClick={props.onSelectMonth}>
            <span>{props.monthString}</span>
        </div>
    );
};
