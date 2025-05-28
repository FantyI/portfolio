import s from './style.module.css'

const Heading = ({title}) => {
   
   return (
      <div className={s.Heading}>
         <div className={s.name}>{title}</div>
         <div className={s.background}>{title.toUpperCase()}</div>
      </div>
   )
}

export default Heading