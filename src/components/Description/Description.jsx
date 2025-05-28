
import s from './style.module.css'

const Description = () => {

    return (
        <div className={s.Description}>
            <div className={s.title}>About Me</div> 
            <div className={s.text}>
                <p>
                    Hi! My name is Gleb, I am 17 years old, and I am a novice web developer from Vologda. I am currently studying at the College of Communications, where they are actively mastering modern technologies and developing in the IT field.
                </p>
                <p>
                    I like to create user-friendly and functional web applications, work on interfaces and solve interesting tasks.
                </p>
                <p>
                    I am constantly learning new things, following the trends in development and trying to apply them in my projects. In the future, I want to become a professional fullstack developer and work on cool digital products.
                </p>
                <p>
                    If you are looking for a responsible and enthusiastic developer, let's get to know each other! I look forward to cooperation and interesting projects.
                </p>
            </div>
            {/* <div className={s.positiveSides}>
                <div className={s.cars}>
                    <img src="src/assets/AboutMe/fluent-mdl2_poll-results.svg" alt="" />
                    <p className={s.name}>Results-oriented</p>
                    <div className={s.cardCotent}>
                        Focused on delivering quality outcomes within time and resource constraints
                    </div>
                </div>
                <div className={s.cars}>
                    <img src="src/assets/AboutMe/fluent-mdl2_poll-results.svg" alt="" />
                    <p className={s.name}>Team player</p>
                    <div className={s.cardCotent}>
                        Skilled at collaborative work, conflict resolution, and consensus building
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Description;

