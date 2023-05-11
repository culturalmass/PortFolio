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
  bSContainer: "flex flex-col justify-center ml-[1%]",
  bSTitle:
    "text-[2.0rem] ml-[1.5rem] rounded-s w-fit text-white border-[0.15rem] bg-[#52504F] border-gray-500 cursor-default z-10",
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
    "absolute right-[5%] opacity-[0.35] drop-shadow-[0px_0px_15px_rgba(196,196,196,0.7)]",

  //Skills Section
  sSWrapper: "h-screen font-retro pt-[1rem] cursor-default justify-center",
  sSContainer: "h-[40rem] w-[75rem] ml-[7rem] mt-[2.5rem] rounded-lg bg-black",
  sSBox: "flex flex-col items-center justify-center h-screen",
  sSTitle:
    "flex justify-center ml-[2rem] text-[4rem] pt-[2.5rem] mb-[2rem] text-white",
  sSMargin: "ml-[7rem]",
  sSBtnWrapper: "flex gap-[12rem] ml-[2rem] mt-[0rem]",
  sSBtnLeft: "relative flex items-center left-[25%] -ml-[25%] mr-[5%]",
  sSBtnRight: "relative flex items-center right-[16%]",

  //Projects Section
  pSWrapper: "h-screen font-retro pt-[6rem] text-center justify-center",
  pSBox: "flex flex-col items-center justify-center mt-[10%]",
  pSTittle: "flex justify-center ml-[2rem] text-[4rem] text-white",
  flexCenter: "flex items-center justify-center",
  projectsWrapper: "grid grid-cols-3 gap-x-[1%] items-center justify-center",
  pSBgCard:
    "w-[28rem] h-[17rem] p-2 glass-morphism m-4 rounded-lg cursor-pointer project-card",
  projectsCardImg: "w-full h-full object-cover rounded-md",
  info: "info",
  projectsCardText: "font-retro font-semibold text-xl text-white",
  pSBtnWrapper: "flex items-center justify-center gap-x-[45%]",
  pSBtn: "text-[4rem] cursor-pointer",
  pSHidden: "relative hidden",
  pSBtnGeneral: "relative flex items-center",

  //Footer Section
  fSWrapper:
    "flex w-screen -mt-[2rem] space-x-[15rem] justify-center items-center text-[18px] font-retro",
  fSBtn: "text-[42px]",
};
export default styles;
