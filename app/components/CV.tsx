import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const CV = () => {
  return (
    <section id="cv" className="flex flex-col pb-24 gap-12">
      <h1 className="text-2xl text-primary  transition-all">
        CV
      </h1>
        <div className="group">
          <a target="_blank" href="/Xurshed_Alimmamadov_CV.pdf">
            <div className="flex my-4 p-4 transition-all group-hover:opacity-70 hover:!opacity-100  hover:bg-[rgb(225,225,225,0.1)]">
              <div className="flex"></div>
              <div className="flex flex-col gap-5 w-1/4 mr-6 ">
                <Image
                  className="transition-all outline"
                  src="/assets/cv.png"
                  alt="Natours"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex-1">
                <div className="mb-3 flex">
                  <h1 className="text-primary text-2xl transition-all group-hover:text-teal-500">
                    Visit CV
                  </h1>
                  <span className="text-primary transition-all text-base ml-3 -translate-x-[0.32rem] translate-y-[0.32rem] group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:text-teal-500">
                    <ArrowOutwardIcon fontSize="inherit" />
                  </span>
                </div>
                <article className="flex-2 text-sm text-secondary group-hover:text-primary transition-all">
                Explore my CV to see how my skills and projects align with your goals!
                </article>
              </div>
            </div>
          </a>
        </div>
    </section>
  );
};
export default CV;
