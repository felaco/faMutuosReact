import React from 'react';
import { DatepickerMonthSelectorProps } from "../../../index";
import classes from '../DatepickerLayout.module.scss';
import classnames from 'classnames';

export const MonthSelector: React.FC<DatepickerMonthSelectorProps> = (props) => {
    const { titleDisabled = false } = props;
    const titleButtonClasses = classnames({
        [classes.datepickerButton]: true,
        [classes.buttonDisabled]: props.titleDisabled
    })

    return (
        <div className={classes.monthSelectorContainer}>
            <button className={titleButtonClasses} onClick={props.onChangeView} disabled={titleDisabled}>
                {props.titleString}
            </button>
            <div>
                <button className={classes.datepickerRoundButton} onClick={() => props.onSubstractMonth()}>&lt;</button>
                <button className={classes.datepickerRoundButton} onClick={() => props.onAddMonth()}>&gt;</button>
            </div>
        </div>
    );
};
