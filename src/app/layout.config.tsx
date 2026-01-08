import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <img
          src="/brand/logo.png"
          alt="CodeCli"
          width={24}
          height={24}
          className="size-6"
        />
        <span className="font-semibold">CodeCli</span>
      </>
    ),
  },
  links: [
    {
      text: '文档',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};