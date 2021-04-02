import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import styles from './App.module.css';
import user from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friends from './json/friends.json';

function App() {
    return (
        <div className={styles.app}>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />

            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />

            <FriendList friends={friends} />
        </div>
    );
}

export default App;
