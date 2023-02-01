export function SkillsPreview({ skill }) {
    return <>
        <li key={skill.id} className='skill-list'>
            <div className='skill-img-container'>

                <img src={require(`../assets/img/${skill.imgUrl}.svg`)} alt="" />
            </div>

            <div>
                <p className='skill-title'>
                    {skill.title}
                </p>
                <p className='skill-txt'>
                    {skill.txt}
                </p>
            </div>
        </li>

    </>
}