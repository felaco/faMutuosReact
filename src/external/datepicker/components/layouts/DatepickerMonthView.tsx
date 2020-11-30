import React, { useContext } from 'react';
import { DateContext } from "../../dateContext";
import { DatepickerMonthViewProps, datePickerProvider } from "../../index";
import { MonthSelector } from "./functional/MonthSelector";
import { DatepickerInitialViewEnum } from "../../datepickerEnums";
import classes from "./DatepickerLayout.module.scss";
import { DatepickerMonth } from "./functional/DatepickerMonth";

export const DatepickerMonthView = (props: DatepickerMonthViewProps) => {
    const context: datePickerProvider = useContext(DateContext);
    const onAddMonth = () => context.onAddMonth(12);
    const onSubstractMonth = () => context.onSubstractMonth(-12);
    const onChangeView = () => context.onChangeView(DatepickerInitialViewEnum.year);

    const monthsStrings = context.dateAdapter.getShortMonthNames();
    const monthSelectorTitle = context.year.toString();
    const today = context.dateAdapter.getToday();
    const selectedDate = context.selectedDate && context.dateAdapter.getMonthYear(context.selectedDate);
    const viewYear = context.year;

    const monthsComponents = monthsStrings.map((month, index) => {
        const todayMonthYear = context.dateAdapter.getMonthYear(today);
        const isTodayMonth = viewYear === todayMonthYear.year && todayMonthYear.month === index + 1;
        const isSelectedMonth = viewYear === selectedDate?.year && selectedDate.month === index + 1;
        return (
            <DatepickerMonth key={month}
                             monthString={month}
                             onSelectMonth={() => props.onSelectMonth(index + 1)}
                             currSelectedMonth={context.month}
                             monthNumber={index}
                             isTodayMonth={isTodayMonth}
                             isSelectedMonth={isSelectedMonth}/>
        )
    })


    return (
        <React.Fragment>
            <MonthSelector titleString={monthSelectorTitle}
                           onAddMonth={onAddMonth}
                           onSubstractMonth={onSubstractMonth}
                           onChangeView={onChangeView}/>

            <div className={classes.borderBottomViews}/>
            <div className={classes.datePickerMonthContainer}>
                {monthsComponents}
            </div>
        </React.Fragment>
    );
};
