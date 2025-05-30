import { useEffect, useRef, useState } from 'react'
import s from './style.module.css'

import externalLink from '../../assets/images/external-link.svg'
import github from '../../assets/images/github.svg'

const ProjectCard  = ({ data }) => {
   
   return (
      <div className={s.ProjectCard}>
         <img src={`/images/ImgCard/${data.title}.png`} className={s.img} />
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
                  <a target='_blank' href={data.github} className={s.linkImg}><img src={github} alt="" /></a>
                  <a target='_blank' href={data.externalLink} className={s.linkImg}><img src={externalLink} alt="" /></a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectCard 