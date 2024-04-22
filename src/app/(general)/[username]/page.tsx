import { TServerPageProps } from "@/types/types";
import BackNav from "@/own-components/layout/backNav";
import ProfileCard from "@/own-components/backoffice/profile/profileCard";
import ProfileGalery from "@/own-components/backoffice/profile/profileGalery";
import Block from "@/own-components/layout/block";
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
