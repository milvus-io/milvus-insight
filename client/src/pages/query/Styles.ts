import { makeStyles, Theme } from '@material-ui/core';

export const getQueryStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  emptyCard: {
    height: '100%',
    borderRadius: theme.spacing(0, 0, 0.5, 0.5),
    boxShadow: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: theme.spacing(1, 2),
    gap: theme.spacing(2),
    borderRadius: theme.spacing(0.5, 0.5, 0, 0),

    '& .left': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 'calc(100% - 206px)',
      padding: theme.spacing(0, 0, 0, 2),
      fontSize: theme.spacing(2),
      backgroundColor: '#F9F9F9',
    },

    '& .right': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: theme.spacing(2),
    },
  },
  vectorTableCell: {
    '& >div': {
      maxWidth: theme.spacing(50),
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyBtn: {},
}));