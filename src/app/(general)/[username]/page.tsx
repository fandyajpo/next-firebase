import { TServerPageProps } from "@/types/types";
import BackNav from "@/components/layout/backNav";
import ProfileCard from "@/components/backoffice/profile/profileCard";
import ProfileGalery from "@/components/backoffice/profile/profileGalery";
import Block from "@/components/layout/block";
const UniqueIdentifier = (
  props: TServerPageProps<{ username: string }, {}>
) => {
  return (
    <>
      <BackNav />
      <Block className="h-4 border-b" />
      <ProfileCard />
      <Block className="h-6" />
      <ProfileGalery />
    </>
  );
};
export default UniqueIdentifier;
