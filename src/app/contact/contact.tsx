import Footer from "../../components/footer";
import "./font.css";
import img from "../../assets/img/call_of_juarez_gunslinger-1920x1080.jpg";
import Sub1 from "../../features/contact/sub1";
import Sub2 from "../../features/contact/sub2";

const Contact = () => {
  return (
    <main className="flex flex-col gap-5 items-center text-[#142246]">
      <div className="h-96 w-full bg-slate-900 relative">
        <img src={img} alt="" className="h-full w-full absolute" />
        <div className="text-center relative content-center h-96 w-full bg-[#0a0a4b73]">
          <p className="text-white text-[2.5em] font-poppins font-semibold">
            Contact Us
          </p>
          <p className="text-white text-sm font-poppins font-light leading-tight">
            Ready to pace up your tech and academic journey?
          </p>
          <span className="text-white font-light font-poppins text-sm">
            You're in the right place.
          </span>
        </div>
      </div>

      <div className="w-[70vw] rounded-xl h-[80vh] flex overflow-hidden">
        <Sub1 />
        <Sub2 />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.737408840203!2d3.26553477397498!3d6.554798022800941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f3cbbfd7bf1%3A0x96bcdefa63c5777e!2sAdetutu%20Shopping%20Complex!5e0!3m2!1sen!2sng!4v1750067238969!5m2!1sen!2sng"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-xl"
      ></iframe>
      <Footer />
    </main>
  );
};

export default Contact;
