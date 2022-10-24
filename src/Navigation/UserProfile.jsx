import React from "react";
import UserProfileImage from "../Components/Card/UserProfile/UserProfileImage";
import Wrapper from "../Components/Wrapper/Wrapper";
import Navbar2 from "../Components/Navbar/Navbar2";
function UserProfile() {
  return (
    <Wrapper>
      <Navbar2 pageName="Edit Profle" />
      <UserProfileImage />
    </Wrapper>
  );
}

export default UserProfile;
