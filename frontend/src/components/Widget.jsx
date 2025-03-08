const Widget = ({ title, count, icon }) => {
    return (
        <div style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "250px",
            margin: "10px"
        }}>
            <div>
                <h3 style={{ margin: "0", color: "#555" }}>{title}</h3>
                <h1 style={{ margin: "5px 0", color: "#333" }}>{count}</h1>
            </div>
            <div style={{ fontSize: "2rem" }}>{icon}</div>
        </div>
    );
};

export default Widget;
