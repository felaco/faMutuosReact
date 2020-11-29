import {BaseDateAdapter} from "../../dateAdapter/BaseDateAdapter";
import {NativeDateAdapter} from "../../dateAdapter/NativeDateAdapter";
import {getRolledWeekDays, monthToMatrix} from "./datepickerDateView";

describe('getRolledWeekDays', () => {
    /** @type BaseDateAdapter */
    let dateAdapter;

    beforeEach(() => {
        dateAdapter = new NativeDateAdapter();
    })

    it('validates getRolledWeekDays returns the weekdays starting from sunday', () => {
        dateAdapter.getStartingWeekDay = () => 0;
        const days = getRolledWeekDays(dateAdapter);
        const expected = dateAdapter.getShortDayNames();
        expect(days).toStrictEqual(expected);
    });

    it('validates getRolledWeekDays returns the weekdays starting from monday', () => {
        dateAdapter.getStartingWeekDay = () => 1;
        const days = getRolledWeekDays(dateAdapter);
        const expected = dateAdapter.getShortDayNames();
        expected.push(expected.shift());
        expect(expected).toStrictEqual(days);
    });

    it('validates what happens when starting day is exactly 7', () => {
        dateAdapter.getStartingWeekDay = () => 7;
        const days = getRolledWeekDays(dateAdapter);
        const expected = dateAdapter.getShortDayNames();
        expect(expected).toStrictEqual(days);
    });

    it('validates what happens when starting day is more than 7', () => {
        dateAdapter.getStartingWeekDay = () => 8;
        const days = getRolledWeekDays(dateAdapter);
        const expected = dateAdapter.getShortDayNames();
        expected.push(expected.shift());
        expect(expected).toStrictEqual(days);
    });
});

describe('monthToMatrix', () => {
    it('validates monthToMatrx returns the shape I want to print in the datepicker', () => {
        let myBeautifulShape = [
            [null, null, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18, 19],
            [20, 21, 22, 23, 24, 25, 26],
            [27, 28, 29, 30, 31],
        ];

        const dateAdapter = new NativeDateAdapter();
        dateAdapter.getStartingWeekDay = () => 1;
        expect(monthToMatrix(dateAdapter, 2020, 7)).toStrictEqual(myBeautifulShape);

        myBeautifulShape = [
            [null, null, null, null, null, null, 1],
            [2, 3, 4, 5, 6, 7, 8],
            [9, 10, 11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20, 21, 22],
            [23, 24, 25, 26, 27, 28, 29],
            [30, 31],
        ];
        expect(monthToMatrix(dateAdapter, 2020, 3)).toStrictEqual(myBeautifulShape);

        myBeautifulShape = [
            [1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12, 13, 14],
            [15, 16, 17, 18, 19, 20, 21],
            [22, 23, 24, 25, 26, 27, 28],
        ];
        expect(monthToMatrix(dateAdapter, 2021, 2)).toStrictEqual(myBeautifulShape);
    });
});