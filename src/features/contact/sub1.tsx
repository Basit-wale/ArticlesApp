import Card from "../../components/ui/card";
import { MdOutlineMail } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Sub1 = () => {
  return (
    <div className="h-full w-1/2 bg-slate-100 pt-3 px-6">
      <p className="text-[2.2em] font-bold pb-2 font-nunito tracking-tight">
        Get in touch
      </p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at
        necessitatibus porro commodi tempore repellendus.
      </p>
      <div className="pt-3">
        <Card
          icon={<IoLocationOutline className="text-4xl text-white" />}
          cardTitle="Office"
          Info1="123 Main St, Cityville"
          Info2="Ikotun, Governors Road"
        />
        <Card
          icon={<MdOutlineMail className="text-4xl text-white" />}
          cardTitle="Email Us"
          Info1="support@example.com"
          Info2="supportextra@example.com"
        />
        <Card
          icon={<RiPhoneLine className="text-4xl text-white" />}
          cardTitle="Call Us"
          Info1="Phone: 08163059020"
          Info2="Whatsapp: 090202020209"
        />
      </div>

      <div className="pt-3 border-t-[1px] border-slate-500">
        <p>Follow us on:</p>

        <div className="flex gap-4 pt-2">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <FaFacebook className="text-xl text-white" />
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <BiLogoInstagramAlt className="text-xl text-white" />
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <FaTwitter className="text-xl text-white" />
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
            <FaYoutube className="text-xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub1;
