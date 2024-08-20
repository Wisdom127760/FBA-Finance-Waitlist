import "@styles/globals.css";
import Nav from "@components/NavBar";
import Provider from "@components/Provider";
import Footer from "@components/Footer/FooterComponent";

export const metadata = {
  title: "FBA Finance",
  description: "Building businesses,one pool at a time",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}

            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
