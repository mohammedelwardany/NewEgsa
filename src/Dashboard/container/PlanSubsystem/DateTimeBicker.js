import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useDispatch, useSelector } from 'react-redux';
import { TakeTimeLater, nowDate } from '../../../Redux/PlanSlice';
import { useEffect } from 'react';

export default function ResponsiveDateTimePickers() {
  const {TimeNow} = useSelector(state => state.plan)
  const dispatch = useDispatch()

  const today = dayjs();

  const handleAccept = (x, event)=>{
    
    const DateSet = `${x.$y}-${x.$M}-${x.$D}T${x.$H}:${x.$m}:${x.$s}.${x.$ms}Z`
    dispatch(TakeTimeLater({planDateTime:DateSet}))
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[

          'MobileDateTimePicker',

        ]}
      >

        <DemoItem label="Execute At" >
          <MobileDateTimePicker defaultValue={today} onAccept={handleAccept} disablePast />
        </DemoItem>

      </DemoContainer>
    </LocalizationProvider>
  );
}