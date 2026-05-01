export default function Button({ item, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: isActive
          ? "rgb(255, 193, 7)"
          : "rgb(13, 110, 253)",
        color: isActive ? "black" : "white"
      }}
    >
      {item.title}
    </button>
  )
}