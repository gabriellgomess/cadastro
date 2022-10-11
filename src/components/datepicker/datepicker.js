
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from '@mui/material/TextField';
import React from 'react';
import { formatToNumber, formatToBRL, formatToDate } from 'brazilian-values';


const DatePickerP = () => {
    return (
        // <LocalizationProvider dateAdapter={AdapterDayjs}>
        //     <DesktopDatePicker
        //         label="Data de Nascimento"
        //         value={null}
        //         onChange={() => {}}
        //         renderInput={(params) => <TextField {...params} />}
        //     />
        // </LocalizationProvider>
    );
}

export default DatePickerP;