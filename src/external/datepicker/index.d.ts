import { BaseDateAdapter } from "./dateAdapter/BaseDateAdapter";
import { DatepickerInitialViewEnum } from "./datepickerEnums";

export declare interface DatepickerProps {
    max?: Date;
    min?: Date;
    mountVariation?: 'absolute' | 'portal';
    transitionDuration?: number;
    initialView?: DatepickerInitialViewEnum;
    mobile?: boolean;
    dateAdapter: BaseDateAdapter;
    value?: Date;
    onDateSelected: (value: any) => void;
    open: boolean;
}

export declare interface DateMonthYear {
    month: number;
    year: number;
}

interface DateMonthYearProps extends DateMonthYear {
    dateAdapter: BaseDateAdapter,
    onDateSelected: (value: any) => void;
    selectedDate: any;
}

interface DatepickerDateViewProps extends DateMonthYearProps {
    onChangeView: (view: DatepickerInitialViewEnum) => void;
    onAddMonth: () => void;
    onSubstractMonth: () => void;
}

export interface DatepickerMonthViewProps {
    onSelectMonth: (month: number) => void
}

export interface DatepickerYearViewProps {
    onSelectYear: (year: number) => void;
}

export declare interface DatepickerDayProps extends DateMonthYearProps {
    day: number | null;
}

export declare interface DatepickerMonthProps {
    monthString: string;
    onSelectMonth: () => void;
    currSelectedMonth: number;
    monthNumber: number;
    isTodayMonth: boolean;
    isSelectedMonth: boolean;
}

export declare interface DatepickerMonthSelectorProps {
    month: number;
    year: number;
    dateAdapter: BaseDateAdapter;
    onAddMonth: () => void;
    onSubstractMonth: () => void;
    onChangeView: (view: DatepickerInitialViewEnum) => void;
    showOnlyYear?: boolean;
}

export declare interface datePickerProvider {
    month: number,
    year: number,
    selectedDate: any,
    onSelected: (selected: any) => void,
    onAddMonth: (months: number) => void,
    onSubstractMonth: (months: number) => void,
    onSetMonth: (month: number) => void,
    onSetYear: (year: number) => void,
    dateAdapter: BaseDateAdapter;
    onChangeView: (view: DatepickerInitialViewEnum) => void;
}