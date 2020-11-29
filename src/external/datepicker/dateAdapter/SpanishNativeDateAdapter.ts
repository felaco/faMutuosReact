import { NativeDateAdapter } from "./NativeDateAdapter";

export class SpanishNativeDateAdapter extends NativeDateAdapter {

    public getShortMonthNames(): Array<string> {
        return ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    }

    public getLongMonthNames(): Array<string> {
        return ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    }

    public getShortDayNames(): Array<string> {
        return ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
    }

    public getStartingWeekDay(): number {
        return 1;
    }
}