import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex items-center flex-col justify-center">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 info-text max-w-sm text-center">{feedback}</p>
      <div className="flex mt-3 justify-center items-center gap-2.5">
        <img src={star} width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-bold font-palanquin text-3xl">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
