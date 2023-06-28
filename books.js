const Book = ({data}) => {

    return (
        <>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://covers.openlibrary.org/b/ID/${data.covers[0]}-L.jpg`} class="img-fluid rounded-start" alt="Book cover" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{data.title}</h4>
                        <div className="card-text">{data.description}</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )};