import TrendCard from '../components/TrendCard';
import '../styles/page.css';

const Analytics = () => {
  const adoption = [22, 28, 34, 38, 45, 51, 58, 63, 68, 74, 78, 83];
  const reliability = [99.1, 99.0, 99.2, 99.3, 99.4, 99.5, 99.6, 99.7, 99.7, 99.8, 99.9, 99.95];

  return (
    <div className="page">
      <div className="section-header">
        <div>
          <p className="eyebrow">Intelligence</p>
          <h2>Analytics</h2>
        </div>
        <button className="primary">Create insight</button>
      </div>
      <section className="grid two-columns">
        <TrendCard title="Product adoption" value="+37% QoQ" description="Activation curve" data={adoption} />
        <TrendCard title="Platform reliability" value="99.95%" description="Rolling 90 days" data={reliability} />
      </section>
      <section className="panel">
        <div className="panel__header">
          <div>
            <p className="eyebrow">Engagement</p>
            <h3>Heatmap</h3>
          </div>
          <button className="ghost">Download CSV</button>
        </div>
        <div className="heatmap">
          {Array.from({ length: 4 }).map((_, row) => (
            <div key={row} className="heatmap__row">
              {Array.from({ length: 9 }).map((__, col) => (
                <span key={col} style={{ opacity: 0.35 + (row + col) * 0.05 }} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Analytics;
