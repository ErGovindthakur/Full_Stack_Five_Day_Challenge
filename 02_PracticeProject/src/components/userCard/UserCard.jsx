const UserCard = ({ name, role, isOnline, sendMsg }) => {
  const statusText = isOnline ? "Online" : "Offline";
  const statusColor = isOnline ? "green" : "red";

  const cardStyle = {
    width: "160px",
    padding: "6px",
    borderRadius: "8px",
    backgroundColor: "#e5e5e5",
    margin: "4px",
    color:"black"
  };

  return (
    <div style={cardStyle}>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p style={{ color: statusColor }}>Status: {statusText}</p>

      {sendMsg && (
        <button onClick={() => sendMsg("Hello, Mr Govind")}>
          Send Message
        </button>
      )}
    </div>
  );
};

export default UserCard;
