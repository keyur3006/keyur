import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const backgroundImages = [
    "https://media.istockphoto.com/id/1457889029/cs/fotografie/skupina-potravin-s-vysok%C3%BDm-obsahem-vl%C3%A1kniny-uspo%C5%99%C3%A1dan%C3%A1-vedle-sebe.jpg?s=612x612&w=0&k=20&c=0pf_AdmkgUqCGmtZ2uySGzcii5w61iUI72lBzMjl0UU=",
    "https://media.istockphoto.com/id/831606480/cs/fotografie/studen%C3%A9-kompoty-ve-velk%C3%BDch-sklen%C4%9Bn%C3%BDch-n%C3%A1dob%C3%A1ch-letn%C3%AD-ovocn%C3%A9-n%C3%A1poje-ve-sklen%C4%9Bn%C3%BDch-d%C5%BEb%C3%A1nech.jpg?s=612x612&w=0&k=20&c=QMZ0RMmXIhTuHuELgwQd6qg_hXe2rK2KX3PdKXxU7CY=",
     "https://media.istockphoto.com/id/537228258/cs/fotografie/sklenice-zednick%C3%A9-sklenice-dom%C3%A1c%C3%AD-limon%C3%A1dy-na-rustik%C3%A1ln%C3%ADm-d%C5%99ev%C4%9B.jpg?s=612x612&w=0&k=20&c=m8yBeLjqIOdaozy4mtvY2OvzQUTwiToa8BhGjQt-JhY=",
"https://media.istockphoto.com/id/1217105017/cs/fotografie/ru%C4%8Dn%C4%9B-nal%C3%A9v%C3%A1-masala-%C4%8Daj-z-%C4%8Dajov%C3%A9-konvice-do-sklenice.jpg?s=612x612&w=0&k=20&c=SNndtyLN6qD6mdFfLjux-UQq3YiCfHwVeXsJjLdF27g=",
"https://media.istockphoto.com/id/1316772839/cs/fotografie/rustik%C3%A1ln%C3%AD-ru%C4%8Dn%C4%9B-vyr%C3%A1b%C4%9Bn%C3%BD-hamburger-na-d%C5%99ev%C4%9Bn%C3%A9m-stole.jpg?s=612x612&w=0&k=20&c=ZXjv4a7tzyH_roFhNN-azrTrRvtT3ZDc6qEZ8owmmBM=",
"https://media.istockphoto.com/id/1442417585/cs/fotografie/osoba-kter%C3%A1-dost%C3%A1v%C3%A1-kus-s%C3%BDrov%C3%A9-pepperoni-pizzy.jpg?s=612x612&w=0&k=20&c=HBI6aymv7HLGb6v0erQUpmx7vgoHcEQiQvIbpnekNLA=",
"https://media.istockphoto.com/id/1205482399/cs/fotografie/tradi%C4%8Dn%C3%AD-jihoindick%C3%A9-ob%C4%8Derstven%C3%AD-dosa-idli-medu-wada-na-ban%C3%A1nov%C3%A9m-listu.jpg?s=612x612&w=0&k=20&c=ks3KiLTKSz22Czewl5kNoejIvximdRexCPdNYEG25fE=",
"https://media.istockphoto.com/id/516329534/cs/fotografie/vzt%C3%A1hnout-na-n%C4%9Bkoho-ruku.jpg?s=612x612&w=0&k=20&c=UlTj_dujRYZjRs9wygkD3INg4bwcXcKhBsffBknzaPI=",
];
const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);

  const handleExplore = () => {
    navigate("/home");
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-center px-4 transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImages[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" bg-opacity-50 p-8 rounded-xl">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/54bc316094eb330e0bda616cecb3e12b733bac38?apiKey=b59f74ae8c9444f28ee33eff06842d33"
          alt="Logo"
          className="w-24 h-24 mb-6 animate-fade-in-up mx-auto"
        />
        <h1 className="text-5xl text-white font-bold mb-4 animate-fade-in-up">
          Welcome to The Recipe Room
        </h1>
        <p className="text-xl text-white mb-8 animate-fade-in-up">
          Discover mouth-watering recipes from around the world.
        </p>
        <button
          onClick={handleExplore}
          className="bg-white text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-200 transition animate-fade-in-up"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
