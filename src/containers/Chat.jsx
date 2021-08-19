import { Grid } from '@material-ui/core';

import useChat from '../hooks/useChat';

import UserPanel from '../components/UserPanel';
import ChatBoard from '../components/ChatBoard';

const Chat = ({ onLoggedOut }) => {
  const [socketRef, userRestrictions, onlineUsers, allUsers, messages] = useChat(onLoggedOut);

  const handleMessage = (text) => {
    socketRef.current.emit('s:message', text);
  };

  const handleToggleMute = (userId, isMuted) => {
    if (isMuted) {
      socketRef.current.emit('s:unmuteUser', userId);
    } else {
      socketRef.current.emit('s:muteUser', userId);
    }
  };

  const handleToggleBlock = (userId, isBlocked) => {
    if (isBlocked) {
      socketRef.current.emit('s:unblockUser', userId);
    } else {
      socketRef.current.emit('s:blockUser', userId);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <UserPanel
          isAdmin={userRestrictions.isAdmin}
          onlineUsers={onlineUsers}
          allUsers={allUsers}
          onToggleMute={handleToggleMute}
          onToggleBlock={handleToggleBlock}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <ChatBoard
          messages={messages}
          inputDisabled={userRestrictions.isMuted}
          onMessage={handleMessage}
        />
      </Grid>
    </Grid>
  );
};

export default Chat;
