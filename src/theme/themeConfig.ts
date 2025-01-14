import { ThemeProviderProps as AntDThemeProviderProps } from 'antd-style';

export type ThemeProviderProps = AntDThemeProviderProps<any>;

const colorPrimary = '#6C74F5';

const theme_props: ThemeProviderProps = {
  customToken: {
    testHeight: '50px',
    colorPrimaryTest: '#f85a5a',
    // colorBgLayout: 'red',
  },
  theme: {
    token: {
      colorPrimary,
      borderRadius: 12,
      colorLink: colorPrimary,
    },
  },
};

export default theme_props;
