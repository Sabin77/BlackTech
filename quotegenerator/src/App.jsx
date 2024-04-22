import { useEffect, useState } from "react";
import "./App.css";
import bg from "./assets/Quotebg.webp";
import { TERipple } from "tw-elements-react";

function App() {
  const [quote, setQuote] = useState([]);

  const url = "https://api.quotable.io/random";
  const getQuote = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoreQuote = () => {
    getQuote();
  };

  useEffect(() => {
    getQuote();
  }, []);

  const postQuote = () => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?quote=${quote.content} - ${quote.author}`;
    window.open(fbUrl, "_blank");
  };

  return (
    <>
      <div className=" flex relative justify-center items-center">
        <img className=" h-screen w-full" src={bg} alt="background" />
        <div className="absolute flex flex-col justify-center border-2 border-gray-500 h-96 w-1/2 bg-transparent backdrop-blur-sm max-h-full">
          <h1 className=" absolute top-2 felx left-4 text-3xl font-sedan">
            Quote Generator
          </h1>

          <p className=" font-josefin text-xl text-center mt-8 px-4">
            {quote.content}
          </p>
          <p className=" self-center mt-5 font-playfair">-{quote.author}</p>
          <button
            className=" absolute bottom-4 border-2 border-gray-500 w-40 self-center py-2 rounded-md mt-20 hover:bg-black "
            onClick={getMoreQuote}
          >
            {" "}
            Generate Quote
          </button>
          <div
            className=" absolute right-14 bottom-6 h-auto w-auto cursor-pointer "
            onClick={postQuote}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1877f2" }}
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
