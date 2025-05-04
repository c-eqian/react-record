import {
  DownCircleOutlined,
  SearchOutlined,
  UndoOutlined,
  UpCircleOutlined
} from '@ant-design/icons';
import { Button, Col, Form, Row } from 'antd';
import { useState } from 'react';
import { COMPONENTS_MAP } from '@/components/form/componentsMap.ts';
import type { FormItems, FormType } from '@/components/form/types/formType.ts';
const getComponent = (item: FormItems) => {
  const Com = COMPONENTS_MAP.get(item.type);
  if (Com) return <Com {...item.compProps} />;
  return null;
};
const calcCols = (columns: number) => {
  return Math.floor(24 / columns);
};
const RenderMoreButton = ({ itemCount, columns, rows, onClick }: any) => {
  const needMoreButton = itemCount > (columns ?? 3) * (rows ?? 1);
  const [needToggle, setNeedToggle] = useState(false);
  if (needMoreButton) {
    const handleClick = () => {
      onClick();
      setNeedToggle(!needToggle);
    };
    return (
      <Button
        onClick={handleClick}
        iconPosition="end"
        color="primary"
        variant="text"
        icon={needToggle ? <UpCircleOutlined /> : <DownCircleOutlined />}
      >
        {needToggle ? '收起' : '展开'}
      </Button>
    );
  }
  return null;
};
const formDefault = {
  labelCol: { span: 2, offset: 0 }
};
export default function EpForm({
  items,
  columns,
  onConfirm,
  onReset,
  searchMode,
  rows,
  ...reset
}: FormType) {
  const _columns = columns ?? 3;
  const _rows = rows ?? 1;
  const needIndex = _columns * _rows;
  const [needToggle, setNeedToggle] = useState(false);
  const [itemsIndex, setItemsIndex] = useState(needIndex);
  const [form] = Form.useForm();
  if (!items || !items.length) return null;
  const cols = calcCols(_columns);

  const handleToggle = () => {
    setNeedToggle(!needToggle);
    setItemsIndex(!needToggle ? items.length : needIndex);
  };
  const handleConfirmClick = (values: any) => {
    console.log(values);
    onConfirm?.(values);
  };
  const handleReset = () => {
    form.resetFields();
    console.log(form.getFieldsValue(true));
    onReset?.(form.getFieldsValue(true));
  };
  return (
    <>
      <Form form={form} onFinish={handleConfirmClick} name="epForm" {...formDefault} {...reset}>
        <Row className="cz-flex">
          {items.slice(0, itemsIndex).map(item => (
            <Col span={cols} key={item.formItemProps.name}>
              <Form.Item {...item.formItemProps}>{getComponent(item)}</Form.Item>
            </Col>
          ))}
          {searchMode ? (
            <Col className={'cz-flex-1 cz-flex cz-gap-2 cz-justify-end'}>
              <Button htmlType="submit" type={'primary'} icon={<SearchOutlined />}>
                搜索
              </Button>
              <Button onClick={handleReset} icon={<UndoOutlined />}>
                重置
              </Button>
              <RenderMoreButton
                onClick={handleToggle}
                rows={_rows}
                columns={_columns}
                itemCount={items.length}
              />
            </Col>
          ) : null}
        </Row>
      </Form>
    </>
  );
}
