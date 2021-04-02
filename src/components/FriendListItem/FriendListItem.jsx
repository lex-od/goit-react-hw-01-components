import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={css.item}>
        <span className={css[isOnline ? 'online' : 'offline']}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
    </li>
);

export default FriendListItem;

FriendListItem.defaultProps = {
    // Здесь должен быть какой-то дефолтный аватар
    avatar: 'https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg',
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
