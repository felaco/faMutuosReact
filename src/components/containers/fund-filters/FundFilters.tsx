import React from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import './Fundfilters.scss';
import Datepicker from "../../../external/datepicker/datepicker";
import { SpanishNativeDateAdapter } from "../../../external/datepicker/dateAdapter/SpanishNativeDateAdapter";

const FundFilters = () => {
    return (
        <div className='row filter-container'>
            <div className='col-12 col-md-3'>
                <TextField label='Administradora' value={0} select variant='filled' classes={{ root: 'w-100' }}>
                    <MenuItem value={0}>Todos los fondos</MenuItem>
                    <MenuItem value={1}>Btg Pactual</MenuItem>
                    <MenuItem value={2}>Bci</MenuItem>
                </TextField>

            </div>

            <div className="col-12 col-md-3 position-relative">
                <Datepicker onDateSelected={() => null} open={true} dateAdapter={new SpanishNativeDateAdapter()}>
                    <TextField label='Fecha desde' variant='filled' classes={{ root: 'w-100' }}/>
                </Datepicker>
            </div>

            <div className="col-12 col-md-3">
                <Datepicker onDateSelected={() => null} open={false} dateAdapter={new SpanishNativeDateAdapter()}>
                    <TextField label='Fecha hasta' variant='filled' classes={{ root: 'w-100' }}/>
                </Datepicker>
            </div>
        </div>
    );
};

export default FundFilters;