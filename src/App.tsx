import Features from "./components/feature/Features";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Property from "./components/property/Property";
import Video from "./components/video/Video";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <article>

          <Hero />
          <Property />
          <Features />
          <Video />
        </article>
      </main>
    </>
  )
}

export default App