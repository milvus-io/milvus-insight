import React, { useState, FC } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { CopyButtonProps } from './Types';
import icons from '../icons/Icons';
import CustomIconButton from '../customButton/CustomIconButton';

const CopyIcon = icons.copyExpression;

const CopyButton: FC<CopyButtonProps> = props => {
  const { label, icon, className, value, ...others } = props;
  const classes = useStyles();
  const [tooltipTitle, setTooltipTitle] = useState('Copy');

  const handleClick = (v: string) => {
    setTooltipTitle('Copied!');
    navigator.clipboard.writeText(v);
    setTimeout(() => {
      setTooltipTitle('Copy');
    }, 1000);
  };

  return (
    <CustomIconButton
      tooltip={tooltipTitle}
      aria-label={label}
      className={`${classes.button} ${className}`}
      onClick={() => handleClick(value || '')}
      {...others}
    >
      {icon || <CopyIcon style={{ color: 'transparent' }} />}
    </CustomIconButton>
  );
};

CopyButton.defaultProps = {
  label: 'copy button',
  value: '',
};

CopyButton.displayName = 'CopyButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    button: {},
    tooltip: {},
  })
);

export default CopyButton;