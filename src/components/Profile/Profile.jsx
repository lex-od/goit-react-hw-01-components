import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img src={avatar} alt={name} className={styles.avatar} />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            {location && <p className="location">{location}</p>}
        </div>

        <ul className={styles.stats}>
            <li>
                <span className="label">Followers</span>
                <span className={styles.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className={styles.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className={styles.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
);

export default Profile;

Profile.defaultProps = {
    location: '',
    // Здесь должна быть какая-то дефолтная картинка
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};
