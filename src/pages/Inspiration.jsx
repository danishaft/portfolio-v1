import { useEffect, useState } from "react"
import Footer from "../components/Footer"
function Inspiration(){
    const [quotes, setQuotes] = useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-API-Key': 'iirAlDn6DKxQaLXmlriArg==G7G4BdBitc8F4org'
        }
    };
    useEffect(()=>{
        fetch('https://api.api-ninjas.com/v1/quotes?category=computers', options)
            .then(response => response.json())
            .then(response => setQuotes(response))
            .catch(err => console.error(err));
    }, [])
    console.log(quotes)
    const elem = quotes.map((item, index) => {
        return <div className="quote" key={index}>
                    <p className="quote-text text-center my-10"><q>{item.quote}</q></p>
                    <p className="author grey text-center uppercase">{item.author}</p>
               </div>
    })
    return(
        <div className="quote-sec mt-20">
            <h2 className="text-center">Quotes <span className="grey">of the day!!</span> 💪🏽 </h2>
            {elem}
            <p className="explanation mt-20 mb-20">Hello this page brings you fresh quotes about computers just fo fun and learning. Well, I thought it would be a great way to bring some fun and learning your way. So, each time you visit this page, the website fetches a new quote from an API to give you a fresh new found facts about computers. Hope you enjoy it!</p>
            <Footer />
        </div>
    )
}
export default Inspiration