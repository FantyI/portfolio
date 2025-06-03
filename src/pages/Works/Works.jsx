import Heading from '../../components/Heading/Heading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import s from './style.module.css'

const Works = ({textNotifications}) => {
   const works = [
      {
         title: 'WebCode',
         github: 'https://github.com/FantyI/hackathon',
         externalLink: 'https://hackathon-five-nu.vercel.app/',
         technologies: ['html', 'css']
      },
      {
         title: 'RMC',
         github: 'https://github.com/FantyI/RMC',
         externalLink: 'https://rmc-phi.vercel.app/',
         technologies: ['html', 'css']
      },
      {
         title: 'BuildTheExpert',
         github: 'https://github.com/FantyI/stroyexpert-frontend',
         externalLink: 'https://stroyexpert.vercel.app/',
         technologies: ['react', 'css']
      },
   ]

   return (
      <div id={'works'}>
         <Heading title={'Works'} />
         <div className={s.Works}>
            {works.map(work => <ProjectCard data={work} textNotifications={textNotifications}/>)}
         </div>
      </div>
   )
}

export default Works;