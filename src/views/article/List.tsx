import { Space, Table, Tag, type TableProps } from 'antd';
import { FormTable } from '@/components/form-table/FormTable.tsx';
import EpForm from '@/components/form/Form.tsx';
import type { FormItems } from '@/components/form/types/formType.ts';
type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
};

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];
const formItems: FormItems[] = [
  {
    type: 'input',
    compProps: {
      maxLength: 20
    },
    formItemProps: {
      label: '标题：',
      name: 'input1'
    }
  },
  {
    type: 'select',
    compProps: {
      maxLength: 20,
      options: [
        {
          value: '前端',
          label: '前端'
        },
        {
          value: '后端',
          label: '后端'
        },
        {
          value: 'MySQL',
          label: 'MySQL'
        }
      ]
    },
    formItemProps: {
      label: '分类：',
      name: 'input2'
    }
  }
];
const defaultValues = {
  input1: 'initialValues'
};
const Header = () => {
  return (
    <>
      <div>
        <EpForm initialValues={defaultValues} searchMode items={formItems}></EpForm>
      </div>
    </>
  );
};
export default function ArticleList() {
  return (
    <>
      <FormTable header={<Header />}>
        <Table<DataType> columns={columns} dataSource={data} />
      </FormTable>
    </>
  );
}
