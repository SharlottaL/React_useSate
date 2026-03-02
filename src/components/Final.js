import './Final.css';

function Final({totalQuestions, correctAnswers, restart})
{
    return(
        <div className='question'>
            <h2 style={{display:"flex", justifyContent:"space-between"}}><div>Всего вопросов:</div> <div>{totalQuestions}</div></h2>
            <h2 style={{display:"flex", justifyContent:"space-between"}}><div>Правильных ответов:</div> <div> {correctAnswers}</div></h2>
        <button className='btnRestart' style={{marginRight:50, marginTop:15, backgroundColor:"#00CCFF"}} onClick={() => restart()}>Перезапуск теста</button>
        </div>
       
    )
}
export default Final;