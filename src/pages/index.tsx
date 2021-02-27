import { CompletedChalenges } from '../components/CompletedChalenges';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChalengeBox } from '../components/ChalengeBox';

import styles from '../styles/pages/Home.module.css';

import Head from 'next/head';
import React from 'react';
import { GetServerSideProps } from 'next';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';


export default function Home(props) {
  return (
    <ChallengesProvider 
    level={props.level} 
    currentExperience={props.currentExperience} 
    challengesCompleted={props.challengesCompleted}>

    <div className={styles.container}>
      <Head>
        <title>Inicio | Get Up</title>
      </Head>

     <ExperienceBar />
     <CountdownProvider>
     <section>
       <div>
         <Profile />
         <CompletedChalenges />
         <Countdown />
       </div>

       <div>
        <ChalengeBox />
       </div>
     </section>
     </CountdownProvider>
    </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx ) =>{

    const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

    return {
      props:{
        level: Number(level), 
        currentExperience: Number(currentExperience), 
        challengesCompleted: Number(challengesCompleted)
      }
    };
}