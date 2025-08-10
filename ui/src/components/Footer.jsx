export default function Footer() {
    const currentHour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = currentHour >= openHour && currentHour <= closeHour;

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>
                        We're open until {closeHour}:00. Come visit us or order online.
                    </p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <p>
                    Sorry, we're closed. We're happy to welcome you between {openHour}:00
                    and {closeHour}:00.
                </p>
            )}
        </footer>
    );
}