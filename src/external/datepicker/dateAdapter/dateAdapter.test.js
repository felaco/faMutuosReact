import {NativeDateAdapter} from "./NativeDateAdapter";

describe('dateAdapter', () => {
    /** @type NativeDateAdapter */
    let dateAdapter;

    beforeEach(() => {
        dateAdapter = new NativeDateAdapter();
    });

    it('validates parsing a valid date', () => {
        dateAdapter.parseDate('04/10/2020');
        let expected = new Date(2020, 9, 4);
        expect(dateAdapter.getDate()).toStrictEqual(expected);

        dateAdapter.parseDate('4/5/2020')
        expected = new Date(2020, 4, 4);
        expect(dateAdapter.getDate()).toStrictEqual(expected);
    });

    it('validates parsing a invalid date', () => {
        dateAdapter.parseDate('40/20/2020');
        expect(dateAdapter.getDate()).toBeFalsy();

        dateAdapter.parseDate('sadasdasdas');
        expect(dateAdapter.getDate()).toBeFalsy();
    });

    it('validates formatting a date to string', () => {
        dateAdapter.internalDate = new Date(2020, 5, 9);
        expect(dateAdapter.formatDate()).toBe('09/06/2020');
    });

    it('validates getting correct day count for a month', () => {
        expect(dateAdapter.getNumberOfDaysInMonth(2020, 7)).toBe(31);
        expect(dateAdapter.getNumberOfDaysInMonth(2020, 1)).toBe(31);
        expect(dateAdapter.getNumberOfDaysInMonth(2020, 4)).toBe(30);
        expect(dateAdapter.getNumberOfDaysInMonth(2019, 2)).toBe(28);
        expect(dateAdapter.getNumberOfDaysInMonth(2020, 2)).toBe(29);
    });

    it('validates getting the correct day from getFirstWeekStartingDay', () => {
        expect(dateAdapter.getFirstWeekStartingDay(2020, 7)).toBe(3);
        dateAdapter.getStartingWeekDay = () => 1; // week starting from monday
        // so since 1 of july of 2020 is wednesday getFirstWeekStartingDay should be 2
        expect(dateAdapter.getFirstWeekStartingDay(2020, 7)).toBe(2);

        expect(dateAdapter.getFirstWeekStartingDay(2020, 3)).toBe(6)
        expect(dateAdapter.getFirstWeekStartingDay(2021, 2)).toBe(0)

        dateAdapter.getStartingWeekDay = () => 8; // week starting from monday, but now rolled up!!!
        expect(dateAdapter.getFirstWeekStartingDay(2020, 7)).toBe(2);

        expect(dateAdapter.getFirstWeekStartingDay(2020, 3)).toBe(6)
        expect(dateAdapter.getFirstWeekStartingDay(2021, 2)).toBe(0)
    });

    it('validate date comparison', () => {
        let d1 = new Date(2020, 1, 1);
        const d2 = new Date(2020, 5, 1);
        expect(dateAdapter.dateCompare(d1, d2)).toBeLessThan(0);

        d1 = new Date(2020, 5, 2);
        expect(dateAdapter.dateCompare(d1, d2)).toBeGreaterThan(0);

        d1 = new Date(2020, 5, 1);
        expect(dateAdapter.dateCompare(d1, d2)).toBe(0);
    });

    it('validates addition with month = 1', () => {
        const {month, year} = dateAdapter.addMonth(1, 1, 2020);
        expect(month).toBe(2);
        expect(year).toBe(2020);
    });

    it ('validates addition with month = 11', () => {
        const {month, year} = dateAdapter.addMonth(1, 11, 2020);
        expect(month).toBe(12);
        expect(year).toBe(2020);
    });

    it ('validate adition with change of year', () => {
        const {month, year} = dateAdapter.addMonth(1, 12, 2020);
        expect(month).toBe(1);
        expect(year).toBe(2021);
    });

    it ('validates substraction with change of year', () => {
        const {month, year} = dateAdapter.addMonth(-1, 1, 2020);
        expect(month).toBe(12);
        expect(year).toBe(2019);
    })
});