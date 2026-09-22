import { useState } from "react";

interface ListProps {
  data: string[];
  onSelect?: (item: string) => void;
}

const List = ({ data, onSelect }: ListProps) => {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          className={`list-group-item ${index == i ? "active" : ""}`}
          key={`${elemento}-${i}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
};

export default List;