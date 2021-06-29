import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => 
            <li class="item" key={id}>
                <span class="status">{isOnline}</span>
                <img class="avatar" src={avatar} alt={name} width="48" />
                <p class="name">{name}</p>
            </li>
            )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool,
        }),
    )
}