import potoGrid from "../images/photo_grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img className="hero-poto"src={potoGrid} alt="Poto Grid"/>
            <h1 className="hero-header">This is web learning</h1>
            <p className="hero-text">Thanx</p>
        </section>
    )
}