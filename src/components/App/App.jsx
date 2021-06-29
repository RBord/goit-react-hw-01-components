import user from '../../user.json';
import stats from '../../statistical-data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

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
            <Statistics
                title = 'Upload Stats'
                stats={stats} />
            <FriendList
                friends={friends} />
            <TransactionHistory
                items={transactions} />
        </div>
    );
};