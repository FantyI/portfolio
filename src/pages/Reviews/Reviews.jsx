import Heading from '../../components/Heading/Heading'
import Review from '../../components/Review/Review'
import s from './style.module.css'

const Reviews = () => {

   const reviews = [ 
      {
         name: 'Artem',
         stars: 5,
         text: "Without Gleb, our startup would have failed. He didn't just write code - he practically lived with us for 3 months, advising how to improve the product. A true IT coach!",
         date: '27.04.2025'
      },
      {
         name: 'Olga',
         stars: 5,
         text: "Gleb built our business website in just one week! He explained everything in simple terms and even helped with domain setup. Now customers find us easily - no more wasting money on ads!",
         date: '27.04.2025'
      },
      {
         name: 'Maxim (joint project)',
         stars: 5,
         text: "Collaborated with Gleb on complex API. His code is so clean it looks production-ready immediately. Rare to find someone who thinks like an architect but codes like a senior dev.",
         date: '27.04.2025'
      },
      {
         name: 'WW',
         stars: 5,
         text: "Without Gleb, our startup would have failed. He didn't just write code - he practically lived with us for 3 months, advising how to improve the product. A true IT coach!",
         date: '27.04.2025'
      },
      {
         name: 'GG',
         stars: 5,
         text: "Without Gleb, our startup would have failed. He didn't just write code - he practically lived with us for 3 months, advising how to improve the product. A true IT coach!",
         date: '27.04.2025'
      },
   ]

   return (
      <>
         <Heading title={'Reviews'} />
         <div className={s.Reviews}>
            <div className={s.text}>
               <div className={s.title}>
                  Real <span className={s.highlight}>Feedback </span>
                  from Clients
               </div>
               <div className={s.description}>
                  Here’s what clients say about my code quality, adherence to deadlines, and collaboration process. Every project is a new challenge, and I’m proud to deliver results that satisfy.
               </div>
            </div>
            <div className={s.allReviews}>
               {/* <div className={s.scrolls}> */}
                  <div>
                     <div className={s.scrollDown}>
                        {reviews.map(review => (
                           <Review data={review}/>
                        ))}
                        {reviews.slice(0, 3).map(review => (
                           <Review data={review}/>
                        ))}
                     </div>
                  </div>
                  <div>
                     <div className={s.scrollUp}>
                        {reviews.reverse().map(review => (
                           <Review data={review}/>
                        ))}
                        {reviews.slice(0, 3).map(review => (
                           <Review data={review}/>
                        ))}
                     </div>
                  </div>
               {/* </div> */}
            </div>
         </div>
      </>
   )
}

export default Reviews