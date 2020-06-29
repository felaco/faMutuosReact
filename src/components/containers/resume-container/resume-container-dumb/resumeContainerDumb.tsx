import React from 'react';
import FaCard from "../../../ui/card/faCard";
import FaValueWithHeader from "../../../ui/value/fa-value-with-header/faValueWithHeader";
import './resumeContainerDumb.scss';
import FaSpinner from "../../../ui/icons/spinner/faSpinner";

interface ResumeContainerDumbProps {
    nav: number;
    patrimony: number;
    rentability: number;
    isLoading: boolean;
}

const ResumeContainerDumb = (props: ResumeContainerDumbProps) => {
    const content = <div className='d-flex flex-column text-center justify-content-evenly resume-body'>
        <FaValueWithHeader header='Valor Cuota'
                           value={props.nav}
                           digits={4}
                           bold/>

        <FaValueWithHeader header='Patrimonio'
                           value={props.patrimony}
                           digits={4}
                           metricText='M'
                           bold/>

        <FaValueWithHeader header='Rentabilidad'
                           value={props.rentability}
                           digits={2}
                           percentage
                           displayColor
                           bold/>
    </div>

    const spinner = props.isLoading ? <FaSpinner/> : null;

    return (
        <FaCard padding header='Resumen'>
            {spinner}
            {!props.isLoading && content}
        </FaCard>
    );
};

export default ResumeContainerDumb;