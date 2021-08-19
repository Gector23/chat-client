import { List, Tooltip, IconButton } from '@material-ui/core';
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';
import BlockIcon from '@material-ui/icons/Block';

import User from './User';

const UsersList = ({
  users,
  withControls = false,
  onToggleMute,
  onToggleBlock,
}) => (
  <List>
    {users.map((user) => {
      let userControls = null;

      if (withControls) {
        userControls = (
          <>
            <Tooltip title={user.isMuted ? 'unmute' : 'mute'} placement="top">
              <IconButton
                size="small"
                color={user.isMuted ? 'secondary' : 'default'}
                onClick={() => onToggleMute(user._id, user.isMuted)}
              >
                <SpeakerNotesOffIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={user.isMuted ? 'unblock' : 'block'} placement="top">
              <IconButton
                size="small"
                color={user.isBlocked ? 'secondary' : 'default'}
                onClick={() => onToggleBlock(user._id, user.isBlocked)}
              >
                <BlockIcon />
              </IconButton>
            </Tooltip>
          </>
        );
      }

      return <User key={user.login} user={user} controls={userControls} />;
    })}
  </List>
);

export default UsersList;
