import { Title } from "@/components/architect/title";
import PortofolioForm from "@/components/form/portofolio";
const Portofolio = () => {
  return (
    <div>
      <Title>Portofolio</Title>
      <PortofolioForm method="INSERT" />
    </div>
  );
};

export default Portofolio;
