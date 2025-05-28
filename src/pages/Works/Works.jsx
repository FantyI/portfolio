import Heading from '../../components/Heading/Heading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import s from './style.module.css'

const Works = () => {
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
         title: 'WebCode',
         github: 'https://github.com/FantyI/hackathon',
         externalLink: 'https://hackathon-five-nu.vercel.app/',
         technologies: ['html', 'css']
      },
   ]

   return (
      <div id={'works'}>
         <Heading title={'Works'} />
         <div className={s.Works}>
            {works.map(work => <ProjectCard data={work} />)}
         </div>
      </div>
   )
}

export default Works;