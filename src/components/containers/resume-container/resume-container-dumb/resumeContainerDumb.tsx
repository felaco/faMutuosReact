import React from 'react';
import FaCard from "../../../ui/card/faCard";
import FaValueWithHeader from "../../../ui/value/fa-value-with-header/faValueWithHeader";
import './resumeContainerDumb.scss';

interface ResumeContainerDumbProps {
    nav: number;
    patrimony: number;
    rentability: number;
}

const ResumeContainerDumb = (props: ResumeContainerDumbProps) => {
    return (
        <FaCard padding header='Resumen'>
            <div className='d-flex flex-column text-center justify-content-evenly resume-body'>
                <FaValueWithHeader header='Valor Cuota'
                                   value={props.nav}
                                   digits={4}
                                   bold/>

                <FaValueWithHeader header='Patrimonio'
                                   value={props.patrimony}
                                   digits={4}
                                   metricText='MM'
                                   bold/>

                <FaValueWithHeader header='Rentabilidad'
                                   value={props.rentability}
                                   digits={2}
                                   percentage
                                   displayColor
                                   bold/>
            </div>
        </FaCard>
    );
};

export default ResumeContainerDumb;