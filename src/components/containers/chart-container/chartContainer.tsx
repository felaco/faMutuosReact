import React, { Component } from 'react';
import ChartContainerDumb from "./chart-container-dumb/ChartContainerDumb";

class ChartContainer extends Component {
    render() {
        return (
            <ChartContainerDumb
                fundType='Fondos de Deuda'
                fundName='Banchile Deuda Soberana Serie B'/>
        );
    }
}

export default ChartContainer;