const styles = {
  //MainPage
  mPBg: "bg-[#131519] w-screen overflow-x-hidden",

  //Custom Component Custom-Circle-Progress
  cCPContainer: "flex flex-col mt-12 items-center gap-y-6 md:gap-y-12 ",
  cCPProgressCircle: "flex items-center",
  cCPWrapper:
    "w-[55px] md:w-[100px] rounded-full h-[55px] md:h-[100px] scale-[1.25] md:scale-[1.5]",
  cCPNumber: "md:text-[2.4rem] -ml-12 md:-ml-24 z-10",
  cCPInfo: "md:text-[2.4rem] pb-2",

  //Navbar Section
  nBWrapper:
    "flex h-[3rem] md:max-w-[87.5rem] justify-evenly items-center text-[24px] rounded-b-md font-mcten bg-gradient-to-r from-neutral-600 to-[#131519] z-20",
  nBImg: "object-contain h-[42px] w-[42px] mr-[14rem] rounded-full",
  nBLinkWrapper: "hidden md:flex md:drop-shadow-[3px_2px_3px_rgba(0,0,0,0.7)]",
  nBBtnBottom:
    "hidden md:flex fixed bottom-[2%] right-[2%] text-[3rem] cursor-pointer z-50",

  //Banner Section
  bSWrapper:
    "min-h-[18rem] md:h-screen max-w-[25rem] md:max-w-[87.5rem] font-mcten pt-[2rem] md:pt-[10rem]",
  bSContainer: "flex flex-col justify-center ml-[1%]",
  bSTitle: "md:text-[2rem] ml-[1.5rem] w-fit z-10",
  bSPromt:
    "flex items-center md:ml-[2rem] text-[0.9rem] md:text-[3rem] mt-[2rem] mb-[1rem] text-white cursor-default z-10",
  bSInfo: "ml-[0.5rem] md:ml-[1rem] z-10",
  bSPulse: "animate-pulse text-[1.5rem] md:text-[4rem] z-10",
  bSLTittle:
    "hidden md:flex ml-[1.5rem] md:text-[1.5rem] border-b-2 w-[15rem] mb-[0.8rem] cursor-default",
  bSInfoText: "hidden text-xl md:flex ml-[1.5rem] cursor-default z-10",
  bSConnect:
    "z-10 md:z-0 ml-[1.5rem] md:text-[2rem] mt-[1.5rem] flex items-center border-2 bg-gray-900 w-fit pl-2 md:hover:traslate-transform md:hover:-translate-y-1 md:hover:translate-x-1 md:hover:border-b-4 md:hover:border-l-4 md:hover:opacity-50 rounded-r-lg",
  bSBtn: "mt-[0.2rem] ml-[1rem] md:text-[3rem]",
  bSVideoWrapper:
    "absolute md:ml-[35rem] opacity-[0.35] drop-shadow-[0px_0px_15px_rgba(196,196,196,0.7)]",

  //Skills Section
  sSWrapper:
    "md:h-screen font-mcten md:pt-[1rem] cursor-default justify-center",
  sSContainer:
    "md:h-[40rem] w-screen md:w-[75rem] md:ml-[3rem] mt-[2.5rem] rounded-lg bg-black",
  sSBox: "flex flex-col items-center justify-center md:h-screen",
  sSTitle:
    "flex justify-center ml-[2rem] text-[1.5rem] md:text-[4rem] pt-[2.5rem] md:mb-[2rem] text-white",
  sSMargin: "text-[0.7rem] md:text-[1rem] ml-[1rem] md:ml-[7rem]",
  sSBtnWrapper:
    "flex flex-row gap-[1.2rem] justify-center md:gap-[5.5rem] md:mt-[5rem] ",
  sSBtnLeft: "flex items-center",
  sSBtnRight: "flex items-center",

  //Projects Section
  pSWrapper: "md:h-screen font-mcten pt-[6rem] text-center justify-center",
  pSBox: "flex flex-col items-center justify-center mt-[10%]",
  pSTittle:
    "flex justify-center ml-[2rem] text-[1.4rem] md:text-[4rem] text-white",
  flexCenter: "flex items-center justify-center",
  projectsWrapper:
    "grid overflow-x-auto overflow-y-auto max-w-screen h-[16rem] md:h-[19rem] md:grid md:grid-cols-3 md:gap-x-[1%] md:overflow-x-hidden md:overflow-y-hidden items-center justify-center",
  pSBgCard:
    "w-[23rem] md:w-[28rem] md:h-[17rem] p-2 glass-morphism m-4 rounded-lg cursor-pointer project-card",
  projectsCardImg: "w-full h-full object-cover rounded-md",
  info: "info",
  projectsCardText: "font-mcten font-semibold text-xl text-white",
  pSBtnWrapper: "hidden md:flex items-center justify-center gap-x-[45%]",
  pSBtn: "text-[1.5rem] md:text-[4rem] cursor-pointer",
  pSHidden: "text-black",
  pSBtnGeneral: "relative flex items-center",

  //Footer Section
  fSWrapper:
    "flex w-screen mt-[1rem] md:space-x-[15rem] justify-center items-center text-[0.7rem] md:text-[18px] font-mcten",
  fSBtn: "text-[2.5rem] md:flex md:text-[42px]",
  fSBtnGit: "text-[2.3rem] md:flex md:text-[38px]",
};
export default styles;
