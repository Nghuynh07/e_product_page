import { useState } from "react";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
import GlobalCSS from "./stylesComponents/Global.style";

function App() {
  const [isLightbox, setIsLightbox] = useState(false);
  const displayLightbox = () => {
    setIsLightbox(true);
  };

  const closeLightbox = () => {
    setIsLightbox(false);
  };

  return (
    <div>
      {isLightbox && <Lightbox closeLightbox={closeLightbox}></Lightbox>}
      <GlobalCSS />
      <Header displayLightbox={displayLightbox} />
    </div>
  );
}

export default App;
