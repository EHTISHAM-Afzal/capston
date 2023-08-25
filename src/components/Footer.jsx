


const Footer = () => {
  return (
    <footer className=" grids-section-width row-satart-3  bg-slate-800 py-4  flex items-center justify-center flex-row gap-[5vw] overflow-hidden">
      <img className="h-full w-24 ring-2 rounded-md" src="../../profile.jpg" alt="logo" />
      <div className="  flex flex-row justify-center gap-[5vw]">
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
  );
};

export default Footer;
