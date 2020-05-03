import React, { Component } from 'react';
import FaCard from "../../ui/card/faCard";
import FaValue from "../../ui/value/fa-value/faValue";
import './fundTableContainer.scss';

interface FundEntry {
    id: number;
    name: string;
    serie: string;
    nav: number;
    rentability: number;
    administrator: string;
}

interface FundTableContainerProps {
    funds: Array<FundEntry>;
}

class FundTableContainer extends Component {
    state: FundTableContainerProps = {
        funds: [
            {
                id: 1,
                name: 'Bci Gestión Dinámica',
                serie: 'APV',
                nav: 724.32,
                rentability: 10.32,
                administrator: 'BCI'
            },
            {
                id: 2,
                name: 'Bci Gestión Dinámica',
                serie: 'APV',
                nav: 724.32,
                rentability: 10.32,
                administrator: 'BCI'
            },
            {
                id: 3,
                name: 'Bci Gestión Dinámica',
                serie: 'APV',
                nav: 724.32,
                rentability: 10.32,
                administrator: 'BCI'
            },
            {
                id: 4,
                name: 'Bci Gestión Dinámica',
                serie: 'APV',
                nav: 724.32,
                rentability: 10.32,
                administrator: 'BCI'
            }, {
                id: 5,
                name: 'Bci Gestión Dinámica',
                serie: 'APV',
                nav: 724.32,
                rentability: 10.32,
                administrator: 'BCI'
            },
            {
                id: 6,
                name: 'Bci Gestión Dinámica',
                serie: 'APV',
                nav: 724.32,
                rentability: 10.32,
                administrator: 'BCI'
            }
        ]
    }

    render() {
        const rows = this.state.funds.map(entry => {
            return <tr key={entry.id}>
                <td>{entry.name}</td>
                <td>{entry.serie}</td>
                <td className='text-center'>
                    <FaValue value={entry.nav}/>
                </td>
                <td className='text-center'>
                    <FaValue value={entry.rentability} percentage displayColor/>
                </td>
                <td className='text-center'>{entry.administrator}</td>
            </tr>
        })


        return (
            <div className='mb-4'>
                <FaCard padding={false}>
                    <table className='fund-table'>
                        <tr className='fund-table-header'>
                            <th className='text-left'>Fondo</th>
                            <th className='text-left'>Serie</th>
                            <th>Valor Cuota</th>
                            <th>Rentabilidad</th>
                            <th>Administradora</th>
                        </tr>
                        {rows}
                    </table>
                </FaCard>
            </div>
        );
    }
}

export default FundTableContainer;