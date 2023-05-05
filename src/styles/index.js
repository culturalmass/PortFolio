const styles = {
  //MainPage
  mPBg: "bg-[#131519]",

  //Custom Component Custom-Circle-Progress
  cCPWrapper: "mt-[3rem] w-[100px] rounded-full h-[100px] scale-[1.5]",
  cCPNumber: "sticky -ml-[6rem] text-[2.4rem] mt-[2.5rem]",
  cCPInfo: "sticky mt-[16rem] text-[2.4rem]",

  //Navbar Section
  nBWrapper:
    "fixed flex flex-auto h-[3rem] w-screen justify-center items-center space-x-[5rem] text-[24px] font-retro bg-gradient-to-r from-neutral-600 to-[#131519] z-20",
  nBImg: "object-contain h-[40px] mr-[14rem]",
  nBLinkWrapper: "drop-shadow-[3px_2px_3px_rgba(0,0,0,0.7)]",
  nBBtnBottom: "fixed bottom-[2%] right-[2%] text-[3rem] cursor-pointer",

  //Banner Section
  bSWrapper: "h-screen font-retro pt-[13rem]",
  bSTitle:
    "text-[2.0rem] ml-[1.5rem] rounded-s w-fit text-white border-[0.15rem] bg-[#52504F] border-gray-500 cursor-default",
  bSPromt:
    "flex items-center ml-[2rem] text-[3rem] mt-[2rem] mb-[1rem] text-white cursor-default",
  bSInfo: "ml-[1rem] z-10",
  bSPulse: "animate-pulse text-[4rem] z-10",
  bSLTittle:
    "ml-[1.5rem] text-[1.5rem] border-b-2 w-[15rem] mb-[0.8rem] cursor-default",
  bSInfoText: "ml-[1.5rem] cursor-default",
  bSConnect: "ml-[1.5rem] text-[2rem] mt-[1.5rem] flex items-center",
  bSBtn: "mt-[0.2rem] ml-[1rem] text-[3rem]",
  bSVideoWrapper:
    "absolute left-[38rem] top-[10rem] opacity-[0.35] drop-shadow-[0px_0px_15px_rgba(196,196,196,0.7)]",

  //Skills Section
  sSWrapper: "h-screen font-retro pt-[4rem] cursor-default",
  sSContainer: "h-[40rem] w-[75rem] ml-[7rem] mt-[2.5rem] rounded-lg bg-black",
  sSTitle:
    "flex justify-center ml-[2rem] text-[4rem] pt-[2.5rem] mb-[2rem] text-white",
  sSMargin: "ml-[7rem]",
  sSBtnWrapper: "flex gap-[12rem] ml-[2rem] mt-[0rem]",
  sSBtnLeft: "absolute left-[7rem] top-[150vh] text-[4rem] cursor-pointer",
  sSBtnRight: "absolute left-[78rem] top-[150vh] text-[4rem] cursor-pointer",

  //Projects Section
  pSWrapper: "h-screen font-retro pt-[2rem] text-center",
  pSTittle: "flex justify-center ml-[2rem] text-[4rem] pt-[3.5rem] text-white",
  flexCenter: "flex items-center justify-center",
  projectsWrapper:
    "grid grid-cols-3 gap-x-[8rem] mt-[1rem] ml-[2rem] max-w-[1200px]",
  pSBgCard:
    "w-[27rem] h-[15rem] p-2 glass-morphism m-4 rounded-lg cursor-pointer project-card",
  projectsCardImg: "w-full h-full object-cover rounded-md",
  info: "info",
  projectsCardText: "font-retro font-semibold text-xl text-white",
  pSHidden: "absolute hidden",
  pSBtnLeft: "absolute left-[0.5rem] top-[258vh] text-[3.5rem] cursor-pointer",
  pSBtnRight:
    "absolute left-[84.5rem] top-[258vh] text-[3.5rem] cursor-pointer",

  //Footer Section
  fSWrapper:
    "flex w-screen -mt-[2rem] space-x-[15rem] justify-center items-center text-[18px] font-retro",
  fSBtn: "text-[42px]",
};
export default styles;
