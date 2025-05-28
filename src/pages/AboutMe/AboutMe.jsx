import Card from '../../components/Card/Card';
import Description from '../../components/Description/Description';
import Directions from '../../components/Directions/Directions';
import s from './style.module.css'

const AboutMe = () => {

    const arrCard = [
        {
            icon: 'src/assets/AboutMe/Results.svg',
            name: 'Results-oriented',
            text: 'Focused on delivering quality outcomes within time and resource constraints'
        },
        {
            icon: 'src/assets/AboutMe/Team.svg',
            name: 'Team player',
            text: 'Skilled at collaborative work, conflict resolution, and consensus building'
        }
    ]


    return (
        <div className={s.AboutMe} id={'about'}>
            <div className={s.left}>
                <Description/>
                <div className={s.wrapCards}>
                    {arrCard.map(data => <Card data={data} />)}
                </div>
            </div>
            <div className={s.right}>
                <Directions />
            </div>
        </div>
    )
}

export default AboutMe;