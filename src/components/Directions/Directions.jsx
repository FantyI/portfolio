import s from './style.module.css'

const Directions = () => {

    const directions = [
        {
            name: 'Design',
            text: 'I like to think through interfaces, making them not only beautiful, but also convenient. I work in Figma, Adobe Photoshop and Illustrator, I can create layouts, select color schemes and design UX/UI.'
        },
        {
            name: 'Frontend',
            text: 'I write in HTML, CSS, JavaScript, I know React, I can adapt the layout for different devices. I try to keep my projects fast, responsive, and up-to-date.'
        },
        {
            name: 'Backend',
            text: 'I am developing the server part on Node.js (Express/Nest.js), I work with databases (MySQL, PostgreSQL, MongoDB). I understand the principles of REST API, authentication, and query optimization.'
        },
    ]

    return (
        <div className={s.Directions}>
            <h2 className={s.title}>Directions</h2>
            {directions.map(direction => (
                <div className={s.direction}>

                    <div className={s.name}>{direction.name}</div>
                    <div className={s.text}>{direction.text}</div>
                </div>
            ))}
        </div>
    )
}

export default Directions;