import { Pagination } from 'antd';
import type { FormTableType } from './formTableType';

export const FormTable = ({ children, header, footer }: FormTableType) => {
  const handlePaginationChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
  };
  return (
    <div className={'cz-size-full cz-p-2.5'}>
      <section className={'cz-size-full cz-flex-col cz-flex cz-bg-white cz-rounded-md cz-p-2'}>
        {header ? <header className={'cz-min-h-12'}>{header}</header> : null}
        <main className={'cz-my-2 cz-flex-1'}>{children}</main>
        <footer className={'cz-my-2'}>
          {footer ?? (
            <Pagination
              showQuickJumper
              align={'end'}
              defaultCurrent={2}
              total={500}
              onChange={handlePaginationChange}
            />
          )}
        </footer>
      </section>
    </div>
  );
};
