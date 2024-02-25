import styles from './style.module.css';
import StarWarsIcon from './images/StarWarsIcon.svg';

type Props = {
    mainTitle: string;
    subTitle: string;
    mainTitleValue: string|number;
    subTitleValue: string|number;
}

export default function index({mainTitle, subTitle, mainTitleValue, subTitleValue}: Props) {
  return (
    <div className={styles.titleblock}>
        <h2>{mainTitle}: {mainTitleValue}</h2>
        <p>{subTitle}: {subTitleValue}</p>
        <img className={styles.titleImage} alt="r2-d2" src={StarWarsIcon}/>
    </div>
  )
}