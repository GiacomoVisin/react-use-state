export default function Card({item}) {


    return (
        <div className="card">
            <button> {item.title} </button>
            <p>
                {item.description}
            </p>
        </div>
    )
}