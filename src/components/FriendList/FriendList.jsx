import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className={css['friend-list']}>
        {friends.map(({ id, ...rest }) => (
            <FriendListItem key={id} {...rest} />
        ))}
    </ul>
);

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.number.isRequired }),
    ),
};
