export default function Pizza({ item }) {
    return (
        <li className={`pizza ${item.soldOut ? "sold-out" : ""}`}>
            <img src={item.photoName} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>{item.ingredients}</p>
                <span>{item.soldOut ? "SOLD OUT" : `${item.price}€`}</span>
            </div>
        </li>
    );
}