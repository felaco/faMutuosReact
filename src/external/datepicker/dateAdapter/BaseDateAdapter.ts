import { DateMonthYear } from "../index";

export abstract class BaseDateAdapter {
    protected internalDate: any;

    public getDate(): any {
        return this.internalDate;
    }

    /**
     * Returns a list of the days (starting from sunday) that will be used to print the days array
     */
    public abstract getShortDayNames(): Array<string>;

    /**
     * Returns the day from which you want to start printing the day array. For instance, returning 0 will start
     * rendering the first name stored in GetShortDayNames. Returning 1 means that I want the week day starting
     * from monday
     */
    public getStartingWeekDay(): number {
        return 0;
    }

    /**
     * Calculates the number of empty cells for the first week of the month
     * @param year: The year of the month that should be checked.
     * @param month: The month that should be checked.
     * @returns Where to start rendering the days in first week
     */
    public abstract getFirstWeekStartingDay(year: number, month: number): number;

    /**
     * Gets the number of days in the month of the given date.
     * @param year: The year of the month that should be checked.
     * @param month: The month that should be checked.
     * @returns The number of days in the month of the given date.
     */
    public abstract getNumberOfDaysInMonth(year: number, month: number): number;

    /**
     * @returns a localized array of month names in short format
     */
    public abstract getShortMonthNames(): Array<string>;

    /**
     * @returns a localized array of month names in long format
     */
    public abstract getLongMonthNames(): Array<string>;

    /**
     * Parse the string value of the input and stores it in internalDate
     * @param inputDate: value text of the input
     */
    public abstract parseDate(inputDate: string): void;

    public abstract constructDate(year: number, month: number, day?: number | null): any;

    /**
     * Format the internal date as string. It will be used as value in the native input
     * @returns The formatted date as string in the way this provider wishes to display it
     */
    public abstract formatDate(): string | null;

    public abstract getToday(): any;

    public abstract getMonthYear(date: any): DateMonthYear;

    public abstract addMonth(monthNumber: number, prevMonth: number, prevYear: number): DateMonthYear;

    /**
     * Compares two dates.
     * @param date1 The first date to compare.
     * @param date2 The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    public abstract dateCompare(date1: any, date2: any): number;
}