import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
export default function HeaderTop() {
  return (
    <>
      <div className={'cz-size-full cz-flex cz-justify-between'}>
        <div>LOGO</div>
        <div>
          <span className={'cz-px-2'}>管理员</span>
          <Avatar icon={<UserOutlined />} />
        </div>
      </div>
    </>
  );
}
