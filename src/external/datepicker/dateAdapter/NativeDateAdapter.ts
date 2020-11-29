import { BaseDateAdapter } from "./BaseDateAdapter";
import { DateMonthYear } from "../index";

// https://2ality.com/2015/11/string-padding.html
function leftPadding (str: string, maxLength: number, fillString=' ') {
    if (str.length >= maxLength) {
        return str;
    }

    fillString = String(fillString);
    if (fillString.length === 0) {
        fillString = ' ';
    }

    let fillLen = maxLength - str.length;
    let timesToRepeat = Math.ceil(fillLen / fillString.length);
    let truncatedStringFiller = fillString
        .repeat(timesToRepeat)
        .slice(0, fillLen);
    return truncatedStringFiller + str;
}

function zeroPadding(str: string | number) {
    return leftPadding(str.toString(), 2, '0');
}

export class NativeDateAdapter extends BaseDateAdapter {
    protected internalDate: Date | null = null;

    public getShortMonthNames(): Array<string> {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }

    public getLongMonthNames(): Array<string> {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];
    }

    public getShortDayNames(): Array<string> {
        return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }

    /**
     * Parses the inputDate and stores as an internal value.
     * The format of inputDate must be dd/mm/yyyy otherwise the internal stored date will
     * be null. Same if the format is correct, but the date is invalid
     * @param inputDate
     */
    public parseDate(inputDate: string): void {
        this.internalDate = null;

        if (!inputDate) {
            return;
        }

        const splitted = inputDate.split('/');
        if (splitted.length !== 3) {
            return;
        }

        const [dayStr, monthStr, yearStr] = splitted;
        const day = parseInt(dayStr);
        const month = parseInt(monthStr);
        const year = parseInt(yearStr);

        const date = new Date(year, month - 1, day);
        // checks the validity of the date before assigning
        if (date.getFullYear() === year
            && date.getMonth() === month - 1
            && date.getDate() === day) {

            this.internalDate = date;
        }
    }

    public formatDate(): string | null {
        if (!this.internalDate) {
            return null;
        }

        const day = this.internalDate.getDate();
        const month = this.internalDate.getMonth();
        const year = this.internalDate.getFullYear();

        return `${zeroPadding(day)}/${zeroPadding(month + 1)}/${year}`;
    }

    // https://github.com/angular/components/blob/10.0.x/src/material/datepicker/month-view.ts#L301-L317
    public getFirstWeekStartingDay(year: number, month: number): number {
        const tempDate = new Date(year, month - 1, 1);
        const rolledFirstDay = tempDate.getDay() - (this.getStartingWeekDay() % 7);
        return (7 + rolledFirstDay) % 7;
    }

    public getNumberOfDaysInMonth(year: number, month: number): number {
        const tempDate = new Date(year, month, 0);
        return tempDate.getDate();
    }

    public dateCompare(date1: Date, date2: Date): number {
        if (date1 == null) {
            return -1;
        }

        if (date2 == null) {
            return 1;
        }

        return date1.getFullYear() - date2.getFullYear() ||
            date1.getMonth() - date2.getMonth() ||
            date1.getDate() - date2.getDate();
    }

    public getToday(): Date {
        return new Date();
    };

    public constructDate(year: number, month: number, day: number | null): Date | null {
        if (day == null) {
            return null;
        }
        return new Date(year, month - 1, day);
    }

    public getMonthYear(date: Date): DateMonthYear {
        const currDate = date != null ? date : this.getToday();
        return {
            month: currDate.getMonth() + 1,
            year: currDate.getFullYear()
        }
    };

    public addMonth(monthNumber: number, prevMonth:number, prevYear: number): DateMonthYear {
        const date = new Date(prevYear, prevMonth - 1);
        date.setMonth(date.getMonth() + monthNumber);
        return {
            month: date.getMonth() + 1,
            year: date.getFullYear()
        }
    };
}