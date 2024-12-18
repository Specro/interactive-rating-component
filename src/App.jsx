import { useState } from 'react'

const ratings = [...Array(5).keys().map(value => ++value)];

function App() {
  const [rating, setRating] = useState(0);
  const [submited, setSubmited] = useState(false);

  return (
    <div className="bg-dark-blue rounded-3xl p-8 max-w-card text-white mx-6">
      {submited ? (
      <div className="text-center flex flex-col items-center">
        <img src="./images/illustration-thank-you.svg" alt="Thank you illustration" className="mx-auto mb-7" />
        <span className="text-orange mb-10 bg-light-gray/10 rounded-3xl py-2 px-5 leading-none">You selected {rating} out of 5</span>
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <p className="text-light-gray">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
      )
      : (
      <div>
        <img className="bg-light-gray/10 p-3 rounded-full mb-10" src="./images/icon-star.svg" alt="icon" />
        <h1 className="text-3xl font-bold mb-4">How did we do?</h1>
        <p className="text-light-gray mb-6">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="flex justify-between mb-8">
          {ratings.map(value => (
            <button key={value} className={`w-10 h-10 shrink-0 rounded-full font-bold hover:bg-orange hover:text-very-dark-blue sm:w-12 sm:h-12 ${rating===value?'bg-white text-very-dark-blue':'bg-light-gray/10 text-light-gray'}`} onClick={() => setRating(value)}>{value}</button>
          ))}
        </div>
        <button className="w-full bg-orange text-very-dark-blue uppercase rounded-3xl font-bold py-3 tracking-widest hover:bg-white" onClick={() => rating!==0?setSubmited(true):''}>Submit</button>
      </div>
    )}
    </div>
  )
}

export default App
