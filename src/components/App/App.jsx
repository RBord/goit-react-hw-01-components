import { Profile } from '../Profile/Profile';
import user from '../../user.json';
import { Statistics } from '../Statistics/Statistics';
import statsData from '../../statistical-data.json';

console.log(user)

export const App = () => {
    return (
        <div>
            <Profile
                name={user.name}
                location={user.location}
                tag={user.tag}
                avatar={user.avatar}
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes} />
        </div>
    );
};