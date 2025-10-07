import Spinner from "../Spinner/Spinner";
import "./List.css"

interface ListProps<T> {
    data: T[];
    columns: {
        key: keyof T;
        label: string;
    }[];
}

export function List<T>({ data, columns }: ListProps<T>) {
    if (!data) {
        return (<Spinner />);
    } else if (data.length === 0) {
        return (<p>No current data</p>);
    } else {
        return (
            <table className="custom-table">
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th key={String(col.key)}>{col.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map(col => (
                                <td key={String(col.key)}>{String(row[col.key])}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default List;