import Pizza from "./Pizza.jsx";
import pizzaData from "../data.js";

export default function Menu() {
    const pizzas = pizzaData;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {pizzas.length > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. {pizzas.length} creative dishes to choose
                        from. All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((p) => (
                            <Pizza key={p.name} item={p} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later.</p>
            )}
        </main>
    );
}