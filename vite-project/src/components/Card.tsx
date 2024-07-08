import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CARD_ROUTE } from "./routes-config";

interface IResult {
  name?: string;
  eye_color?: string;
  gender?: string;
  birth_year?: string;
  hair_color?: string;
  height?: string;
  homeworld?: string;
  films?: string[];
  mass?: string;
  skin_color?: string;
  species?: string[];
  starships?: string[];
  vehicles?: string[];
}

interface IHomeworld {
  name: string;
}

interface ISearchResultsProps {
  result?: IResult;
}

const CardList: React.FC<ISearchResultsProps> = ({ result }) => {
  const [cache, setCache] = useState<IResult>({
    name: "",
  });
  const [homeworld, setHomeworld] = useState<IHomeworld>({
    name: "",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const cookPath = (path: string) => {
    const segments = path.split("/");
    return segments[segments.length - 1];
  };

  const cookedLocation = cookPath(location.pathname);

  useEffect(() => {
    if (location.pathname.split("/")[1] === `${CARD_ROUTE}`) {
      setIsOpen(true);
    }
    if (result) {
      setCache(result);
    }
    if (Object.keys(cache).length === 1) {
      getData();
    }
  }, []);

  const getData = () => {
    if (cookedLocation) {
      const url = `https://swapi.dev/api/people/?search=${cookedLocation}`;

      axios
        .get(url)
        .then((res) => {
          setCache(res.data.results[0]);
          getHomeWorld(res.data.results[0].homeworld); // Вызов getHomeWorld после успешного завершения getData
        })
        .catch((error) => {
          console.error("Error", error);
        });
    }
  };

  const getHomeWorld = (url: string) => {
    axios
      .get(url)
      .then((res) => {
        setHomeworld(res.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  return (
    <div className="flex col card">
      <h3>{cache.name}</h3>
      <span>Gender: {cache.gender}</span>
      <span>Eye Color: {cache.eye_color}</span>
      {isOpen ? <span>Homeworld: {homeworld.name}</span> : ""}
      {isOpen ? <span>Birth Year: {cache.birth_year}</span> : ""}
      {isOpen ? <span>Hair Color: {cache.hair_color}</span> : ""}
      {isOpen ? <span>Height: {cache.height}</span> : ""}
      {isOpen ? <span>Mass: {cache.mass}</span> : ""}
      {isOpen ? <span>Skin Color: {cache.skin_color}</span> : ""}

      <button onClick={() => navigate(`/card/${cache.name}`)}>Details</button>
    </div>
  );
};
export default CardList;
