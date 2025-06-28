const Footer = () => {
  return (
    <main className="h-fit md:h-[48vh] w-full bg-slate-900 p-10 flex flex-col gap-8">
      <div className="w-full">
        <p className="text-gray-300 text-base text-center md:text-left">
          PREMIER STUDIO
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row text-center md:text-left md:gap-20">
        <ul className="pb-5 md:pb-0">
          <li className="text-xs text-gray-300 font-light pb-3">SCHOOLS</li>
          <li className="text-xs text-gray-300 font-light">University</li>
          <li className="text-xs text-gray-300 font-light">Polytechnic</li>
        </ul>
        <ul className="pb-5 md:pb-0">
          <li className="text-xs text-gray-300 font-light pb-3">EXAMS</li>
          <li className="text-xs text-gray-300 font-light lowercase">JAMB</li>
          <li className="text-xs text-gray-300 font-light lowercase">WAEC</li>
          <li className="text-xs text-gray-300 font-light lowercase">NECO</li>
          <li className="text-xs text-gray-300 font-light lowercase">NABTEB</li>
          <li className="text-xs text-gray-300 font-light lowercase">JUPEB</li>
          <li className="text-xs text-gray-300 font-light lowercase">
            POSTUTME
          </li>
        </ul>
        <ul className="pb-5 md:pb-0">
          <li className="text-xs text-gray-300 font-light">Nysc</li>
          <li className="text-xs text-gray-300 font-light">Courses</li>
        </ul>
        <p className="text-xs text-gray-300 font-light pb-5 md:pb-0">Contact</p>
        <ul className="pb-5 md:pb-0">
          <li className="text-xs text-gray-300 font-light uppercase pb-3">
            Social media
          </li>
          <li className="text-xs text-gray-300 font-light">
            Follow us on social media to find out latest news and updates
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center border-t-[1px] border-slate-600 py-3">
        <p className="text-[0.65em] text-gray-300 font-light">
          © 2025 premier_studio. All rights reserved
        </p>
      </div>
    </main>
  );
};

export default Footer;
