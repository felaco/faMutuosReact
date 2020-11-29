import React, { PureComponent } from 'react';
import { DatepickerProps, datePickerProvider } from "../../index";
import { DatepickerInitialViewEnum } from "../../datepickerEnums";
import DatepickerDateView from "./datepickerDateView";
import { NativeDateAdapter } from "../../dateAdapter/NativeDateAdapter";
import { BaseDateAdapter } from "../../dateAdapter/BaseDateAdapter";
import classes from "./DatepickerLayout.module.scss";
import { DateContext } from "../../dateContext";
import { DatepickerMonthView } from "./DatepickerMonthView";
import { DatepickerYearView } from "./DatepickerYearView";

interface DatepickerContainerState {
    view: DatepickerInitialViewEnum;
    month: number;
    year: number;
    selected: Date | null
}

class DatepickerContainer extends PureComponent<DatepickerProps, DatepickerContainerState> {

    static defaultProps = {
        dateAdapter: new NativeDateAdapter()
    }

    constructor(props: DatepickerProps) {
        super(props);
        // @ts-ignore
        const { month, year } = props.dateAdapter.getMonthYear(props.value);

        this.state = {
            view: DatepickerInitialViewEnum.date,
            month,
            year,
            selected: null
        }
    }

    private updateCurrMonth(delta: number) {
        const { month, year } = this.state;
        const stateUpdate = this.props.dateAdapter?.addMonth(delta, month, year);
        // @ts-ignore
        this.setState(stateUpdate);
    }

    private selectYear = (year: number) => {
        this.setState({ year, view: DatepickerInitialViewEnum.month })
    }

    private selectMonth = (month: number) => {
        this.setState({ month, view: DatepickerInitialViewEnum.date })
    }

    onSelected = (selected: Date) => this.setState({ selected: selected });
    onAddMonth = (delta = 1) => this.updateCurrMonth(delta);
    onSubstractMonth = (delta = -1) => this.updateCurrMonth(delta);
    onSetMonth = (month: number) => this.setState({ month })
    onSetYear = (year: number) => this.setState({ year });
    onChangeView = (view: DatepickerInitialViewEnum) => this.setState({ view });

    render() {
        // @ts-ignore
        const dateAdapter: BaseDateAdapter = this.props.dateAdapter;
        const { month, year, selected, view } = this.state;

        const contextValue: datePickerProvider = {
            month,
            year,
            selectedDate: selected,
            onSelected: this.onSelected,
            onAddMonth: this.onAddMonth,
            onSubstractMonth: this.onSubstractMonth,
            onSetMonth: this.onSetMonth,
            onSetYear: this.onSetYear,
            dateAdapter,
            onChangeView: this.onChangeView
        }

        let currView;

        switch (view) {
            case DatepickerInitialViewEnum.date:
                currView = <DatepickerDateView
                    dateAdapter={dateAdapter}
                    month={month}
                    year={year}
                    selectedDate={selected}
                    onDateSelected={this.onSelected}
                    onAddMonth={this.onAddMonth}
                    onSubstractMonth={this.onSubstractMonth}
                    onChangeView={this.onChangeView}/>
                break;
            case DatepickerInitialViewEnum.month:
                currView = <DatepickerMonthView onSelectMonth={this.selectMonth}/>
                break;
            case DatepickerInitialViewEnum.year:
                currView = <DatepickerYearView onSelectYear={this.selectYear}/>
        }

        return (
            <DateContext.Provider value={contextValue}>
                <div className={classes.layout}>
                    {currView}
                </div>
            </DateContext.Provider>
        );
    }
}

export default DatepickerContainer;
