import { activities } from '../data/cards';
import './ActivityList.css';

const ActivityList = () => (
  <div className="activity-card">
    <div className="activity-card__header">
      <h3>Activity</h3>
      <span className="pill">Live</span>
    </div>
    <ul>
      {activities.map((item) => (
        <li key={item.id}>
          <div>
            <p className="activity-title">{item.title}</p>
            <p className="activity-desc">{item.description}</p>
          </div>
          <span className="time">{item.time}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ActivityList;
