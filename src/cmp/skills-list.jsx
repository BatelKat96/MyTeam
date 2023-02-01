import { SkillsPreview } from './skills-preview';

export function SkillsList({ skills }) {

    return <section>
        <ul className='clean-list'>
            {skills.map(skill =>
                <SkillsPreview skill={skill} key={skill.id} />
            )}
        </ul>


    </section>
}