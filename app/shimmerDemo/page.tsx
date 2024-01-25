import { DemoCard } from "@/components/DemoCard";
import Sidebar from "@/components/Sidebar";
import shimmerDemo from "@/lib/ShimmerDemo";

const ShimmerDemo = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col md:flex-row  flex-wrap gap-5  lg:justify-around   ">
        {shimmerDemo.map((e, index) => (
          <DemoCard key={index} e={e} />
        ))}
      </div>
    </>
  );
};

export default ShimmerDemo;
