import { authService } from "@/fbase";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const Profile = ({ userObj, refreshUser }) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => authService.signOut();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const user = authService.currentUser; // 현재 사용자 가져오기
    if (user && user.displayName !== newDisplayName) {
      await updateProfile(user, { displayName: newDisplayName }); // Firebase v9
      console.log("Display name updated to:", newDisplayName);
      refreshUser();
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  );
};

export default Profile;
