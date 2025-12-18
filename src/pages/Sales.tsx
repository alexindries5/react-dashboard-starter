import '../styles/page.css';

const Sales = () => (
  <div className="page">
    <div className="section-header">
      <div>
        <p className="eyebrow">Revenue</p>
        <h2>Sales</h2>
      </div>
      <button className="primary">Add forecast</button>
    </div>

    <section className="grid two-columns">
      <div className="panel">
        <div className="panel__header">
          <div>
            <p className="eyebrow">Quarter</p>
            <h3>Forecast</h3>
          </div>
          <button className="ghost">Adjust</button>
        </div>
        <div className="forecast">
          {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, index) => (
            <div key={quarter} className="forecast__item">
              <p className="muted">{quarter}</p>
              <div className="bar">
                <span style={{ width: `${60 + index * 10}%` }} />
              </div>
              <p className="strong">${(1.4 + index * 0.3).toFixed(1)}M</p>
            </div>
          ))}
        </div>
      </div>
      <div className="panel">
        <div className="panel__header">
          <div>
            <p className="eyebrow">Efficiency</p>
            <h3>Sales velocity</h3>
          </div>
          <button className="ghost">Download</button>
        </div>
        <div className="velocity">
          {[
            { title: 'Win rate', value: '34%', change: '+4%' },
            { title: 'Cycle length', value: '21 days', change: '-3 days' },
            { title: 'ACV', value: '$12.4k', change: '+$800' },
          ].map((item) => (
            <div key={item.title} className="velocity__item">
              <p className="muted">{item.title}</p>
              <div>
                <p className="strong">{item.value}</p>
                <small className="pill subtle">{item.change}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Sales;
