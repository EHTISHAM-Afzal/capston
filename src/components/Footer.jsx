const Footer = () => {
  return (
    <div className="grids col-span-full bg-slate-800 py-4">
    <footer className=" grids-section-width row-satart-3  h-40 bg-slate-800 py-4 px-4  flex items-center justify-between flex-row ">
      <img
        className=" h-full   object-cover  border-2 border-white  rounded-md"
        src="../../profile.jpg"
        alt="logo"
      />
      <div className="  h-full flex flex-row justify-center gap-[12vw] lg:pr-12">
        <ul>
          <li> <a href="">link 1</a></li>
          <li> <a href="">link 1</a></li>
          <li> <a href="">link 1</a></li>
          <li> <a href="">link 1</a></li>
          <li> <a href="">link 1</a></li>
          </ul>
        <ul>
          <li>link 2</li>
          <li>link 2</li>
          <li>link 2</li>
        </ul>
        <ul>
          <li>link 3</li>
          <li>link 3</li>
          <li>link 3</li>
        </ul>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
