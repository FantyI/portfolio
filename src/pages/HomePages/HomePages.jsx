import Navigation from '../../components/Navigation/Navigation';
import s from './style.module.css'

const HomePages = ({setVisible, textNotifications}) => {

    return (
        <header className={s.HomePages} id='logo'>
            {/* <Navigation /> */}

            <div className={s.greeting}>
                <div className={s.text}>
                    Code That Works,
                    <span className={s.highlighting}>Designs That Engage</span>
                </div>
                <div className={s.buttons}>
                    <button className={s.myResume} onClick={() => textNotifications('At the moment, my resume is not available.')}>My resume</button>
                    <button className={s.contactMe} onClick={() => setVisible(true)}>Contact me</button>
                </div>
            </div>
        </header>
    )
}

export default HomePages;