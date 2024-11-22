import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { DesktopIcon, LockOnIcon } from 'tdesign-icons-react';
import {
  Button,
  Form,
  Input,
  MessagePlugin,
  Space,
  type FormInstanceFunctions,
  type FormProps,
  type FormRules
} from 'tdesign-react';
const { FormItem } = Form;
interface ILoginData {
  name: string;
  password: string;
}
export default function Login() {
  const navigate = useNavigate();
  const onSubmit: FormProps['onSubmit'] = async e => {
    await form.current?.validate();
    console.log(e);
    if (e.validateResult === true) {
      //   跳转路由到首页
      navigate('/home', { replace: true });
    }
  };
  const onReset: FormProps['onReset'] = async e => {
    console.log(e);
    await MessagePlugin.info('重置成功');
  };
  const rules: FormRules<ILoginData> = {
    name: [{ required: true, message: '请输入口令', type: 'error' }],
    password: [{ required: true, message: '请输入秘钥', type: 'error' }]
  };
  const form = React.useRef<FormInstanceFunctions>();
  useEffect(() => {
    form.current?.validate();
  }, [form]);
  return (
    <>
      <div className={'cz-h-full cz-bg-[#e6effe] cz-flex cz-justify-center cz-items-center'}>
        <div
          className={
            'cz-min-h-[300px] cz-p-5 cz-flex cz-justify-center cz-items-center cz-rounded-2xl cz-bg-white cz-w-[500px]'
          }
        >
          <Form
            className={'cz-flex-1'}
            labelAlign="right"
            layout="vertical"
            rules={rules}
            preventSubmitDefault
            resetType="empty"
            requiredMark
            onSubmit={onSubmit}
            onReset={onReset}
            showErrorMessage
          >
            <FormItem initialData="admin" label="口令" name="name">
              <Input clearable placeholder="请输入口令" prefixIcon={<DesktopIcon />} />
            </FormItem>
            <FormItem initialData="admin" label="秘钥" name="password">
              <Input
                clearable
                type={'password'}
                placeholder="请输入秘钥"
                prefixIcon={<LockOnIcon />}
              />
            </FormItem>
            <FormItem style={{ marginLeft: 150 }}>
              <Space>
                <Button type="submit" theme="primary">
                  提交
                </Button>
                <Button type="reset" theme="default">
                  重置
                </Button>
              </Space>
            </FormItem>
          </Form>
        </div>
      </div>
    </>
  );
}
