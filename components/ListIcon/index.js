import CountTo from "react-count-to";
import {
  CalendarOutlined,
  FolderOutlined,
  FireOutlined
} from '@ant-design/icons';

const ListIcon = ({item, className=''}) => (
  <div className={`list-icon ${className}`}>
    <span>
      <CalendarOutlined style={{color:'lightseagreen'}}/> {item.addTime}
    </span>
    <span>
      <FolderOutlined style={{color:'sandybrown'}}/> {item.typeName}
    </span>
    <span>
      <FireOutlined style={{color:'red'}}/> 点击量：
      <CountTo to={item.view_count} speed={1000}/>次
    </span>
  </div>
)

export default ListIcon;
