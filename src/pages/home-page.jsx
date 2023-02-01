import { HomeHero } from '../cmp/home-hero';
import { HomeSkils } from '../cmp/home-skils';

export function HomePage() {
    return <section className='full home-page '>
        <HomeHero />
        <HomeSkils />


    </section>
}