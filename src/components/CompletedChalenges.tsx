import styles from '../styles/components/CompletedChalenges.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

export function CompletedChalenges(){
    const {challengesCompleted} = useContext(ChallengesContext);
    return(
        <div className={styles.completedChalengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}