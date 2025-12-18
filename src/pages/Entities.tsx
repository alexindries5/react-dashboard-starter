import EntityTable from '../components/EntityTable';
import { entitySeed } from '../data/entities';
import '../styles/page.css';

const Entities = () => {
  return (
    <div className="page">
      <div className="page__header">
        <div>
          <p className="eyebrow">Data access</p>
          <h1>Entity governance</h1>
          <p className="muted">Manage workspaces, integrations, and datasets with CRUD-ready actions.</p>
        </div>
        <div className="chip ghost">JWT secured</div>
      </div>
      <EntityTable initialData={entitySeed} />
    </div>
  );
};

export default Entities;
