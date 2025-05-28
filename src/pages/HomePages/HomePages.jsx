import Navigation from '../../components/Navigation/Navigation';
import s from './style.module.css'

const HomePages = () => {

    return (
        <header className={s.HomePages}>
            {/* <Navigation /> */}

            <div className={s.greeting}>
                <div className={s.text}>
                    Code That Works,
                    <span className={s.highlighting}>Designs That Engage</span>
                </div>
                <div className={s.buttons}>
                    <button className={s.myResume}><a href="">My resume</a></button>
                    <button className={s.contactMe}><a href="">Contact me</a></button>
                </div>
            </div>
        </header>
    )
}

export default HomePages;