import { useNavigate } from 'react-router-dom';

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

interface ISearchResultsProps {
  result: IResult;
}

const Card: React.FC<ISearchResultsProps> = ({ result }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex col card">
        <h3>{result.name}</h3>
        <span>Gender: {result.gender}</span>
        <span>Eye Color: {result.eye_color}</span>

        <button onClick={() => navigate(`/card/${result.name}`)}>
          Details
        </button>
      </div>
    </>
  );
};
export default Card;
