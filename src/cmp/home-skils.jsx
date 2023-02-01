import { SkillsList } from './skills-list'

export function HomeSkils() {

    const skills = [
        {
            id: 's101',
            title: 'Experienced Individuals',
            txt: 'Our network is made up of highly experienced professionals who are passionate about what they do.',
            imgUrl: 'icon-person'

        },
        {
            id: 's102',
            title: 'Easy to Implements',
            txt: 'Our processes have been refined over years of implementation meaning our teams always deliver.',
            imgUrl: 'icon-cog'
        },
        {
            id: 's103',
            title: 'Enhanced Productivity',
            txt: 'Our customized platform with in-built analytics helps you manage your distributed teams.',
            imgUrl: 'icon-chart'
        }
    ]
    return <section className='full main-container home-skils-section'>
        <div className="home-skils-container">
            <div className='home-skils-headline'>
                <h2>Build & manage distributed teams like no one else.</h2>
            </div>
            <div>
                <SkillsList skills={skills} />
            </div>
        </div>

    </section>
}