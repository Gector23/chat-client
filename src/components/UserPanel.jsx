import { useState } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

import UsersList from "./UsersList";

const UserPanel = ({ isAdmin, onlineUsers, allUsers, onToggleMute, onToggleBlock }) => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, tab) => {
    setTab(tab);
  };

  return (
    <Paper>
      <Tabs onChange={handleTabChange} value={tab} indicatorColor="primary" textColor="primary" variant="fullWidth">
        <Tab label="ONLINE" />
        {isAdmin && (
          <Tab label="ALL" />
        )}
      </Tabs>
      {tab === 0 ? (
        <UsersList users={onlineUsers} />
      ) : (
        <UsersList users={allUsers} withControls={true} onToggleMute={onToggleMute} onToggleBlock={onToggleBlock} />
      )}
    </Paper>
  );
};

export default UserPanel;