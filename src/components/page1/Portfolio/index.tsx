import Modal from "../Modal";
import { data } from "../../../data/index";
const Portfolio = () => {
  return (
    <>
      <section className=" bg-black px-3 py-20 text-white">
        <div className="mx-auto flex flex-col items-center justify-center  lg:max-w-[1200px]">
          {/* <div className="mx-auto flex max-w-[500px] flex-col items-center  lg:max-w-[1200px] lg:flex-row  lg:justify-between"> */}
          <h2 className="mb-10 text-5xl font-bold">PORTFOLIO</h2>
          <div className="flex flex-col flex-wrap items-center justify-center gap-10  sm:flex-row">
            {data.map((item, index) => (
              <Modal key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
