var qoutes= [
    {
        qoute:"“Be yourself; everyone else is already taken.”",
        author : "― Oscar Wilde"
    },
    {
        qoute:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author : "― Marilyn Monroe"
    },
    {
        qoute:"“So many books, so little time.”",
        author : "― Frank Zappa"
    },
    {
        qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author : "― Albert Einstein"
    },
    {
        qoute:"“A room without books is like a body without a soul.”",
        author : "― Marcus Tullius Cicero"
    },
    {
        qoute:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author : "― Bernard M. Baruch"
    },
    {
        qoute:"“You only live once, but if you do it right, once is enough.”",
        author : "― Mae West"
    },
    {
        qoute:"“We accept the love we think we deserve.”",
        author : "― Stephen Chbosky"
    },
    {
        qoute:"“It is never too late to be what you might have been.”",
        author : "― George Eliot"
    },
    {
        qoute:"“For every minute you are angry you lose sixty seconds of happiness.”",
        author : "― Ralph Waldo Emerson"
    },
]

function addQuote (){
    var i = Math.floor(Math.random() * qoutes.length) ;
    var cartona = `<p class="my-4 fs-3 fw-semibold">${qoutes[i].qoute}</p>
            <p class="my-4 fs-3 fw-semibold">${qoutes[i].author}</p>` 
    
    document.getElementById("qoutes").innerHTML=cartona;
}


