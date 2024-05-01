export default function TabButton({ children, isSelected, ...props }) {
  //console.log(children, onSelect);

  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
