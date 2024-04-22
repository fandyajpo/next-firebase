import TopNav from "@/own-components/layout/topnav";
import ProfileGalery from "@/own-components/backoffice/profile/profileGalery";
import PortofolioForm from "@/own-components/form/portofolio";
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
