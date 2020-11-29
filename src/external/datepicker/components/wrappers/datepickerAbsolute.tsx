import React, { Component } from 'react';
import styles from './DatepickerAbsolute.module.scss';

class DatepickerAbsolute extends Component {
    render() {
        return (
            <div className={styles.DatepickerContainerAbsolute}>
                {this.props.children}
            </div>
        );
    }
}

export default DatepickerAbsolute;