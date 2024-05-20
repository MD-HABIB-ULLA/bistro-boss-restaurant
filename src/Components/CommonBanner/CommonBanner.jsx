import { Parallax } from "react-parallax";

const CommonBanner = ({ name, img, des }) => {
  return (
    <div>
      <Parallax blur={{ min: -15, max: 15 }} bgImage={img} strength={-200}>
        <div className="bg-no-repeat bg-cover bg-center pt-40 pb-20 md:px-40 px-10 mb-10 mt-10">
          <div className="cinzel text-center text-white py-20 bg-black h-full bg-opacity-50 flex items-center justify-center p-4 rounded">
            <div className="space-y-3">
              <p className="md:text-6xl text-4xl font-semibold">{name}</p>
              <p className="text-xl">{des}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CommonBanner;
