import ExtraServicesCard from "@/components/molecules/ExrtaServicesCard";
import "./style.css";
import { EXTRA_SERVICES_DATA } from "@/mock/ExtraServices";

const ExtraServices = () => {
  return (
    <div className="extra__services">
      <h2>Our extra services</h2>
      <div className="extra__cards">
        {EXTRA_SERVICES_DATA.map(({ id, src, alt, title, icon }) => (
          <ExtraServicesCard key={id} imageSrc={src} imageAlt={alt} title={title} iconSrc={icon} />
        ))}
      </div>
    </div>
  );
};

export default ExtraServices;
