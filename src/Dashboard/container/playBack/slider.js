import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { useState } from 'react';
const IntegerStep = () => {
  const [inputValue, setInputValue] = useState(1);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={1}
          max={20}
          style={{
            margin: '0 16px',
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};
const DecimalStep = () => {
  const [inputValue, setInputValue] = useState(0);
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };
  return (
    <Row style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Col span={20}>
        <Slider
          min={0}
          max={1}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={0.01}
        />
      </Col>
      <Col span={1}/>
      <Col span={1}>

        <p>{inputValue}</p>
      </Col>
    </Row>
  );
};
const HandleSlider = () => (
  <div className="p-20 bg-white rad-10 m-20 bs">
  
  <Space
    style={{
      width: '100%',
    }}
    direction="vertical"
  >
    <DecimalStep />
  </Space>
  
  </div>
);
export default HandleSlider;

