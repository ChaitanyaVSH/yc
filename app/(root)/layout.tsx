import Navbar from "../../components/Navbar";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="font-sans">
        <Navbar />
        {children}
    </main>
  )
}

export default Layout;
