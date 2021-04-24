import React, { Fragment, useState, cloneElement, Children } from 'react';
import { Layout, AppBar } from 'react-admin';
import { MenuItemLink } from 'react-admin';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MyNotification from '../notification';
import { PROFILE_ENTITY } from '../../constants/entities';

const CustomUserMenu = (props) => {
  const { children, label, logout, translate, onMenuClick } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  if (!logout && !children) return null;

  const open = Boolean(anchorEl);

  const handleMenu = event => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <Fragment>
      <Tooltip title="Profile">
        <Button
          arial-label={label && translate(label, { _: label })}
          aria-owns={open ? 'menu-appbar' : null}
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </Button>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        {Children.map(children, menuItem =>
          cloneElement(menuItem, { onClick: handleClose })
        )}
        {logout}
        <MenuItemLink
          to={`/${PROFILE_ENTITY}`}
          primaryText="Profile"
          leftIcon={<AccountCircle />}
          onClick={onMenuClick}
        />
      </Menu>
    </Fragment>
  )
}

const CustomAppBar = (props) => <AppBar {...props} userMenu={<CustomUserMenu />} />;

const MyLayout = (props) => <Layout {...props} notification={MyNotification} appBar={CustomAppBar} />;

export default MyLayout;