import axios from "axios";
import React from "react";
import Game from "./components/Game";

const App = () => {
  const [categories, setCategories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState();
  const [questions, setQuestions] = React.useState([]);
  const [isStarted, setIsStarted] = React.useState(false);

  const getCategoriesData = async () => {
    try {
      setIsLoading(true);
      let res = await axios.get("https://opentdb.com/api_category.php");
      setCategories(res.data.trivia_categories);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getQuestions = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://opentdb.com/api.php?amount=5&category=${categoryId}`
      );

      setQuestions(res.data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const getCategoryId = (e) => {
    setCategoryId(e.target.value);
  };

  React.useEffect(() => {
    getCategoriesData();
  }, []);

  React.useEffect(() => {
    getQuestions();
  }, [isStarted]);

  console.log(questions);

  return (
    <>
      {!isStarted ? (
        <>
          <h1>QUIZICCAL</h1>
          <p>Please select category</p>
          <select name="categories" onChange={(e) => getCategoryId(e)}>
            {!isLoading ? (
              categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })
            ) : (
              <option>Loading...</option>
            )}
          </select>

          <button
            onClick={() => setIsStarted(true)}
            disabled={categoryId === undefined ? true : false}
            type="button"
          >
            START QUIZ
          </button>
        </>
      ) : (
        <Game questions={questions} />
      )}
    </>
  );
};

export default App;
