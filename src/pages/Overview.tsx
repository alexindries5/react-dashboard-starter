import ActivityList from '../components/ActivityList';
import MetricCard from '../components/MetricCard';
import TrendCard from '../components/TrendCard';
import { activities, metrics } from '../data/cards';
import { pipeline, topPerformers } from '../data/table';
import '../styles/page.css';

const Overview = () => {
  const trendData = [12, 18, 26, 22, 34, 29, 33, 31, 44, 53, 48, 59];
  const retentionData = [96, 94, 95, 93, 92, 94, 95, 96, 97, 96, 95, 97];

  return (
    <div className="page">
      <section>
        <div className="section-header">
          <div>
            <p className="eyebrow">Snapshot</p>
            <h2>Business health</h2>
          </div>
          <div className="section-actions">
            <button className="ghost">Schedule email</button>
            <button className="primary">Share</button>
          </div>
        </div>
        <div className="grid metrics">
          {metrics.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      <section className="grid two-columns">
        <TrendCard title="Net revenue" value="$1.94M" description="Last 12 months" data={trendData} />
        <TrendCard title="Customer retention" value="96.4%" description="Customer cohort" data={retentionData} />
      </section>

      <section className="grid two-columns">
        <div className="panel">
          <div className="panel__header">
            <div>
              <p className="eyebrow">Pipeline</p>
              <h3>Active deals</h3>
            </div>
            <button className="ghost">View all</button>
          </div>
          <div className="table">
            <div className="table__head">
              <span>Company</span>
              <span>Stage</span>
              <span>Amount</span>
              <span>Owner</span>
              <span>Probability</span>
            </div>
            {pipeline.map((row) => (
              <div key={row.company} className="table__row">
                <span>{row.company}</span>
                <span className="pill subtle">{row.stage}</span>
                <span className="strong">{row.amount}</span>
                <span>{row.owner}</span>
                <span className="muted">{row.probability}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <div className="panel__header">
            <div>
              <p className="eyebrow">Signals</p>
              <h3>Top performers</h3>
            </div>
            <button className="ghost">Download</button>
          </div>
          <div className="list">
            {topPerformers.map((person) => (
              <div key={person.name} className="list__item">
                <div>
                  <p className="strong">{person.name}</p>
                  <p className="muted">{person.role}</p>
                </div>
                <div className="score">
                  <span>{person.score}</span>
                  <small>{person.delta}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-header">
          <div>
            <p className="eyebrow">Timeline</p>
            <h2>Operational highlights</h2>
          </div>
          <button className="ghost">Filter</button>
        </div>
        <ActivityList key={activities.length} />
      </section>
    </div>
  );
};

export default Overview;
