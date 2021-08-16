import { List, IconButton } from "@material-ui/core";
import SpeakerNotesOffIcon from '@material-ui/icons/SpeakerNotesOff';
import BlockIcon from '@material-ui/icons/Block';

import User from "./User";

const UsersList = ({ users, withControls = false, onToggleMute, onToggleBlock }) => {

  return (
    <List>
      {users.map(user => {
        let userControls = null;

        if (withControls) {
          userControls = (
            <>
              <IconButton
                size="small"
                color={user.isMuted ? "secondary" : "default"}
                onClick={() => onToggleMute(user.login, user.isMuted)}
              >
                <SpeakerNotesOffIcon />
              </IconButton>
              <IconButton
                size="small"
                color={user.isBlocked ? "secondary" : "default"}
                onClick={() => onToggleBlock(user.login, user.isBlocked)}
              >
                <BlockIcon />
              </IconButton>
            </>
          );
        }

        return <User key={user.login} user={user} controls={userControls} />;
      })}
    </List>
  );
};

export default UsersList;