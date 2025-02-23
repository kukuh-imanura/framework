import Navbar from "@orgs/Navbar";
import Sidebar from "./organisms/Sidebar";
import Input from "./atoms/input/Input";

const Components = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      <Navbar />

      <div className="flex h-full w-full">
        <Sidebar />

        <div className="flex w-full items-center justify-center">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Components;
