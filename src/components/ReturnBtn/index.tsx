'use client';

import { ActionIcon } from '@lobehub/ui';
import { Flex } from 'antd';
import { createStyles } from 'antd-style';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export const useStyles = createStyles(() => ({
  returnBtn: {
    padding: '0 16px',
    height: '64px',
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 9,
    overflowY: 'auto',
  },
  btn: {
    borderRadius: '12px !important',
    svg: {
      width: 25,
      height: 25,
    },
  },
  title: {
    flex: '1 1',
    alignItems: 'center',
    display: 'flex',
    fontWeight: 590,
    fontSize: 16,
    flexDirection: 'column',
    marginLeft: '-40px',
  },
  leftTitle: {
    fontWeight: 590,
    fontSize: 16,
  },
  layout: {
    width: '100%'
  }
}));

interface ReturnBtnProps {
  to?: string;
  title?: string;
  isLeftTitle?: boolean;
  extra?: React.ReactNode;
}

const ReturnBtn = React.memo<ReturnBtnProps>(props => {
  const { to, extra, isLeftTitle } = props;
  const { styles } = useStyles();
  return (
    <Flex align={'center'} className={styles.returnBtn}>
      <Link href={to || '/chat'}>
        <ActionIcon className={styles.btn} icon={ChevronLeft} />
      </Link>
      {isLeftTitle 
      ? <Flex align="center" className={styles.layout} justify='space-between'> 
          <div className={styles.leftTitle}>{props.title}</div>
          {extra}
        </Flex> 
        : <div className={styles.title}>{props.title}</div>
      }
    </Flex>
  );
});

export default ReturnBtn;
