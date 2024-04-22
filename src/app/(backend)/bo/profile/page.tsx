import TopNav from "@/own-components/layout/topnav";
import ProfileCard from "@/own-components/backoffice/profile/profileCard";
import ProfileGalery from "@/own-components/backoffice/profile/profileGalery";
import Block from "@/own-components/layout/block";
const Profile = () => {
  return (
    <>
      <TopNav title="Your Profile" description="This is your cool profile" />
      <ProfileCard />
      <Block className="h-10" />
      <ProfileGalery />
    </>
  );
};

export default Profile;
