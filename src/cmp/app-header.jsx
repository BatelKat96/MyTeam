import logo from '../assets/img/myteam.svg'

export function AppHeader() {
    return <section className=' full main-container header-section'>

        <div className=' header-container '>

            <div className='nav-section '>
                <div className='logo'>
                    <img src={logo} alt="my team" className='logo-img' />
                </div>
                <nav >
                    <ul className='clean-list'>
                        <li>home</li>
                        <li>about</li>
                    </ul>
                </nav>
            </div>
            <div className='btn contact-us-section'>
                <button className='btn-contact-us'>
                    contact us
                </button>

            </div>
        </div>

    </section>
}