import s from './style.module.css'

const Card = ({data}) => {
   const {icon, name, text} = data;
   return (
      <div className={s.card}>
         <div className={s.icon}>
            <img src={icon} alt="" />
         </div>
         <div className={s.name}>{name}</div>
         <p className={s.text}>{text}</p>
      </div>
   )
}

export default Card