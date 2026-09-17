const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>
                    More ways to shop: Find an <span>Apple store </span> or other retailers near you.Or call 000800 040 1966.
                </p>
                <img src="logo.svg" alt ="Apple logo"/>
            </div>
            <br />

            <div className="links">
                <p>©Copyright © 2024 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map(({ label, link }) => (
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer