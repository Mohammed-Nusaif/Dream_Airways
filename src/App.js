import Booking from "./Components/Booking";
import Footer from "./Components/Footer";
import Guide from "./Components/Guide";
import Lounge from "./Components/Lounge";
import Memories from "./Components/Memories";
import Navbar1 from "./Components/Navbar1";
import Spotlight from "./Components/Spotlight";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar1 />
                <Spotlight />
                <Booking />
                <Guide />
                <Memories />
                <Lounge />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
