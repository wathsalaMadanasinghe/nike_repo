const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 gap-2 border rounded-full bg-coral-red text-white font-montserrat text-lg leading-none border-coral-red ">
      {label}
      <img
        src={iconURL}
        alt="arroe right icon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
