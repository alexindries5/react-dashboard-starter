import { useMemo, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { Entity } from '../data/entities';
import '../styles/table.css';

type Props = {
  initialData: Entity[];
};

const statusTone: Record<Entity['status'], string> = {
  Active: 'success',
  Paused: 'warning',
  Archived: 'muted',
};

const formatDate = (value: string) => new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(value));

const EntityTable = ({ initialData }: Props) => {
  const [data, setData] = useState<Entity[]>(initialData);
  const [sorting, setSorting] = useState<SortingState>([{ id: 'updatedAt', desc: true }]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [editing, setEditing] = useState<Entity | null>(null);
  const [newEntity, setNewEntity] = useState<Omit<Entity, 'id'>>({
    name: '',
    owner: '',
    status: 'Active',
    type: 'Workspace',
    updatedAt: new Date().toISOString(),
  });

  const columns = useMemo<ColumnDef<Entity>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => (
          <div>
            <p className="strong">{info.getValue<string>()}</p>
            <p className="muted">{info.row.original.id}</p>
          </div>
        ),
      },
      {
        accessorKey: 'type',
        header: 'Type',
        cell: (info) => <span className="badge">{info.getValue<string>()}</span>,
      },
      {
        accessorKey: 'owner',
        header: 'Owner',
        cell: (info) => <span className="pill-text">{info.getValue<string>()}</span>,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: (info) => <span className={`status ${statusTone[info.getValue<Entity['status']>()]}`}>{info.getValue<string>()}</span>,
      },
      {
        accessorKey: 'updatedAt',
        header: 'Updated',
        cell: (info) => <span className="muted">{formatDate(info.getValue<string>())}</span>,
      },
      {
        id: 'actions',
        header: 'Actions',
        enableSorting: false,
        cell: ({ row }) => (
          <div className="actions">
            <button className="ghost" onClick={() => setEditing(row.original)}>
              Edit
            </button>
            <button className="danger" onClick={() => handleDelete(row.original.id)}>
              Delete
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleDelete = (id: string) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    if (!editing) return;

    setData((prev) => prev.map((item) => (item.id === editing.id ? editing : item)));
    setEditing(null);
  };

  const handleCreate = () => {
    if (!newEntity.name || !newEntity.owner) return;

    const created: Entity = {
      ...newEntity,
      id: `ent-${Math.floor(Math.random() * 900 + 100)}`,
      updatedAt: new Date().toISOString(),
    };

    setData((prev) => [created, ...prev]);
    setNewEntity({ ...newEntity, name: '', owner: '', updatedAt: new Date().toISOString() });
  };

  return (
    <div className="table-card">
      <div className="table-card__header">
        <div>
          <p className="eyebrow">Entities</p>
          <h2>CRUD-ready data grid</h2>
        </div>
        <div className="table-actions">
          <input
            placeholder="Search entities"
            value={globalFilter ?? ''}
            onChange={(event) => setGlobalFilter(event.target.value)}
          />
          <select value={newEntity.status} onChange={(event) => setNewEntity({ ...newEntity, status: event.target.value as Entity['status'] })}>
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Archived">Archived</option>
          </select>
          <button className="primary" onClick={handleCreate}>
            Add entity
          </button>
        </div>
      </div>

      {editing && (
        <div className="edit-panel">
          <div>
            <p className="eyebrow">Editing</p>
            <h3>{editing.name}</h3>
          </div>
          <div className="edit-grid">
            <label>
              <span>Name</span>
              <input value={editing.name} onChange={(event) => setEditing({ ...editing, name: event.target.value })} />
            </label>
            <label>
              <span>Owner</span>
              <input value={editing.owner} onChange={(event) => setEditing({ ...editing, owner: event.target.value })} />
            </label>
            <label>
              <span>Type</span>
              <select
                value={editing.type}
                onChange={(event) => setEditing({ ...editing, type: event.target.value as Entity['type'] })}
              >
                <option value="Workspace">Workspace</option>
                <option value="Integration">Integration</option>
                <option value="Experiment">Experiment</option>
                <option value="Dataset">Dataset</option>
              </select>
            </label>
            <label>
              <span>Status</span>
              <select
                value={editing.status}
                onChange={(event) => setEditing({ ...editing, status: event.target.value as Entity['status'] })}
              >
                <option value="Active">Active</option>
                <option value="Paused">Paused</option>
                <option value="Archived">Archived</option>
              </select>
            </label>
          </div>
          <div className="edit-actions">
            <button className="ghost" onClick={() => setEditing(null)}>
              Cancel
            </button>
            <button className="primary" onClick={handleSave}>
              Save changes
            </button>
          </div>
        </div>
      )}

      <div className="data-table">
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    <div className="th-content">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{ asc: '↑', desc: '↓' }[header.column.getIsSorted() as string] ?? ''}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div>
          <span>Page {table.getState().pagination.pageIndex + 1}</span>
          <span className="muted">of {table.getPageCount()}</span>
        </div>
        <div className="pagination__actions">
          <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="ghost">
            Previous
          </button>
          <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="ghost">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntityTable;
