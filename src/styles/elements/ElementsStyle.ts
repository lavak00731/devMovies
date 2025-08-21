const ElementStyle = {
    header: "shadow-xs shadow-neutral-700 py-2 relative z-2",    
    headerInner: "bg-zinc flex justify-center items-center" ,
    mainNav: "bg-zinc-50 absolute top-20 md:top-26 lg:top:32 right-[15%] w-full max-w-[250px] p-2 border-2 border-neutral-700 rounded shadow-[6px_17px_13px_-11px_#2E3532] motion-safe:animate-wiggle",
    logo: "block max-w-24 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-sky-800 cursor-pointer md:max-w-36",
    btn: "block rounded text-center w-full bg-sky-800 text-base px-2 py-1 text-zinc-50 border-2 border-sky-800 font-bold .libertinus-sans-regular hover:bg-zinc-50 hover:text-sky-800 focus-visible:bg-zinc-50 focus-visible:text-sky-800 libertinus-sans-regular",
    menuBtn: "bg-zinc-800 p-2 rounded text-green-400 text-base absolute top-[50%] translate-y-[-50%] right-[15%] focus-visible:bg-green-400 focus-visible:text-zinc-800",
    menuGrid: "flex flex-col flex-wrap gap-4 items-end",
    paragraph: "text-base text-zinc-800 mb-2 [&:not(:last-child)]:mb-2 libertinus-sans-regular",
    footerPara: "text-lg text-center text-zinc-800 mb-2 [&:not(:last-child)]:mb-2 libertinus-sans-bold"
}
export default ElementStyle;