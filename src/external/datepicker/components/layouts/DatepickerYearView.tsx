import React, { useContext } from 'react';
import { datePickerProvider, DatepickerYearViewProps } from "../../index";
import { DateContext } from "../../dateContext";
import classes from './DatepickerLayout.module.scss';
import classnames from 'classnames';

const YEARS_PER_PAGE = 16;

export const DatepickerYearView = (props: DatepickerYearViewProps) => {
    const context: datePickerProvider = useContext(DateContext);
    const dateAdapter = context.dateAdapter;
    const todayYear = dateAdapter.getMonthYear(dateAdapter.getToday()).year;
    const selectedYear = context.selectedDate && dateAdapter.getMonthYear(context.selectedDate).year;

    // año que solo se usa para el calculo que determina desde que año se comienza a mostrar en la pagina actual
    const viewYear = selectedYear || todayYear;
    const initialYear = viewYear - (viewYear % YEARS_PER_PAGE);

    const years = [];
    for (let i = initialYear; i < initialYear + YEARS_PER_PAGE; i++) {
        const isTodayYear = i === todayYear;
        const isSelectedYear = selectedYear === i;

        const yearClass = classnames({
            [classes.datepickerYear]: true,
            [classes.selectedYear]: isSelectedYear,
            [classes.todayYear]: isTodayYear
        })

        years.push(
            <div className={yearClass} onClick={() => props.onSelectYear(i)}>
                <span>
                    {i}
                </span>
            </div>
        )
    }

    const buttonClasses = `${classes.datepickerRoundButton} ${classes.buttonDisabled}`

    return (
        <React.Fragment>
            <div className={classes.monthSelectorContainer}>
                <div className={buttonClasses}>{initialYear} - {initialYear + YEARS_PER_PAGE - 1}</div>
            </div>
            <div className={classes.borderBottomViews}/>

            <div className={classes.datepickerYearContainer}>
                {years}
            </div>
        </React.Fragment>
    );
};
