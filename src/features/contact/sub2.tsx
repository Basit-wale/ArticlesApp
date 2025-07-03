import Input from "../../components/ui/input";
import TextArea from "../../components/ui/textarea";

const Sub2 = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="h-full w-1/2 bg-white pt-10 px-6">
      <div className="h-fit">
        <p className="text-[1.7em] font-bold pb-5 font-nunito tracking-tight">
          Send us a message
        </p>
        <form
          action="https://formspree.io/f/xblyyboq"
          method="POST"
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4"
        >
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="text-sm">Name</label>
              <div className="bg-[#06063f15] rounded-md content-center pl-4 py-2 text-[#142246]">
                <Input onChange={() => ""} placeholder="Name" type="text" />
              </div>
            </div>
            <div className="w-1/2">
              <label className="text-sm">Phone</label>
              <div className="bg-[#06063f15] rounded-md content-center pl-4 py-2 text-[#142246]">
                <Input onChange={() => ""} placeholder="Phone" type="number" />
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="text-sm">Email</label>
            <div className="bg-[#06063f15] rounded-md content-center pl-4 py-2 text-[#142246]">
              <Input onChange={() => ""} placeholder="Email" type="email" />
            </div>
          </div>

          <div className="w-full">
            <label className="text-sm">Message</label>
            <div className="bg-[#06063f15] rounded-md h-fit content-center pl-4 py-2 text-[#142246]">
              <TextArea placeholder="Message" />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-poppins py-2 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sub2;
