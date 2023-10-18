import SingleGame from "./SingleGame"
import axios from "axios"
import { useState, useEffect } from "react"
import config from "@/config";
import Loading from "./Loading";

export default function Games() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const apiKey = config.apiKey;
    axios.get(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((res) => {
        setLoading(true)
        setTimeout(() => {
          setData(res.data.results)
          setLoading(false);
        }, 2000)
      })
      .catch((error) => {
        setLoading(false);
        console.log(error)
      })
  }, [])

  const GamesCards = data.map((game) => (
    <SingleGame key={game.name} img={game.background_image} title={game.name} genres={game.genres} />
  ))

  return (
    <>
    {loading 
      ? <div className="container justify-center mx-auto">
          <Loading />
      </div>
      : <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto justify-center mb-10">
        {GamesCards}
      </div>
    }
    </>
  )
}
