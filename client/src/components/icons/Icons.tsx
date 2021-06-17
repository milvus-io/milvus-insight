import React from 'react';
import { IconsType } from './Types';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ClearIcon from '@material-ui/icons/Clear';
import ReorderIcon from '@material-ui/icons/Reorder';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as MilvusIcon } from '../../assets/icons/milvus.svg';
import { ReactComponent as OverviewIcon } from '../../assets/icons/overview.svg';
import { ReactComponent as CollectionIcon } from '../../assets/icons/collecion.svg';
import { ReactComponent as ConsoleIcon } from '../../assets/icons/console.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';
import { ReactComponent as ReleaseIcon } from '../../assets/icons/release.svg';
import { ReactComponent as LoadIcon } from '../../assets/icons/load.svg';

const icons: { [x in IconsType]: (props?: any) => React.ReactElement } = {
  search: (props = {}) => <SearchIcon {...props} />,
  add: (props = {}) => <AddIcon {...props} />,
  delete: (props = {}) => <DeleteIcon {...props} />,
  list: (props = {}) => <ReorderIcon {...props} />,
  copy: (props = {}) => <FileCopyIcon {...props} />,
  visible: (props = {}) => <Visibility {...props} />,
  invisible: (props = {}) => <VisibilityOff {...props} />,
  error: (props = {}) => <CancelIcon {...props} />,
  clear: (props = {}) => <ClearIcon {...props} />,
  more: (props = {}) => <MoreVertIcon {...props} />,
  app: (props = {}) => <AppsIcon {...props} />,
  success: (props = {}) => <CheckCircleIcon {...props} />,
  expandLess: (props = {}) => <ExpandLess {...props} />,
  expandMore: (props = {}) => <ExpandMore {...props} />,
  back: (props = {}) => <ArrowBackIosIcon {...props} />,
  logout: (props = {}) => <ExitToAppIcon {...props} />,
  rightArrow: (props = {}) => <ArrowForwardIosIcon {...props} />,
  remove: (props = {}) => <RemoveCircleOutlineIcon {...props} />,

  milvus: (props = {}) => (
    <SvgIcon viewBox="0 0 44 31" component={MilvusIcon} {...props} />
  ),
  navOverview: (props = {}) => (
    <SvgIcon viewBox="0 0 20 20" component={OverviewIcon} {...props} />
  ),
  navCollection: (props = {}) => (
    <SvgIcon viewBox="0 0 20 20" component={CollectionIcon} {...props} />
  ),
  navConsole: (props = {}) => (
    <SvgIcon viewBox="0 0 20 20" component={ConsoleIcon} {...props} />
  ),
  info: (props = {}) => (
    <SvgIcon viewBox="0 0 16 16" component={InfoIcon} {...props} />
  ),
  release: (props = {}) => (
    <SvgIcon viewBox="0 0 16 16" component={ReleaseIcon} {...props} />
  ),
  load: (props = {}) => (
    <SvgIcon viewBox="0 0 24 24" component={LoadIcon} {...props} />
  ),
};

export default icons;