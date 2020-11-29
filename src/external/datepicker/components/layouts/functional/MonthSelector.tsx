import React from 'react';
import { DatepickerMonthSelectorProps } from "../../../index";
import classes from '../DatepickerLayout.module.scss';
import { DatepickerInitialViewEnum } from "../../../datepickerEnums";

export const MonthSelector: React.FC<DatepickerMonthSelectorProps> = (props) => {
    const { dateAdapter, month, year, showOnlyYear = false } = props;

    const changeView = () => {
        const toView = showOnlyYear ? DatepickerInitialViewEnum.year : DatepickerInitialViewEnum.month;
        props.onChangeView(toView);
    }

    let monthSelectorStr = `${year}`;
    if (!showOnlyYear) {
        monthSelectorStr = `${dateAdapter.getLongMonthNames()[month - 1]} ${year}`;
    }

    return (
        <div className={classes.monthSelectorContainer}>
            <button className={classes.datepickerButton} onClick={changeView}>{monthSelectorStr}</button>
            <div>
                <button className={classes.datepickerRoundButton} onClick={() => props.onSubstractMonth()}>&lt;</button>
                <button className={classes.datepickerRoundButton} onClick={() => props.onAddMonth()}>&gt;</button>
            </div>
        </div>
    );
};
