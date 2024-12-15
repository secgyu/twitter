import { authService } from "@/fbase";

const Profile = () => {
  const onLogOutClick = () => authService.signOut();
  return (
    <div>
      <button onClick={onLogOutClick}>Log Out</button>
    </div>
  );
};

export default Profile;
