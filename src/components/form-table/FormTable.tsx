import type { FormTableType } from './formTableType';

export const FormTable = ({ children, header, footer }: FormTableType) => {
  return (
    <div className={'cz-size-full cz-p-2.5'}>
      <section className={'cz-size-full cz-flex-col cz-flex cz-bg-white cz-rounded-md cz-p-2'}>
        {header ? <header className={'cz-min-h-12'}>{header}</header> : null}
        <main className={'cz-my-2 cz-flex-1'}>{children}</main>
        {footer ? <footer>{footer}</footer> : null}
      </section>
    </div>
  );
};
