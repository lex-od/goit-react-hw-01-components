import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles['stat-list']}>
            {stats.map(statItem => (
                <li key={statItem.id} className={styles.item}>
                    <span className={styles.label}>{statItem.label}</span>
                    <span className={styles.percentage}>
                        {statItem.percentage}%
                    </span>
                </li>
            ))}
        </ul>
    </section>
);

export default Statistics;

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};
