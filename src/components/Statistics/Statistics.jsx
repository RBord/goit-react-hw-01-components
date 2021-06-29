import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
    <section class="statistics">
        {title && <h2 class="title">{title}</h2>}

        <ul class="stat-list">
            {stats.map(({ label, percentage, id }) => (
                <li class="item" key={id}>
                    <span class="label">{label}</span>
                    <span class="percentage">{percentage}%</span>
                </li>
            
            ))}   
        </ul>
        
    </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            percentage: PropTypes.number,
            id: PropTypes.string.isRequired,
        }),
    ),
}