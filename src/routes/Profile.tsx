import { authService } from "@/fbase";
import { User } from "@/models/user";
import { updateProfile } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  userObj: User;
  refreshUser: () => void;
}

const Profile = ({ userObj, refreshUser }: Props) => {
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const onLogOutClick = () => authService.signOut();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = authService.currentUser; // 현재 사용자 가져오기
    if (user && user.displayName !== newDisplayName) {
      await updateProfile(user, { displayName: newDisplayName }); // Firebase v9
      console.log("Display name updated to:", newDisplayName);
      refreshUser();
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="profileForm">
        <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} autoFocus className="formInput" />
        <input type="submit" value="Update Profile" className="formBtn" style={{ marginTop: 10 }} />
      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>
  );
};

export default Profile;
