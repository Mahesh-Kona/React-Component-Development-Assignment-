import React, { useState } from "react";

export interface Column<T> {
  key: keyof T;
  header: string;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean;
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [selected, setSelected] = useState<Set<string | number>>(new Set());

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    return sortAsc ? (aVal > bVal ? 1 : -1) : (aVal < bVal ? 1 : -1);
  });

  const toggleSelect = (id: string | number) => {
    const newSet = new Set(selected);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelected(newSet);
    if (onRowSelect) {
      onRowSelect(data.filter((row) => newSet.has(row.id)));
    }
  };

  if (loading) return <div className="p-4 text-center" role="status">Loading...</div>;
  if (data.length === 0) return <div className="p-4 text-center">No data available</div>;

  return (
    <table className="min-w-full border border-gray-300" role="table">
      <thead className="bg-gray-100">
        <tr role="row">
          {selectable && <th className="p-2" role="columnheader"></th>}
          {columns.map((col) => (
            <th
              key={String(col.key)}
              className="p-2 text-left cursor-pointer"
              role="columnheader"
              aria-sort={sortKey === col.key ? (sortAsc ? "ascending" : "descending") : "none"}
              tabIndex={0}
              onClick={() => {
                setSortKey(col.key);
                setSortAsc(sortKey === col.key ? !sortAsc : true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSortKey(col.key);
                  setSortAsc(sortKey === col.key ? !sortAsc : true);
                }
              }}
            >
              {col.header} {sortKey === col.key ? (sortAsc ? "▲" : "▼") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id} className="border-t hover:bg-gray-50" role="row">
            {selectable && (
              <td className="p-2" role="cell">
                <input
                  type="checkbox"
                  checked={selected.has(row.id)}
                  aria-label={`Select row ${row.id}`}
                  onChange={() => toggleSelect(row.id)}
                />
              </td>
            )}
            {columns.map((col) => (
              <td key={String(col.key)} className="p-2" role="cell">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export {};
