import React, { useEffect, useReducer } from "react";
import reducer from "./Reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
  });

  const fetchApiData = async (url) => {
    dispatch({ type: "IS_LOADING" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const SearchPost = (currEle) => {
    dispatch({
      type: "SEARCH_POST",
      payload: currEle,
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV",
    });
  };

  const getNextPage = () => {
    dispatch({
      type: "NEXT",
    });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, dispatch, SearchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
