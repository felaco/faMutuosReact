import React, { useContext } from 'react';
import { datePickerProvider, DatepickerYearViewProps } from "../../index";
import { DateContext } from "../../dateContext";
import classes from './DatepickerLayout.module.scss';
import classnames from 'classnames';
import { MonthSelector } from "./functional/MonthSelector";

const YEARS_PER_PAGE = 16;

export const DatepickerYearView = (props: DatepickerYearViewProps) => {
    const context: datePickerProvider = useContext(DateContext);
    const dateAdapter = context.dateAdapter;
    const todayYear = dateAdapter.getMonthYear(dateAdapter.getToday()).year;
    const selectedYear = context.selectedDate && dateAdapter.getMonthYear(context.selectedDate).year;

    // año que solo se usa para el calculo que determina desde que año se comienza a mostrar en la pagina actual
    const viewYear = context.year || selectedYear || todayYear;
    const initialYear = viewYear - (viewYear % YEARS_PER_PAGE);
    const monthSelectorTitle = `${initialYear} - ${initialYear + YEARS_PER_PAGE - 1}`

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

    return (
        <React.Fragment>
            <MonthSelector titleDisabled
                           titleString={monthSelectorTitle}
                           onAddMonth={() => context.onAddMonth(12 * YEARS_PER_PAGE)}
                           onSubstractMonth={() => context.onSubstractMonth(-12 * YEARS_PER_PAGE)}/>

            <div className={classes.borderBottomViews}/>
            <div className={classes.datepickerYearContainer}>
                {years}
            </div>
        </React.Fragment>
    );
};
