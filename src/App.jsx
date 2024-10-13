import './index.css';
import Header from './components/Header/Header';
import JsIcon from './assets/javascript-icon.png';
import HtmlIcon from './assets/html-icon.png';
import CssIcon from './assets/css-icon.png';
import TwCssIcon from './assets/tailwind-icon.png';
import ReactIcon from './assets/react-icon.png';
function App() {
  return (
    <>
      <Header />
      {/* <main className="main"> */}
      <section id="home" className="flx_a_cntr flx_d_c">
        <h1 className="hm_big_txt">Hi my name is</h1>
        <div className="hm_lrg_txt">- Binyam Techan -</div>
        <p className='hm_sml_txt'>*Web Developer*</p>
        <div className="">
          {/* <h2>Tech Stack</h2> */}
          <div className="hm_imgs_wrpper flx_a">
        {/* <img src={HtmlIcon} alt="" /> */}
        {/* <img src={CssIcon} alt="" /> */}
        {/* <img src={JsIcon} alt="" />
        <img src={JsIcon} alt="" />
        <img src={JsIcon} alt="" />
        <img src={JsIcon} alt="" /> */}
        {/* <img src={TwCssIcon} alt="" /> */}
        {/* <img src={ReactIcon} alt="" />
        <img src={ReactIcon} alt="" />
        <img src={ReactIcon} alt="" />
        <img src={ReactIcon} alt="" /> */}
        <img src={ReactIcon} alt="" />

          </div>
        </div>
      </section>
      <section id="about">
        <h1>About</h1>
      </section>
      <section id="projects">
        <h1>Projects</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
      {/* </main> */}
    </>
  );
}

export default App;
