import { useAuth } from 'components/hooks';
import img from '../../default/Untitled-2.jpg';
import css from '../HomePage/HomePage.module.css'

export const HomePage = () => {
    const { isLoggedIn, user } = useAuth();
    const homeImg = img;
    return (
        <div className={css.container}>
            <div>
                {isLoggedIn ?
                    <span className={css.title}>{user.name}'s Phonebook </span>
                    : <span className={css.titlePlsLogIn}>Your personally Phonebook.
                        <span>Please login to see your contacts!</span></span>}
            </div>
            <div> 
                <img src={homeImg} alt="homeImage" className={css.homeImg}></img>
            </div>
            <div className={css.footer}>
                <span>Made by @deleniv</span>
            </div>
        </div>
    )
}