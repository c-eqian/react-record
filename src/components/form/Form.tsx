import { Col, Form, Row } from 'antd';
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
export default function EpForm({ items, columns, ...reset }: FormType) {
  if (!items || !items.length) return null;
  const cols = calcCols(columns ?? 3);
  return (
    <>
      <Form name="epForm" {...reset}>
        <Row>
          {items.map(item => (
            <Col span={cols} key={item.formItemProps.name}>
              <Form.Item {...item.formItemProps}>{getComponent(item)}</Form.Item>
            </Col>
          ))}
        </Row>
      </Form>
    </>
  );
}
