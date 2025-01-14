import { createStyles } from 'antd-style';

export const useStyles = createStyles(() => ({
  sidebar: {
    'position': 'relative',
    'display': 'flex',
    'flexDirection': 'column',
    'flexShrink': '0',
    'width': '336px',
    'height': '100%',
    'backgroundColor': 'white',

    // 处理 [dir='ltr'] 和 [dir='rtl']
    '@global': {
      "[dir='ltr'] &": {
        borderRight: '1px solid rgba(0, 0, 0, 0.06)',
      },
      "[dir='rtl'] &": {
        borderLeft: '1px solid rgba(0, 0, 0, 0.06)',
      },
    },

    // 媒体查询
    '@media (max-width: 879px)': {
      '&[sidebar-visible="false"]': {
        'boxShadow': 'none',

        '& button': {
          opacity: 0,
        },
      },

      '[dir="ltr"] &': {
        left: 0,
        borderRight: '1px solid',
      },

      '[dir="rtl"] &': {
        right: 0,
        borderLeft: '1px solid',
      },

      '&': {
        'position': 'absolute',
        'width': '100%',
        'transition': 'var(--slide-transition)',

        '&.hide_sidebar': {
          display: 'none',
        },
      },

      '[dir] &': {
        border: 'transparent',
      },

      '[sidebar-visible="false"]': {
        '[dir="ltr"] &': {
          transform: 'translate(-200%)',
        },
        '[dir="rtl"] &': {
          transform: 'translate(200%)',
        },
      },
    },
  },
}));
