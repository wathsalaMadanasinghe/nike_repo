const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center px-7 py-4 gap-2 border rounded-full font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${borderColor} ${textColor}`
        : "bg-coral-red text-white  border-coral-red"
    } ${fullWidth && "w-full"}"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arroe right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
