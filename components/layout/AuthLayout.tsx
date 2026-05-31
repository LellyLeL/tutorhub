import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow relative bg-linear-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex items-center justify-center min-h-[calc(100vh-16rem)]">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
