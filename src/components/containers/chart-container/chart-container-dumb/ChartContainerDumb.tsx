import React from 'react';
import FaCard from "../../../ui/card/faCard";
import './ChartContainerDumb.scss';

interface ChartContainerDumbProps {
    fundType: string;
    fundName: string;
    chartData?: Array<any>;
}

const ChartContainerDumb = (props: ChartContainerDumbProps) => {
    return (
        <FaCard padding>
            <div className='chart-container-dumb-padding'>
                <div className='px-3'>
                    <p className='chart-container-dumb-title'>{props.fundType}</p>
                    <div className='d-flex justify-content-between'>
                        <p className='chart-container-dumb-subtitle'>{props.fundName}</p>
                        <div>
                            <span>1Y</span>
                            <span>6M</span>
                            <span>3M</span>
                            <span>1M</span>
                        </div>
                    </div>
                </div>

                <div style={{height: '200px', textAlign: 'center'}}>
                    <p>Chart</p>
                </div>
            </div>
        </FaCard>
    );
};

export default ChartContainerDumb;