import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useNavigate } from 'react-router';
import EpForm from '@/components/form/Form';
import type { FormItems } from '@/components/form/types/formType';
const loginForm: FormItems[] = [
  {
    type: 'input',
    compProps: {
      allowClear: true
    },
    formItemProps: {
      label: '账号',
      name: 'account',
      initialValue: 'admin',
      rules: [{ required: true, message: '请输入账号' }]
    }
  },
  {
    type: 'input',
    compProps: {
      allowClear: true,
      type: 'password'
    },
    formItemProps: {
      label: '密码',
      name: 'password',
      initialValue: 'admin',
      rules: [{ required: true, message: '请输入密码' }]
    }
  }
];
export default function Login() {
  const navigate = useNavigate();
  const handleConfirm = (values: any) => {
    console.log(values);
    navigate('/dashboard', { replace: true });
  };
  return (
    <>
      <div className={'cz-h-full cz-bg-[#e6effe] cz-flex cz-justify-center cz-items-center'}>
        <div
          className={
            'cz-min-h-[300px] cz-p-5 cz-flex cz-justify-center cz-items-center cz-rounded-2xl cz-bg-white cz-w-[380px]'
          }
        >
          <EpForm
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onConfirm={handleConfirm}
            columns={1}
            items={loginForm}
          >
            <Form.Item label={null}>
              <div>
                <Button
                  style={{ width: '100%' }}
                  htmlType={'submit'}
                  type={'primary'}
                  icon={<ArrowRightOutlined />}
                >
                  登录
                </Button>
              </div>
            </Form.Item>
          </EpForm>
        </div>
      </div>
    </>
  );
}
