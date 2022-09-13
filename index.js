function App() {
    
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState([]);
    const [colors, setColors] = React.useState([]);

    React.useEffect(() => { 
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();
            
            setQuotes(data);
            let randIndex = Math.floor(Math.random() *  data.length);
            setRandomQuote(data[randIndex]);
            setColors("#873e23");
        }
        fetchData();
    },[])
    
    const onClickNewQuote = () => {
        let randIndex = Math.floor(Math.random() *  quotes.length);
        setRandomQuote(quotes[randIndex]);
        
        let colors = [
            "#e28743",
            "#eab676",
            "#76b5c5",
            "#873e23",    
        ]

        let randColorIndex = Math.floor(Math.random() * colors.length);

        setColors(colors[randColorIndex]);

    }

    return (
        <div className="body" style={{backgroundColor: colors}}>
            <div className="wrapper">

                <div className="container">
                    <div id="quote-box">
                        <div id="quote-text">
                        <i class="fa fa-quote-left" style={{color: colors}}> </i>
                            <div id="text">
                                <span style={{color: colors}}>{randomQuote.text}</span>
                            </div>    
                        </div>
                        <div id="author">
                            <span style={{color: colors}}>-{randomQuote.author || "No author"}</span>
                        </div>
                        <div id="buttons">
                            <a href="https://twitter.com/intent/tweet" target="_blank" className="button" id="tweet-quote" style={{backgroundColor: colors}}>
                                <i class="fa fa-twitter" style={{color: "white"}}></i>
                            </a>
                            <a></a>
                            <button type="button"  id="new-quote" onClick={onClickNewQuote} style={{backgroundColor: colors, borderColor: colors}}>New Quote</button>
                        </div>
                                                
                        </div>
                </div>
            </div>
            
        </div>
        

        
        
    )
    
}

ReactDOM.render(<App/>, document.getElementById('app'))