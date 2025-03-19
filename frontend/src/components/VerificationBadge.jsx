// src/components/VerificationBadge.jsx
export default function VerificationBadge({ status }) {
    const statusColors = {
      verified: 'green',
      pending: 'orange',
      rejected: 'red'
    };
  
    return (
      <div className={`verification-badge ${status}`}>
        <span style={{ backgroundColor: statusColors[status] }}></span>
        {status.toUpperCase()}
      </div>
    );
  }