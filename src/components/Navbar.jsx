const Navbar = () => {
  return (
    <header className="bg-white w-ful">
      <nav
        aria-label="Global"
        className="mx-auto flex justify-between items-center px-40 h-20"
      >
        <div className="flex px-10">
          <a href="#">
            <img
              src="https://images.ctfassets.net/v3n26e09qg2r/7CSyedyArzTd5GP9LiuL78/f5a303f777ee3691a8ddfd5d36a7d591/headspace-logo.svg"
              className="w-auto h-8"
              alt="Headspace_logo_svg"
            ></img>
          </a>
        </div>

        <div className="flex items-center px-6">
          <ul className="flex h-20 space-x-8">
            <li className="flex items-center">
              <a href="https://www.headspace.com/articles?origin=navigation">
                Articles & Resources
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://www.headspace.com/meditation?origin=navigation">
                Meditation
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://www.headspace.com/sleep?origin=navigation">
                Sleep
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://www.headspace.com/mindfulness?origin=navigation">
                Mindfulness
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://www.headspace.com/mental-health?origin=navigation">
                Mental Health
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center font-light px-6">
          <ul className="flex h-20 space-x-6">
            <li className="flex items-center">
              <a href="https://www.headspace.com/subscriptions?origin=navigation">
                Plans
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://organizations.headspace.com/?origin=navigation">
                For business
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://www.headspace.com/about-us?origin=navigation">
                About
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://help.headspace.com/hc/en-us?origin=navigation">
                Help
              </a>
            </li>
            <li className="flex items-center">
              <a href="https://www.headspace.com/login?origin=navigation">
                Log in
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center px-6">
          <a href="https://checkout.headspace.com/checkout?voucherCode=B2C14DANNUAL2022&origin=navigation">
            <button type="button" className="bg-blue-600 hover:bg-blue-800 text-white font-bold rounded-full px-6 py-3">
              Try for free
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
