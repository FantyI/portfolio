import { useEffect, useRef, useState } from 'react'
import s from './style.module.css'

const ProjectCard  = ({ data }) => {
   
   return (
      <div className={s.ProjectCard}>
         <img src={`src/assets/Projects/ImgCard/${data.title}.png`} className={s.img} />
         <div className={s.text}>
            <h2 className={s.title}>{data.title}</h2>
            <div className={s.technologies}>
               {data.technologies.map(technology => (
                  <div className={s.technology}>{technology.toUpperCase()}</div>
               ))}
            </div>
            <div className={s.link}>
               <div className={s.details}>
                  Details
               </div>
               <div className={s.linkImages}>
                  <a target='_blank' href={data.github} className={s.linkImg}><img src="src/assets/Projects/github.svg" alt="" /></a>
                  <a target='_blank' href={data.externalLink} className={s.linkImg}><img src="src/assets/Projects/external-link.svg" alt="" /></a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectCard 