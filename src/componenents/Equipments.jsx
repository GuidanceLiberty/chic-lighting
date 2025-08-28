import { FaLightbulb } from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";
import { BsLamp } from "react-icons/bs";

const EquipmentData = [
  {
    id: 1,
    title: "Smart Lighting",
    desc: "Control your lights with smart features for convenience and efficiency.",
    icon: <FaLightbulb />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Energy Solutions",
    desc: "Save power with advanced energy-efficient lighting systems.",
    link: "/",
    icon: <MdOutlineElectricBolt />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Decor Lamps",
    desc: "Add beauty and style to your space with our designer lamp collection.",
    link: "/",
    icon: <BsLamp />,
    delay: 0.9,
  },
];

const Equipments = () => {
  return (
    <div className="container pt-3 pt-md-0 pb-4" id="equipments">
      <div className="row g-4 align-items-stretch">
        {/* Intro text */}
        <div className="col-md-3 d-flex flex-column justify-content-center">
          <h1 className="fw-bold display-6 text-dark">What we offer for you</h1>
          <p className="text-secondary">
            Explore our wide range of lighting solutions tailored to your needs.
          </p>
        </div>

        {/* Cards */}
        {EquipmentData.map((item) => (
          <div key={item.id} className="col-md-3">
            <div className="card border-0 h-100 text-center p-4 bg-light shadow-sm custom-hover">
              <div className="fs-1 text-warning mb-3 glow-icon">{item.icon}</div>
              <h5 className="fw-semibold text-dark">{item.title}</h5>
              <p className="text-secondary">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipments;
