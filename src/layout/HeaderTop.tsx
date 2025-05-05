import { MinusCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { useNavigate } from 'react-router';
export default function HeaderTop() {
  const navigate = useNavigate();
  return (
    <>
      <div className={'cz-size-full cz-flex cz-justify-between'}>
        <div>LOGO</div>
        <div className={'cz-flex cz-gap-10'}>
          <div>
            <span className={'cz-px-2'}>管理员</span>
            <Avatar icon={<UserOutlined />} />
          </div>
          <div>
            <Button
              onClick={() => navigate('/login', { replace: true })}
              icon={<MinusCircleOutlined />}
              type={'text'}
            >
              退出
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
