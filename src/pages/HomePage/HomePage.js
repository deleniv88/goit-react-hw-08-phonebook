import { useAuth } from 'components/hooks';
import img from '../../default/loginNew.png';
import css from '../HomePage/HomePage.module.css'

export default function HomePage() {
    const { isLoggedIn, user } = useAuth();
    const homeImg = img;
    return (
        <div className={css.container}>
            <div>
                {isLoggedIn ?
                    <span className={css.title}>{user.name}'s Phonebook </span>
                    : <span className={css.titlePlsLogIn}>Contacts don't showing up?
                        <span>Please login!</span></span>}
            </div>
            <div>
                <img src={homeImg} alt="homeImage" className={css.homeImg}></img>
            </div>
        </div>

    )
}