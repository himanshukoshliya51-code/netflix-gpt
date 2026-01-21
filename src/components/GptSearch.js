
import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions.js";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="object-cover h-screen" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
