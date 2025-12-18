import '../styles/page.css';

const members = [
  { name: 'Elena Ruiz', title: 'Design Lead', status: 'Online' },
  { name: 'Jonas Weber', title: 'Data Science', status: 'In focus' },
  { name: 'Noah Patel', title: 'Infra', status: 'Offline' },
  { name: 'Sofia Marin', title: 'Customer Success', status: 'Online' },
];

const Team = () => (
  <div className="page">
    <div className="section-header">
      <div>
        <p className="eyebrow">People</p>
        <h2>Team</h2>
      </div>
      <button className="primary">Invite teammate</button>
    </div>
    <section className="panel">
      <div className="panel__header">
        <div>
          <p className="eyebrow">Directory</p>
          <h3>Active collaborators</h3>
        </div>
        <button className="ghost">Manage roles</button>
      </div>
      <div className="list">
        {members.map((member) => (
          <div key={member.name} className="list__item">
            <div>
              <p className="strong">{member.name}</p>
              <p className="muted">{member.title}</p>
            </div>
            <span className="pill subtle">{member.status}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Team;
