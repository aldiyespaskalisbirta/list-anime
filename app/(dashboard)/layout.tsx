import NavbarFooter from "./_components/navbar-footer";
import NavbarHeader from "./_components/navbar-header";
import Sidebar from "./_components/sidebar";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <header className="h-[60px] md:pl-56 fixed inset-y-0 w-full z-50">
        <NavbarHeader />
      </header>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[60px] h-screen relative container">
        {children}
      </main>
      <footer className="h-[60px] fixed bottom-0 w-full z-50">
        <NavbarFooter />
      </footer>
    </div>
  );
}
