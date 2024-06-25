import "./App.css";
import MainHeading from "./Components/MainHeading/MainHeading";
import SearchBar from "./Components/SearchBar/SearchBar";
import Card from "./Components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionCard = motion(Card);

function App() {
  const URL = "https://akabab.github.io/superhero-api/api/all.json";

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(URL);
      setResult(data);
      setLoading(false);
    } catch (error) {
      console.error();
    }
  };

  const search = (value) => {
    setDisplay(
      result.filter((hero) => hero.name.toLowerCase().includes(value))
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setDisplay(result);
  }, [result]);

  return (
    <div className="App ">
      <section className="main-wrapper scrollable">
        <MainHeading />
        <SearchBar clickHandler={search} />
        {loading ? (
          <p className="res">Loading...</p>
        ) : display.length === 0 ? (
          <p className="res">Not Found</p>
        ) : (
          <section className="grid">
            {display.slice(0, 30).map((hero, index) => (
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                }}
                whileHover={{ scale: 1.1 }}
                key={index}
                image={hero.images}
              >
                <p>{hero.name}</p>
                <p> {hero.biography.fullName}</p>
                <p>{hero.work.occupation.split(",")[0]}</p>
              </MotionCard>
            ))}
          </section>
        )}
      </section>
    </div>
  );
}

export default App;
