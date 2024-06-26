type Props = {
  data: string[];
};

function List({ data }: Props) {
  return (
    <ul className="list-group">
      {data.map((elemento) => (
        <li key={elemento} className="list-group-item">
          {elemento}
        </li> // ponemos el key=elemento para que no de error en el chrome
      ))}
    </ul>
  );
}

export default List;
