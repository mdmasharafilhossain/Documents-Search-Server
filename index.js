const express = require("express")
const cors = require("cors")
const app = express()


app.use(cors({
    origin:['http://localhost:5173','https://docfind-client.vercel.app'],
    credentials:true
}));


app.use(express.json());

const PORT = 5000;

// *****These Data are Ai generated*******
const DemoData = [
  {
    id: 1,
    title: "Contract Law Basics",
    content:
      "A contract is a legally binding agreement between two or more parties under mutual consent and lawful consideration. It ensures that all parties involved understand their rights and obligations under the agreement.",
  },
  {
    id: 2,
    title: "Intellectual Property Rights",
    content:
      "Intellectual Property Rights protect creations of the mind such as inventions, artistic works, and symbols used in commerce. These rights encourage innovation and provide creators with exclusive control over their works.",
  },
  {
    id: 3,
    title: "Employment Law Overview",
    content:
      "Employment law regulates the relationship between employers and employees, ensuring fair treatment and workplace safety. It covers areas such as wages, discrimination, termination, and workers' compensation.",
  },
];





app.post("/generate-result",  (req, res )=>{
    
    const {SearchQuery} = req.body;


    if(!SearchQuery || SearchQuery.trim() === ""){
        return res.status(400).send({error: "Your request is not valid. Please provide valid query."})
    }


    const matchedData = DemoData.filter((data)=>
        data.content.toLowerCase().includes(SearchQuery.toLowerCase())

    )

    let summary = "";


    if(matchedData.length > 0){
        summary = `Based on your query   ${SearchQuery} , we found ${matchedData.length} these relevant documents.
`

summary += matchedData.map((data)=> `${data.title}  discusses that ${data.content.charAt(0).toLowerCase()}${data.content.slice(1)}`).join(" ");

summary += ` Overall, these documents provide insights into the topic related to "${SearchQuery}".`
    }else{
        summary = "No documents found for your query. Please try again with different keywords.."
    }


    res.send({
        SearchQuery,
        summary,
        results: matchedData
    })
}
)


app.get('/',(req,res)=>{
    res.send('DocFind Server Running...');
});

app.listen(PORT,()=>{
    console.log(`DocFind Server Running at Port ${PORT}`)
});
