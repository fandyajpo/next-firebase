import TopNav from "@/components/layout/topnav";
import ProfileCard from "@/components/backoffice/profile/profileCard";
import ProfileGalery from "@/components/backoffice/profile/profileGalery";
import Block from "@/components/layout/block";
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
