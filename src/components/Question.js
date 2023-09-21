import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../context/quiz";
const Question = ({ questions }) => {
  const [quizState] = useContext(QuizContext);
  console.log("Question", quizState);
  return (
    <div>
      <div className="question">
        {quizState.questions[quizState.currentQuestionIndex].question}
      </div>
      <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};
export default Question;
