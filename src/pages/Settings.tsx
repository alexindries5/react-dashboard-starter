import '../styles/page.css';

const Settings = () => (
  <div className="page">
    <div className="section-header">
      <div>
        <p className="eyebrow">Control</p>
        <h2>Settings</h2>
      </div>
      <button className="primary">Save changes</button>
    </div>

    <section className="grid two-columns">
      <div className="panel">
        <div className="panel__header">
          <div>
            <p className="eyebrow">Organization</p>
            <h3>Profile</h3>
          </div>
          <button className="ghost">Edit</button>
        </div>
        <form className="form">
          <label>
            Workspace name
            <input defaultValue="Pulseboard" />
          </label>
          <label>
            Billing email
            <input defaultValue="finance@pulseboard.io" />
          </label>
          <label>
            Time zone
            <select defaultValue="utc">
              <option value="utc">UTC</option>
              <option value="eastern">GMT-5 Eastern</option>
              <option value="europe">GMT+1 Europe</option>
            </select>
          </label>
        </form>
      </div>
      <div className="panel">
        <div className="panel__header">
          <div>
            <p className="eyebrow">Security</p>
            <h3>Access</h3>
          </div>
          <button className="ghost">Audit log</button>
        </div>
        <div className="toggles">
          {[
            { label: 'Require SSO', description: 'Enforce SAML/OIDC for all users.' },
            { label: 'Session lock', description: 'Auto-lock after 20 minutes of inactivity.' },
            { label: 'MFA reminders', description: 'Nudge users that have not enrolled yet.' },
          ].map((toggle) => (
            <label key={toggle.label} className="toggle">
              <input type="checkbox" defaultChecked />
              <div>
                <p className="strong">{toggle.label}</p>
                <p className="muted">{toggle.description}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Settings;
