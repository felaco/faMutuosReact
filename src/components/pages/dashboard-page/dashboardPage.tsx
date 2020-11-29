import React, { useState } from 'react';
import HeaderLayout from "../../layout/header-layout/headerLayout";
import ChartContainer from "../../containers/chart-container/chartContainer";
import ResumeContainer from "../../containers/resume-container/resumeContainer";
import FundTableContainer from "../../containers/fund-table-container/fundTableContainer";
import { Collapse } from "@material-ui/core";
import FundFilters from "../../containers/fund-filters/FundFilters";

const DashboardPage = () => {
    const [showFilters, setShowFilters] = useState(true);

    return (
        <div className='dashboard-page fa-container'>
            <HeaderLayout filterHandler={() => setShowFilters(!showFilters)}/>
            <Collapse in={showFilters} timeout="auto">
                <FundFilters/>
            </Collapse>

            <div className='row mt-3'>
                <div className='col-12 col-md-9'>
                    <ChartContainer/>
                </div>
                <div className='col-12 col-md-3 resume-container-wrapper-dashboard'>
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