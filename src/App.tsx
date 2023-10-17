import Features from "./components/feature/Features";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Property from "./components/property/Property";
import Story from "./components/story/story";
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
          <Story />
        </article>
      </main>
    </>
  )
}

export default App