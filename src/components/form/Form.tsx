import { Form } from 'antd';
import { COMPONENTS_MAP } from '@/components/form/componentsMap.ts';
import type { FormItems, FormType } from '@/components/form/types/formType.ts';
const getComponent = (item: FormType) => {
  const Com = COMPONENTS_MAP.get(item.type);
  if (Com) return <Com {...item.compProps} />;
  return null;
};
export default function EpForm({ items }: FormItems) {
  if (!items || !items.length) return null;
  return (
    <>
      <Form name="epForm">
        {items.map(item => (
          <Form.Item key={item.type}>{getComponent(item)}</Form.Item>
        ))}
      </Form>
    </>
  );
}
