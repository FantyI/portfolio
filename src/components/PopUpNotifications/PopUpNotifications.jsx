import s from './style.module.css'

const PopUpNotifications = ({ text, setText }) => {

   // const newMessage = async () => {
      
   // }

   if (text) {
      setTimeout(() => {
         console.log('ddd')
         setText('')
      }, 4000)
   }


   return (
      <div 
      className={`${text && s.visible} ${s.PopUpNotifications}`} 
      style={{opacity: text ? 1 : 0}}>
         {text}
      </div>
   )
}

export default PopUpNotifications