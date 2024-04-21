import TopNav from "@/components/layout/topnav";
import ProfileGalery from "@/components/backoffice/profile/profileGalery";
import PortofolioForm from "@/components/form/portofolio";
const Portofolio = () => {
  return (
    <>
      <TopNav
        withAddNewButton
        title="Portofolio"
        description="Show us your cool stuff"
      />
      <PortofolioForm method="INSERT" />
    </>
  );
};

export default Portofolio;
