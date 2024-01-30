import Sidebar from "@/components/Sidebar";
import Document from "@/components/Documentation";
import Footer from "@/components/Footer";

export default function Documentation() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Document />
      </div>
      <Footer />
    </>
  );
}
