function App(){
    const [data, setData] = React.useState(null);      
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            const response = await fetch("https://openlibrary.org/authors/OL7115219A/works.json");
            const json     = await response.json();
            const info = json.entries;
        // Removing data that has no descriptions
            let updatedData = info.filter((book) => book.description != undefined);
        // Removing data that descriptions are stored in a seperate object
            let lastUpdate = updatedData.filter((book) => !book.description.value)
            setData(lastUpdate);
            setLoaded(true);
        }
        getData();
    },[])


    return (
        <div className="container">
            <h1>A collection of books by Sarah Maas:</h1>
            {loaded && data.map((book, i) => <Book data={book} key={i}/>)}
        </div>        
    );   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);






































// import './books.js'

// window.addEventListener('load', ()=> {
//     createBookList();
// });

// async function createBookList(){
//     const response = await fetch("https://openlibrary.org/authors/OL7115219A/works.json");
//     const json     = await response.json();
//     const data = json.entries;
//     console.log(data);
// // Removing data that has no descriptions
//     let updatedData = data.filter((book) => book.description != undefined);
// // Removing data that descriptions are stored in a seperate object
//     let lastUpdate = updatedData.filter((book) => !book.description.value)
//     const books    = document.getElementById('books');

//     lastUpdate.forEach((book) => {
//         const element = document.createElement('mit-book');
//         element.book = book;
//         books.appendChild(element);
//     })

//     https://covers.openlibrary.org/b/$key/$value-$size.jpg
// }