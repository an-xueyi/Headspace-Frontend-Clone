const Banner = () => {
  return (
    <a
      href="https://checkout.headspace.com/checkout?voucherCode=B2C14DANNUAL2022&origin=banner"
      className="flex justify-center items-center bg-[#4CBBFF] h-14 w-full"
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-white text-lg font-light text-center underline">
        {" "}
        Get 14 days free now
      </span>
      <span className="text-white ml-2">→</span>
    </a>
  );
};

export default Banner;
