import React, { Component } from 'react';
import FaCard from "../../ui/card/faCard";
import FaValue from "../../ui/value/fa-value/faValue";
import './fundTableContainer.scss';
import FaSpinner from "../../ui/icons/spinner/faSpinner";
import { CHANGE_CHART_FUND, requestGainers } from "../../../actions/FundsActions";
import { connect } from "react-redux";
import { FundEntry } from '../../../types';

interface FundTableContainerDispatchProps {
    dispatchRequestGainers: () => any,
    dispatchChangeChartFund: (fundId: number) => any
}

interface FundTableContainerBaseProps {
    funds: Array<FundEntry>;
    isLoading: boolean;
    errorMsg: string | null;
}

interface FundTableContainerProps extends FundTableContainerBaseProps, FundTableContainerDispatchProps {

}

class FundTableContainer extends Component<FundTableContainerProps> {
    componentDidMount() {
        this.props.dispatchRequestGainers();
    }

    render() {
        const rows = this.props.funds.map(entry => {
            return <tr key={entry.fundId}>
                <td className='capitalize'>{entry.fundName.toLowerCase()}</td>
                <td>{entry.serie}</td>
                <td className='text-center'>{entry.administratorShortName}</td>
                <td className='text-center'>
                    <FaValue value={entry.currNav}/>
                </td>
                <td className='text-center'>
                    <FaValue value={entry.rentability * 100} percentage displayColor/>
                </td>
            </tr>
        });

        const table = <table className='fund-table'>
            <thead>
            <tr className='fund-table-header'>
                <th className='text-left'>Fondo</th>
                <th className='text-left'>Serie</th>
                <th>Administradora</th>
                <th>Valor Cuota</th>
                <th>Rentabilidad</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>

        const spinner = this.props.isLoading ? <FaSpinner/> : null;

        return (
            <div className='mb-4'>
                <FaCard padding={false}>
                    {table}
                    {spinner}
                </FaCard>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Function): FundTableContainerDispatchProps => ({
    dispatchRequestGainers: () => dispatch(requestGainers()),
    dispatchChangeChartFund: (fundId: number) => dispatch({ type: CHANGE_CHART_FUND, payload: fundId })
});

const mapStateToProps = (state: any): FundTableContainerBaseProps => ({
    funds: state.gainers.gainers,
    isLoading: state.gainers.isLoading,
    errorMsg: state.gainers.error
})

export default connect(mapStateToProps, mapDispatchToProps)(FundTableContainer);
