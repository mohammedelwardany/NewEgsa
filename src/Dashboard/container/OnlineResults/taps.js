import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
const TapsResult = ({tapss}) => {
    

    return(
        <Tabs
        defaultActiveKey="1"
        items={tapss.map((tap, i) => {
          return {
            label: (
              <span>
                {tap.icon}
                {tap.name}
                
              </span>
            ),
            key: i+1,
            children: (
                <div>
                {tap.children}
                </div>
                ),
          };
        })}
      />
    )
}
    


export default TapsResult;