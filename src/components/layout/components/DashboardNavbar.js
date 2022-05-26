import { Box, Stack, IconButton } from '@mui/material';
import Iconify from 'components/iconify';
import { AccountPopover,  NotificationsPopover, Searchbar } from './index';

import { RootStyle, ToolbarStyle } from './styled';

const Navbar = ({ onOpenSidebar }) => (
  <RootStyle>
    <ToolbarStyle>
      <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
        <Iconify icon="eva:menu-2-fill" />
      </IconButton>

      <Searchbar />
      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <NotificationsPopover />
        <AccountPopover />
      </Stack>
    </ToolbarStyle>
  </RootStyle>
);

export default Navbar;
