'use client'

import Image from 'next/image'
import styles from './styles.module.css'
import Project from '@/models/Project'
import { listProject } from '@/globals'
import Link from 'next/link'
import { Icon, SubTitle } from '@/components'

const InfoPortfolio = ({project}: {project: Project}) => {
  const {id, pic: {id: idPic, src, width, height}, social, tags} = project
  return (
    <>
      <Image
        src="/projects/akkaunt.png"
        alt={idPic}
        width={width}
        height={height}
        className={styles.pic}
      />
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>{id}</h3>
          <ul className={styles.social}>{social.map(s => (
            <li key={s.id}>
              <Link 
                about={s.id}
                href={s.path}
              >{s.id}</Link>
              </li>
          ))}</ul>
        </div>
        <p>Anim reprehenderit laboris occaecat laboris velit aliqua nisi minim labore amet irure adipisicing velit nisi. Fugiat dolore ad fugiat commodo voluptate.</p>
        <ul className={styles.tags}>
          {tags.map(t => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </>
  )
}
 
const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.cont}>
        <div className={styles.header}>
          <SubTitle
            label="portfolio"
            align='left'
          />
          <div className={styles.arrows}>
            <button>
              <Icon 
                icon='fa-solid fa-chevron-left'
                className={styles.arrow} 
              />
            </button>
            <button>
              <Icon 
                icon='fa-solid fa-chevron-right'
                className={styles.arrow} 
              />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <InfoPortfolio project={listProject[0]} />
        </div>
      </div>
    </section>
  )
}

export default Portfolio