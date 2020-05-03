import React from 'react';
import HeaderLayout from "../../layout/header-layout/headerLayout";
import ChartContainer from "../../containers/chart-container/chartContainer";
import ResumeContainer from "../../containers/resume-container/resumeContainer";
import FundTableContainer from "../../containers/fund-table-container/fundTableContainer";

const DashboardPage = () => {
    return (
        <div className='dashboard-page fa-container'>
            <HeaderLayout/>
            <div className='row mt-3'>
                <div className='col-12 col-md-9'>
                    <ChartContainer />
                </div>

                <div className='resume-container-wrapper-dashboard ml-auto'>
                    <ResumeContainer/>
                </div>
            </div>

            <div className='mt-5'>
                <FundTableContainer/>
            </div>
        </div>
    );
};

export default DashboardPage;