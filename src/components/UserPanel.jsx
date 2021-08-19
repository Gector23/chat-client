import { useState } from 'react';
import {
  Paper,
  Tabs,
  Tab,
} from '@material-ui/core';

import UsersList from './UsersList';

const UserPanel = ({
  isAdmin,
  onlineUsers,
  allUsers,
  onToggleMute,
  onToggleBlock,
}) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, tab) => {
    setCurrentTab(tab);
  };

  return (
    <Paper>
      <Tabs
        onChange={handleTabChange}
        value={currentTab}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="ONLINE" />
        {isAdmin && <Tab label="ALL" />}
      </Tabs>
      {currentTab === 0 ? (
        <UsersList users={onlineUsers} />
      ) : (
        <UsersList
          users={allUsers}
          withControls={true}
          onToggleMute={onToggleMute}
          onToggleBlock={onToggleBlock}
        />
      )}
    </Paper>
  );
};

export default UserPanel;
