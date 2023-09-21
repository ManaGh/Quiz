import { createContext, useReducer } from "react";
import questions from "../data";

const initialState = {

  currentQuestionIndex: 0,
  questions,
};
const reducer = (state, action) => {
  if (action.type === "Next_Question") {
    return {
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};
export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // we write value instead of [state, dipatch]because we knew they are object
  const value = useReducer(reducer, initialState);
  console.log("state", value);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
