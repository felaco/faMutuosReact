import React, { useContext, useMemo } from 'react';
import { BaseDateAdapter } from "../../dateAdapter/BaseDateAdapter";
import classes from "./DatepickerLayout.module.scss";
import WeekDayRow from "./functional/WeekDayRow";
import { DatepickerDateViewProps, datePickerProvider } from '../..';
import DatepickerDay from "./functional/DatepickerDay";
import { MonthSelector } from "./functional/MonthSelector";
import { DateContext } from "../../dateContext";
import { DatepickerInitialViewEnum } from "../../datepickerEnums";


export function getRolledWeekDays(dateAdapter: BaseDateAdapter): Array<string> {
    const delta = dateAdapter.getStartingWeekDay();
    const dayNamesList = dateAdapter.getShortDayNames();
    if (dayNamesList.length !== 7) {
        throw new Error('The list of weekdays returned from dateAdapter has length != 7')
    }

    const toRenderDayList = [];
    for (let i = delta; i < dayNamesList.length + delta; i++) {
        toRenderDayList.push(dayNamesList[i % 7]);
    }

    return toRenderDayList;
}

export const monthToMatrix = (dateAdapter: BaseDateAdapter, year: number, month: number): Array<Array<number | null>> => {
    const daysInMonth = dateAdapter.getNumberOfDaysInMonth(year, month);
    const startingDay = dateAdapter.getFirstWeekStartingDay(year, month);
    const weeks: Array<Array<number | null>> = [];

    // fills the data for the first week
    let currWeek: Array<number | null> = [];
    let currDay: number = 0;
    for (let i = 0; i < 7; i++) {
        let firstWeekData: number | null = null;
        if (i >= startingDay) {
            firstWeekData = ++currDay;
        }
        currWeek.push(firstWeekData);
    }
    weeks.push(currWeek);

    // there are some month with 6 weeks. Yep, those are eternal and my wallet cannot stand them :(
    for (let week = 1; week < 6; week++) {
        currWeek = [];
        weeks.push(currWeek);

        for (let day = 0; day < 7; day++) {
            ++currDay;
            currWeek.push(currDay);

            if (currDay >= daysInMonth) {
                return weeks;
            }
        }
    }

    return weeks;
}

const DatepickerDateView: React.FC<DatepickerDateViewProps> = (props) => {
    const context: datePickerProvider = useContext(DateContext);
    const weekdaysNames = getRolledWeekDays(props.dateAdapter);
    const monthMatrix = useMemo(() => monthToMatrix(props.dateAdapter, props.year, props.month), [props.dateAdapter, props.year, props.month]);
    const monthSelectorStr = `${context.dateAdapter.getLongMonthNames()[context.month - 1]} ${context.year}`;

    const dayMap = (day: number | null, index: number) => {
        const key = `${day}-${index}-${props.month}`;
        return <DatepickerDay key={key}
                              day={day}
                              selectedDate={props.selectedDate}
                              dateAdapter={props.dateAdapter}
                              month={props.month}
                              year={props.year}
                              onDateSelected={props.onDateSelected}/>
    }

    const weeks = monthMatrix.map((week, index) => {
        const key = `${props.month}-${index}`;
        return (
            <div key={key} className={classes.datepickerWeek}>
                {week.map(dayMap)}
            </div>
        )
    });

    return (
        <React.Fragment>
            <MonthSelector titleString={monthSelectorStr}
                           onChangeView={() => context.onChangeView(DatepickerInitialViewEnum.month)}
                           onAddMonth={props.onAddMonth}
                           onSubstractMonth={props.onSubstractMonth}/>
            <WeekDayRow days={weekdaysNames}/>
            <div className={classes.weeksContainer}>
                {weeks}
            </div>
        </React.Fragment>
    );
};

export default DatepickerDateView;
