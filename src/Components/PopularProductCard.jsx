import { star } from "../assets/icons";
const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex justify-start mt-8 gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-slate-gray leading-normal text-xl">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-palanquin leading-normal font-semibold">
        {name}
      </h3>
      <p className="font-semibold font-montserrat text-coral-red leading-normal text-xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
