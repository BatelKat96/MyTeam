import Pattern2 from '../assets/img/bg-pattern-home-2.svg'
import Pattern1 from '../assets/img/bg-pattern-home-1.svg'
import rectangle from '../assets/img/Rectangle.png'

export function HomeHero() {
    return <section className='full main-container home-hero-section'>
        <div className="home-hero-container">
            <div className='pattern-1-container'>
                <img src={Pattern1} className='pattern-1' />
            </div>
            <div className='home-hero-headline'>
                <h1 className='h1-big'>Find the <br />best <span>talent</span></h1>
            </div>

            <div className='home-hero-content'>
                <div className='rectangle-container'>
                    <img src={rectangle} className='rectangle' />
                </div>
                Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We're about to change that.
            </div>
        </div>

        <div className='pattern-2-container'>
            <img src={Pattern2} className='pattern-2' />
        </div>


    </section>
}