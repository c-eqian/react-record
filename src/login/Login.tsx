import { ArrowRightOutlined, UndoOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useRef } from 'react';
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
      rules: [{ required: true, message: '请输入账号' }]
    }
  },
  {
    type: 'input',
    compProps: {
      allowClear: true
    },
    formItemProps: {
      label: '密码',
      name: 'password',
      rules: [{ required: true, message: '请输入密码' }]
    }
  }
];
export default function Login() {
  const formRef = useRef<any>();
  const handleConfirm = (values: any) => {
    console.log(values);
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
            ref={formRef}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            onConfirm={handleConfirm}
            columns={1}
            items={loginForm}
          >
            <div className={'cz-flex cz-justify-center cz-gap-12'}>
              <Button htmlType={'submit'} type={'primary'} icon={<ArrowRightOutlined />}>
                登录
              </Button>
              <Button onClick={() => formRef.current.resetFields()} icon={<UndoOutlined />}>
                重置
              </Button>
            </div>
          </EpForm>
        </div>
      </div>
    </>
  );
}
