import React from 'react';
import classes from "../DatepickerLayout.module.scss";
import classNames from 'classnames';

interface WeekDayRowProps {
    days: Array<string>,
    classes?: string
}

const WeekDayRow: React.FC<WeekDayRowProps> = (props) => {
    const propsClasses: any = props.classes;

    const containerClass = classNames({
        [classes.dayContainer]: true,
        [propsClasses]: !!props.classes
    });

    return (
        <div className={containerClass}>
            {props.days.map(dayName => (
                <div key={dayName} className={classes.dayTextElement}>
                    {dayName}
                </div>
            ))}
        </div>
    );
};

export default WeekDayRow;