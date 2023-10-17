import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Property from "./components/property/Property";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <article>

          <Hero />
          <Property />
        </article>
      </main>
    </>
  )
}

export default App