import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";

const MainProvider = createContext();

const initialState = {
  data: [],

  isLoading: null,

  error: null,

  // home, movies, series, bookmarked

  currentPage: "home",
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "isLoading":
        return {
          ...state,
        };

      case "data/loaded":
        return {
          ...state,
          data: action.payload,
        };

      case "error":
        return {
          ...state,
          error: true,
        };

      default:
        return state;
    }
  };

  const [{ data, isLoading, currentPage }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({
        type: "isLoading/Fetching",
        payload: true,
      });
      try {
        const res = await axios.get("/data/movies.json");
        dispatch({
          type: "data/loaded",
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: "error",
          payload: error,
        });
      } finally {
        dispatch({
          type: "isLoading/Fetching",
          payload: false,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <MainProvider.Provider
      value={{
        data,
        isLoading,
        currentPage,
        dispatch,
      }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const useData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, useData };
