import { Col, Collapse, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import TapsResult from './taps';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import './TableResults';
import ChartHandles from '../playBack/ChartHandles';
import MainResults from '../playBack/MainResultsTable';
import TableResults from './TableResults';
import ChartResult from './chartsResult';
import { useSelector } from 'react-redux';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const PageCollapse = () => {
      const { sensorsData } = useSelector((state) => state.online);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const onChange = (key) => {
        console.log(key);
    };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };



    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    return (
        <div style={{ minWidth: "100%", maxWidth: "100%" }}>
            <Collapse onChange={onChange}
                className='p-20 bg-white rad-10 m-20 bs'
                size="large"
            >
                <Panel header={
                    <>
                        <Row>
                            <Col xs={18} sm={18} md={18} lg={18} xl={18}>DHT-11</Col>
                            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                                <i class="bi bi-thermometer-sun"></i>
                                &nbsp;
                                {sensorsData.Temperature}°C
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <i class="bi bi-droplet-half"></i>
                                &nbsp;
                                {sensorsData.Humidity}
                            </Col>
                        </Row>
                    </>} key="1">
                    <TapsResult
                        tapss={[{
                            id: 1,
                            name: 'Table',
                            icon: <UnorderedListOutlined />,
                            children: <TableResults
                                dataa={[
                                    {
                                        key: '1',
                                        Time: '2023-4-27T02:40:20',
                                        Tempreture: "32°C",
                                        Humdity: '23',
                                    },
                                    {
                                        key: '2',
                                        Time: '2023-4-27T02:40:20',
                                        Tempreture: "42°C",
                                        Humdity: '23',
                                    },
                                    {
                                        key: '3',
                                        Time: '2023-4-27T02:40:20',
                                        Tempreture: "32°C",
                                        Humdity: '23',
                                    },
                                    {
                                        key: '4',
                                        Time: '2023-4-27T02:40:20',
                                        Tempreture: "32°C",
                                        Humdity: '23',
                                    },
                                ]}
                                cols={[
                                    {
                                        title: 'Time',
                                        dataIndex: 'Time',
                                        key: 'Time',
                                        width: '30%',
                                        ...getColumnSearchProps('Time'),

                                    },
                                    {
                                        title: 'Tempreture',
                                        dataIndex: 'Tempreture',
                                        key: 'Tempreture',
                                        width: '20%',
                                        ...getColumnSearchProps('Tempreture'),

                                    },
                                    {
                                        title: 'Humdity',
                                        dataIndex: 'Humdity',
                                        key: 'Humdity',
                                        ...getColumnSearchProps('Humdity'),

                                    },
                                ]}
                            />
                        },
                        {
                            id: 2,
                            name: 'Graph',
                            icon: <TableOutlined />,
                            children: (
                                <Row>
                                    <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>

                                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                        <ChartResult
                                            options={{
                                                animationEnabled: true,
                                                title: {
                                                    text: "Monthly Sales - 2017"
                                                },
                                                axisX: {
                                                    valueFormatString: "MMM"
                                                },
                                                axisY: {
                                                    title: "Sales (in USD)",
                                                    prefix: "$",
                                                    includeZero: false
                                                },
                                                data: [{
                                                    yValueFormatString: "$#,###",
                                                    xValueFormatString: "MMMM",
                                                    type: "spline",
                                                    dataPoints: [
                                                        { x: new Date(2017, 0), y: 25060 },
                                                        { x: new Date(2017, 1), y: 27980 },
                                                        { x: new Date(2017, 2), y: 42800 },
                                                        { x: new Date(2017, 3), y: 32400 },
                                                        { x: new Date(2017, 4), y: 35260 },
                                                        { x: new Date(2017, 5), y: 33900 },
                                                        { x: new Date(2017, 6), y: 40000 },
                                                        { x: new Date(2017, 7), y: 52500 },
                                                        { x: new Date(2017, 8), y: 32300 },
                                                        { x: new Date(2017, 9), y: 42000 },
                                                        { x: new Date(2017, 10), y: 37160 },
                                                        { x: new Date(2017, 11), y: 38400 }
                                                    ]
                                                }]
                                            }}

                                        />
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>


                                        <ChartResult
                                            options={{
                                                animationEnabled: true,
                                                title: {
                                                    text: "Monthly Sales - 2017"
                                                },
                                                axisX: {
                                                    valueFormatString: "MMM"
                                                },
                                                axisY: {
                                                    title: "Sales (in USD)",
                                                    prefix: "$",
                                                    includeZero: false
                                                },
                                                data: [{
                                                    yValueFormatString: "$#,###",
                                                    xValueFormatString: "MMMM",
                                                    type: "spline",
                                                    dataPoints: [
                                                        { x: new Date(2017, 0), y: 25060 },
                                                        { x: new Date(2017, 1), y: 27980 },
                                                        { x: new Date(2017, 2), y: 42800 },
                                                        { x: new Date(2017, 3), y: 32400 },
                                                        { x: new Date(2017, 4), y: 35260 },
                                                        { x: new Date(2017, 5), y: 33900 },
                                                        { x: new Date(2017, 6), y: 40000 },
                                                        { x: new Date(2017, 7), y: 52500 },
                                                        { x: new Date(2017, 8), y: 32300 },
                                                        { x: new Date(2017, 9), y: 42000 },
                                                        { x: new Date(2017, 10), y: 37160 },
                                                        { x: new Date(2017, 11), y: 38400 }
                                                    ]
                                                }]
                                            }}

                                        />
                                    </Col>
                                    <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>


                                </Row>)
                        }

                        ]}
                    />
                </Panel>
                <Panel header={
                    <>
                        <Row>
                            <Col xs={18} sm={18} md={18} lg={18} xl={18}>Ultrasonic</Col>
                            <Col xs={1} sm={1} md={1} lg={1} xl={1}>

                            </Col>
                            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                                <i class="bi bi-arrow-left"></i>
                                <i class="bi bi-arrow-right"></i>

                                &nbsp;
                                {sensorsData.Ultrasonic}cm
                            </Col>
                        </Row>
                    </>} key="2">
                    <TapsResult
                        tapss={[{
                            id: 1,
                            name: 'Table',
                            icon: <UnorderedListOutlined />,
                            children: <TableResults
                                dataa={[
                                    {
                                        key: '1',
                                        Time: '2023-4-27T02:40:20',
                                        Distance: "32m",
                                    },
                                    {
                                        key: '2',
                                        Time: '2023-4-27T02:40:20',
                                        Distance: "42m",
                                    },
                                    {
                                        key: '3',
                                        Time: '2023-4-27T02:40:20',
                                        Distance: "32m",
                                    },
                                    {
                                        key: '4',
                                        Time: '2023-4-27T02:40:20',
                                        Distance: "32m",
                                    },
                                ]}
                                cols={[
                                    {
                                        title: 'Time',
                                        dataIndex: 'Time',
                                        key: 'Time',
                                        width: '30%',
                                        ...getColumnSearchProps('Time'),

                                    },
                                    {
                                        title: 'Distance',
                                        dataIndex: 'Distance',
                                        key: 'Distance',
                                        width: '20%',
                                        ...getColumnSearchProps('Distance'),

                                    },

                                ]}
                            />
                        },
                        {
                            id: 2,
                            name: 'Graph',
                            icon: <TableOutlined />,
                            children: (

                                <ChartResult
                                    options={{
                                        animationEnabled: true,
                                        title: {
                                            text: "Monthly Sales - 2017"
                                        },
                                        axisX: {
                                            valueFormatString: "MMM"
                                        },
                                        axisY: {
                                            title: "Sales (in USD)",
                                            prefix: "$",
                                            includeZero: false
                                        },
                                        data: [{
                                            yValueFormatString: "$#,###",
                                            xValueFormatString: "MMMM",
                                            type: "spline",
                                            dataPoints: [
                                                { x: new Date(2017, 0), y: 25060 },
                                                { x: new Date(2017, 1), y: 27980 },
                                                { x: new Date(2017, 2), y: 42800 },
                                                { x: new Date(2017, 3), y: 32400 },
                                                { x: new Date(2017, 4), y: 35260 },
                                                { x: new Date(2017, 5), y: 33900 },
                                                { x: new Date(2017, 6), y: 40000 },
                                                { x: new Date(2017, 7), y: 52500 },
                                                { x: new Date(2017, 8), y: 32300 },
                                                { x: new Date(2017, 9), y: 42000 },
                                                { x: new Date(2017, 10), y: 37160 },
                                                { x: new Date(2017, 11), y: 38400 }
                                            ]
                                        }]
                                    }}

                                />
                            )
                        }

                        ]}
                    />





                </Panel>
                <Panel header={
                    <>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>MPU6050</Col>
                            <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
                            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                                x : {sensorsData.Acceleration.x} &nbsp; y : {sensorsData.Acceleration.y} &nbsp; z : {sensorsData.Acceleration.z}
                            </Col>
                            <Col xs={5} sm={5} md={5} lg={5} xl={5}>
                                <i class="bi bi-arrow-repeat"></i>&nbsp;
                                xy : {sensorsData.Gyroscope.xy}° &nbsp; yz : {sensorsData.Gyroscope.yz}° &nbsp; xz : {sensorsData.Gyroscope.xz}°
                            </Col>
                            <Col xs={1} sm={1} md={1} lg={1} xl={1}>

                            </Col>
                        </Row>
                    </>} key="3">
                    <TapsResult
                        tapss={[{
                            id: 1,
                            name: 'Table',
                            icon: <UnorderedListOutlined />,
                            children: <TableResults
                                dataa={[
                                    {
                                        key: '1',
                                        Time: '2023-4-27T02:40:20',
                                        x: "32",
                                        y: "32",
                                        z: "32",
                                        xy: "32",
                                        yz: "32",
                                        xz: "32",
                                        Humdity: '23',
                                    },
                                    {
                                        key: '2',
                                        Time: '2023-4-27T02:40:20',
                                        x: "42",
                                        y: "32",
                                        z: "32",
                                        xy: "32",
                                        yz: "32",
                                        xz: "32",
                                        Humdity: '23',
                                    },
                                    {
                                        key: '3',
                                        Time: '2023-4-27T02:40:20',
                                        x: "32",
                                        y: "32",
                                        z: "32",
                                        xy: "32",
                                        yz: "32",
                                        xz: "32",
                                        Humdity: '23',
                                    },
                                    {
                                        key: '4',
                                        Time: '2023-4-27T02:40:20',
                                        x: "32",
                                        y: "32",
                                        z: "32",
                                        xy: "32",
                                        yz: "32",
                                        xz: "32",
                                        Humdity: '23',
                                    },
                                ]}
                                cols={[
                                    {
                                        title: 'Time',
                                        dataIndex: 'Time',
                                        key: 'Time',
                                        width: '30%',
                                        ...getColumnSearchProps('Time'),

                                    },
                                    {
                                        title: 'x',
                                        dataIndex: 'x',
                                        key: 'x',
                                        ...getColumnSearchProps('x'),

                                    },
                                    {
                                        title: 'y',
                                        dataIndex: 'y',
                                        key: 'y',
                                        ...getColumnSearchProps('y'),

                                    },
                                    {
                                        title: 'z',
                                        dataIndex: 'z',
                                        key: 'z',
                                        ...getColumnSearchProps('z'),

                                    },
                                    {
                                        title: 'xy',
                                        dataIndex: 'xy',
                                        key: 'xy',
                                        ...getColumnSearchProps('xy'),

                                    },
                                    {
                                        title: 'yz',
                                        dataIndex: 'yz',
                                        key: 'yz',
                                        ...getColumnSearchProps('yz'),

                                    },
                                    {
                                        title: 'xz',
                                        dataIndex: 'xz',
                                        key: 'xz',
                                        ...getColumnSearchProps('xz'),

                                    },
                                ]}
                            />
                        },
                        {
                            id: 2,
                            name: 'Graph',
                            icon: <TableOutlined />,
                            children: (
                                <Row>
                                    <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>

                                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                        <ChartResult
                                            options={{
                                                animationEnabled: true,	
                                                title:{
                                                    text: "Number of New Customers"
                                                },
                                                axisY : {
                                                    title: "Number of Customers",
                                                    includeZero: false
                                                },
                                                toolTip: {
                                                    shared: true
                                                },
                                                data: [{
                                                    type: "spline",
                                                    name: "2016",
                                                    showInLegend: true,
                                                    dataPoints: [
                                                        { y: 155, label: "Jan" },
                                                        { y: 150, label: "Feb" },
                                                        { y: 152, label: "Mar" },
                                                        { y: 148, label: "Apr" },
                                                        { y: 142, label: "May" },
                                                        { y: 150, label: "Jun" },
                                                        { y: 146, label: "Jul" },
                                                        { y: 149, label: "Aug" },
                                                        { y: 153, label: "Sept" },
                                                        { y: 158, label: "Oct" },
                                                        { y: 154, label: "Nov" },
                                                        { y: 150, label: "Dec" }
                                                    ]
                                                },
                                                {
                                                    type: "spline",
                                                    name: "2017",
                                                    showInLegend: true,
                                                    dataPoints: [
                                                        { y: 172, label: "Jan" },
                                                        { y: 173, label: "Feb" },
                                                        { y: 175, label: "Mar" },
                                                        { y: 172, label: "Apr" },
                                                        { y: 162, label: "May" },
                                                        { y: 165, label: "Jun" },
                                                        { y: 172, label: "Jul" },
                                                        { y: 168, label: "Aug" },
                                                        { y: 175, label: "Sept" },
                                                        { y: 170, label: "Oct" },
                                                        { y: 165, label: "Nov" },
                                                        { y: 169, label: "Dec" }
                                                    ]
                                                }]
                                        }}

                                        />
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
                                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>


                                        <ChartResult
                                            options={{
                                                animationEnabled: true,	
                                                title:{
                                                    text: "Number of New Customers"
                                                },
                                                axisY : {
                                                    title: "Number of Customers",
                                                    includeZero: false
                                                },
                                                toolTip: {
                                                    shared: true
                                                },
                                                data: [{
                                                    type: "spline",
                                                    name: "2016",
                                                    showInLegend: true,
                                                    dataPoints: [
                                                        { y: 155, label: "Jan" },
                                                        { y: 150, label: "Feb" },
                                                        { y: 152, label: "Mar" },
                                                        { y: 148, label: "Apr" },
                                                        { y: 142, label: "May" },
                                                        { y: 150, label: "Jun" },
                                                        { y: 146, label: "Jul" },
                                                        { y: 149, label: "Aug" },
                                                        { y: 153, label: "Sept" },
                                                        { y: 158, label: "Oct" },
                                                        { y: 154, label: "Nov" },
                                                        { y: 150, label: "Dec" }
                                                    ]
                                                },
                                                {
                                                    type: "spline",
                                                    name: "2017",
                                                    showInLegend: true,
                                                    dataPoints: [
                                                        { y: 172, label: "Jan" },
                                                        { y: 173, label: "Feb" },
                                                        { y: 175, label: "Mar" },
                                                        { y: 172, label: "Apr" },
                                                        { y: 162, label: "May" },
                                                        { y: 165, label: "Jun" },
                                                        { y: 172, label: "Jul" },
                                                        { y: 168, label: "Aug" },
                                                        { y: 175, label: "Sept" },
                                                        { y: 170, label: "Oct" },
                                                        { y: 165, label: "Nov" },
                                                        { y: 169, label: "Dec" }
                                                    ]
                                                }]
                                        }}

                                        />
                                    </Col>
                                    <Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>


                                </Row>)
                        }

                        ]}
                    />
                </Panel>
            </Collapse>
        </div>
        //   <Collapse accordion>
        //   <Panel header="This is panel header 1" key="1">
        //     <p>{text}</p>
        //   </Panel>
        //   <Panel header="This is panel header 2" key="2">
        //     <p>{text}</p>
        //   </Panel>
        //   <Panel header="This is panel header 3" key="3">
        //     <p>{text}</p>
        //   </Panel>
        // </Collapse>
    );
};
export default PageCollapse;