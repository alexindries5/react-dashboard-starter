import './TrendCard.css';

type Props = {
  title: string;
  value: string;
  description: string;
  data: number[];
};

const TrendCard = ({ title, value, description, data }: Props) => {
  const maxValue = Math.max(...data, 1);
  return (
    <div className="trend-card">
      <div className="trend-card__header">
        <div>
          <p className="muted">{title}</p>
          <h3>{value}</h3>
        </div>
        <span className="pill subtle">{description}</span>
      </div>
      <div className="trend-card__chart" role="img" aria-label={`${title} sparkline`}>
        {data.map((point, index) => {
          const height = (point / maxValue) * 100;
          return <span key={index} style={{ height: `${height}%` }} />;
        })}
      </div>
    </div>
  );
};

export default TrendCard;
