import { useState } from 'react';
import { Box, IconButton, Avatar } from '@mui/material';
import Iconify from 'components/iconify';
import account from '_mock/account';
import Logo from 'components/logo';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useTheme } from 'contexts/ThemeContext';

import { RootStyle, ToolbarStyle } from './styled';

const Navbar = ({ onOpenSidebar }) => {
  // const [isDarkMode, setDarkMode] = useState(false);
  const { isDarkMode, darkModeToggle } = useTheme();

  return (
    <RootStyle>
      <ToolbarStyle>
        {/* <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
        <Iconify icon="eva:menu-2-fill" />
      </IconButton> */}

        <Logo
          src={isDarkMode ? '/static/standard-push-logo-white.svg' : '/static/standard-push-logo-dark.svg'}
          sx={{ width: 140, height: 120 }}
        />

        <Box sx={{ flexGrow: 1 }} />

        <DarkModeSwitch
          style={{ margin: '0 1rem' }}
          checked={isDarkMode}
          onChange={darkModeToggle}
          size={28}
          sunColor="#494D5F"
          moonColor="#787E99"
        />

        {/* <IconButton
        sx={{
          p: 0,
        }}
      >

        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton> */}
      </ToolbarStyle>
    </RootStyle>
  );
};

export default Navbar;
