import React, { Component } from 'react';
import ResumeContainerDumb from "./resume-container-dumb/resumeContainerDumb";
import { GainersService } from "../../../services/GainersService";
import { Subscription } from "rxjs";
import { requestFundDetail } from "../../../actions/FundsActions";
import { connect } from "react-redux";
import { FundEntry, FundDetail } from '../../../types';

interface ResumeContainerDispatchProps {
    requestFundDetail: (id: number) => any;
}

interface ResumeContainerBaseProps {
    gainerFund: FundEntry;
    isLoading: boolean;
    fund: FundDetail
}

interface ResumeContainerProps extends ResumeContainerDispatchProps, ResumeContainerBaseProps {

}

class ResumeContainer extends Component<ResumeContainerProps> {
    // @ts-ignore
    private subscription: Subscription;

    componentDidMount() {
        this.subscription = GainersService.observable().subscribe(() => {
            const { requestFundDetail, gainerFund } = this.props;
            requestFundDetail(gainerFund.fundId);
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        const { fund, isLoading } = this.props;
        return (
            <ResumeContainerDumb nav={fund?.info?.nav}
                                 patrimony={fund?.info?.patrimony}
                                 rentability={50}
                                 isLoading={isLoading}/>
        );
    }
}

const mapDispatchToProps = (dispatch: Function): ResumeContainerDispatchProps => {
    return {
        requestFundDetail: (id: number) => dispatch(requestFundDetail(id))
    }
}

const mapStateToProps = (state: any): ResumeContainerBaseProps => {
    return {
        gainerFund: state.gainers.loaded ? state.gainers?.gainers[0] : undefined,
        isLoading: state.fundDetail.isLoading,
        fund: state.fundDetail.fund
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer);