import Navbar from "./components/organisms/navbar";
import Footer from "./components/organisms/footer";
import "./globals.css";

export const metadata = {
  title: "Adaence",
  description: "Rétablissons les liens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>

        {/* <div className="calque" style={{ position: "absolute", top: 0, left: 0, width: "100%", opacity: ".6", zIndex: "10" }}>
          <img src="/images/Solidarity_project_3_volunteer.png" style={{width: "100%"}}/>
        </div> */}

        <Navbar/>

          <main>
            {children}
          </main>

        <Footer/>

      </body>
    </html>
  );
}
