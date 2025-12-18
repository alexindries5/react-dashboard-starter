import '../styles/page.css';

const reports = [
  { title: 'Board summary', audience: 'Executive', status: 'Published', date: 'Nov 12' },
  { title: 'Product momentum', audience: 'Product', status: 'Draft', date: 'Nov 10' },
  { title: 'Revenue operations', audience: 'Finance', status: 'Published', date: 'Nov 03' },
];

const Reports = () => (
  <div className="page">
    <div className="section-header">
      <div>
        <p className="eyebrow">Docs</p>
        <h2>Reports</h2>
      </div>
      <button className="primary">New report</button>
    </div>
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="eyebrow">Library</p>
          <h3>Recently viewed</h3>
        </div>
        <button className="ghost">Open folder</button>
      </div>
      <div className="list">
        {reports.map((report) => (
          <div key={report.title} className="list__item">
            <div>
              <p className="strong">{report.title}</p>
              <p className="muted">{report.audience}</p>
            </div>
            <div className="pill subtle">{report.status}</div>
            <p className="muted">{report.date}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Reports;
