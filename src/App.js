import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Question from './components/Question';
import Final from './components/Final';

const questions = [
  {
    title: "Какой язык программирования самый быстрый?",
    variants: ["C", "C++", "Assembler", "C#", "Python"],
    correct: 2
  },
   {
    title: "Какой язык является чисто процедурным?",
    variants: ["C", "C++", "C#", "Java"],
    correct: 0
  },
   {
    title: "Что такое функция?",
    variants: ["Именованная область памяти, содержимое которой может изменяться во время выполнения программы",
      "Именованная область памяти, содержимое которой НЕ может изменяться во время выполнения программы",
      "Именованная область кода, которую можно вызвать при необходимости"
    ],
    correct: 2
  },
  {
   title: "Что такое переменная?",
    variants: ["Именованная область памяти, содержимое которой может изменяться во время выполнения программы",
      "Именованная область памяти, содержимое которой НЕ может изменяться во время выполнения программы",
      "Именованная область кода, которую можно вызвать при необходимости"
    ],
    correct: 0
  },
  {
    title: "Что такое метод?",
    variants: ["Переменная внутри класса", "Функция внутри класса", "Реализация алгоритма"],
    correct: 1
  },
   {
    title: "Какая структура данных обеспечивает добавление/удаление элементов за константное время?",
    variants: ["Массив", "Список", "Дерево"],
    correct: 1
  },
  {
    title: "Какая структура данных обеспечивает доступ к элементам за константное время?",
    variants: ["Массив", "Список", "Дерево"],
    correct: 0
  }
]

function App() {
  const totalQuestions = questions.length;
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectId, setSelectId] = useState(null);
  let question = questions[step];
  const getColor = (variant) =>
  {
    if(!showResult) return "transparent";
    if(variant == selectId)
    {
     return variant === question.correct ? "#2ECC71" : "#FF0000";
  }
    return "transparent";
}
  const onClickVariant = (variant) => 
    {
      setSelectId(variant);
      setShowResult(true);
      const correctVariant = variant === question.correct;
     setTimeout(() => {
       if(correctVariant)
       { 
        setCorrect(correct+1);
       }
      setStep(step+1);
      setSelectId(null);
      setShowResult(false);
    }, 300);
  }
  const restart = () =>
  {
  setStep(0);
  setCorrect(0);
  setShowResult(false);
  setSelectId(null);
  }
  return (
    <div className="main">
     {
      step < totalQuestions ?
      <Question question={question}  onClickVariant={onClickVariant}  getColor={getColor} step={step} totalQuestions={totalQuestions}/>
   : <Final totalQuestions={totalQuestions} correctAnswers={correct} restart={restart}/>
     }
     {/* <h4 style={{display:"flex", justifyContent:"space-between"}}><div>№Вопроса:</div> <div>{step}</div></h4>
     <h4 style={{display:"flex", justifyContent:"space-between"}}><div>Правильных ответов:</div> <div>{correct}</div></h4> */}
    </div>
  );
}

export default App;
