import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import '../../../css/framework.css';
import '../../../css/master.css';


const marks = [
  {
    value: 0,
    label: '00:00',
  },
  {
    value: 100,
    label: '01:00',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

function DiscreteSliderValues() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}


const HandleSlider = () => {
  
    return(
        <div className="welcome bg-white rad-10 txt-c-mobile block-mobile bs m-20" >

        <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile" style={{paddingLeft:70,paddingRight:70}}>
            <DiscreteSliderValues/>
        </div>
      </div>

 
     
        )
  
}

export default HandleSlider;