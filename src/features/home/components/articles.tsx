interface articlesProp {
  title: string;
  body: string;
  Img?: string;
}

import "../../assets/index.css";

const Articles: React.FC<articlesProp> = ({ title, body, Img }) => {
  return (
    <div className="px-5 md:px-3 h-fit flex flex-col">
      <div className="border-b-[1px] flex gap-4 md:gap-8 items-center border-dotted border-slate-300 shadow-gray-300 h-44 text-sm content-center">
        <div className="h-32 md:h-28 md:w-44 w-36">
          <img src={Img} alt="" className="h-full w-full rounded-sm" />
        </div>
        <div className="flex flex-col gap-2 h-32 md:h-[5em]">
          <div className="flex flex-col gap-2">
            <p className="text-[1.6em] md:text-[1.4em] font-semibold leading-tight md:leading-none">
              {title}
            </p>

            <p className="hidden md:block">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
