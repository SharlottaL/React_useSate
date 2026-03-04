import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Question from './components/Question';
import Final from './components/Final';
import { Peremeshka } from './components/Peremeshka';

const beforeQuestions = [
  {
    title: "Какой язык программирования самый быстрый?",
    variants: ["C", "C++", "Assembler", "C#", "Python"],
    correct: "Assembler"
  },
   {
    title: "Какой язык является чисто процедурным?",
    variants: ["C", "C++", "C#", "Java"],
    correct: "C"
  },
   {
    title: "Что такое функция?",
    variants: ["Именованная область памяти, содержимое которой может изменяться во время выполнения программы",
      "Именованная область памяти, содержимое которой НЕ может изменяться во время выполнения программы",
      "Именованная область кода, которую можно вызвать при необходимости"
    ],
    correct: "Именованная область кода, которую можно вызвать при необходимости"
  },
  {
   title: "Что такое переменная?",
    variants: ["Именованная область памяти, содержимое которой может изменяться во время выполнения программы",
      "Именованная область памяти, содержимое которой НЕ может изменяться во время выполнения программы",
      "Именованная область кода, которую можно вызвать при необходимости"
    ],
    correct: "Именованная область памяти, содержимое которой может изменяться во время выполнения программы"
  },
  {
    title: "Что такое метод?",
    variants: ["Переменная внутри класса", "Функция внутри класса", "Реализация алгоритма"],
    correct: "Функция внутри класса"
  },
   {
    title: "Какая структура данных обеспечивает добавление/удаление элементов за константное время?",
    variants: ["Массив", "Список", "Дерево"],
    correct: "Список"
  },
  {
    title: "Какая структура данных обеспечивает доступ к элементам за константное время?",
    variants: ["Массив", "Список", "Дерево"],
    correct: "Массив"
  }
]

function App() {
  const [questions] = useState(() => Peremeshka(beforeQuestions));
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const totalQuestions = questions.length;
  let question = questions[step];

  const [variants, setVariants] = useState(() => 
    question ? Peremeshka([...question.variants]) : []
  );
  
  useEffect(() => {
    if (question) {
      setVariants(Peremeshka([...question.variants]));
      setSelectId(null);
    }
  }, [step, question]);

  const getColor = (index) =>
  {
    if(!showResult) return "transparent";
    if(index == selectId)
    {
     return variants[index] === question.correct ? "#2ECC71" : "#FF0000";
  }
    return "transparent";
}

  const onClickVariant = (index) => 
    {
      setSelectId(index);
      setShowResult(true);
      const correctVariant = variants[index] === question.correct;
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
      <Question question={question} variants={variants} onClickVariant={onClickVariant}  getColor={getColor} step={step} totalQuestions={totalQuestions}/>
   : <Final totalQuestions={totalQuestions} correctAnswers={correct} restart={restart}/>
     }
     {/* <h4 style={{display:"flex", justifyContent:"space-between"}}><div>№Вопроса:</div> <div>{step}</div></h4>
     <h4 style={{display:"flex", justifyContent:"space-between"}}><div>Правильных ответов:</div> <div>{correct}</div></h4> */}
    </div>
  );
}

export default App;
