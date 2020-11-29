import React from 'react';
import { DatepickerProps } from "./index";
import { DatepickerInitialViewEnum } from "./datepickerEnums";
import { NativeDateAdapter } from "./dateAdapter/NativeDateAdapter";
import DatepickerAbsolute from "./components/wrappers/datepickerAbsolute";
import DatepickerContainer from "./components/layouts/DatepickerContainer";

const Datepicker: React.FC<DatepickerProps> = (props) => {
    if (props.mountVariation !== 'portal') {
        let container = null;
        if (props.open) {
            container = (
                <div style={{ position: 'absolute', zIndex: 100 }}>
                    <DatepickerContainer {...props} />
                </div>
            )
        }

        return <DatepickerAbsolute>
            {props.children}
            {container}
        </DatepickerAbsolute>;
    } else {
        return null;
    }
};

Datepicker.defaultProps = {
    mountVariation: 'absolute',
    initialView: DatepickerInitialViewEnum.date,
    mobile: false,
    transitionDuration: 700,
    dateAdapter: new NativeDateAdapter()
}

export default Datepicker;