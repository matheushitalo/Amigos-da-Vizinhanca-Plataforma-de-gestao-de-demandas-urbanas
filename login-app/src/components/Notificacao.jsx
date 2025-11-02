export default function Notificacao({message, type}) {
    if(!message) return null;
    const bg = type === 'success' ? '#16a34a' : type === 'error' ? '#ef4444' : '#3b82f6';
    return (
        <div style={{
            position: 'fixed',
            top: 20,
            right: 20,
            padding: '16px 24px',
            background: bg,
            color: '#fff',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600'

        }}>
            {message}
        </div>
    )
}