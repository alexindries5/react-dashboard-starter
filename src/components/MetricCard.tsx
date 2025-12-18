import { MetricCard as Metric } from '../data/cards';
import './MetricCard.css';

type Props = {
  metric: Metric;
};

const MetricCard = ({ metric }: Props) => {
  const trendClass = metric.trend >= 0 ? 'positive' : 'negative';
  const trendLabel = metric.trend >= 0 ? 'up' : 'down';

  return (
    <div className="metric-card">
      <div className="metric-card__label">
        <p>{metric.label}</p>
        {metric.badge && <span className="badge">{metric.badge}</span>}
      </div>
      <div className="metric-card__value">
        <strong>{metric.value}</strong>
        <span className={trendClass}>{`${trendLabel} ${Math.abs(metric.trend)}%`}</span>
      </div>
    </div>
  );
};

export default MetricCard;
