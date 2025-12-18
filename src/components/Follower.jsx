function Follower({ social, username, number, stat, icon, change }) {

    return (
        <>
            <div className="card">
                <div className="flexed">
                    <img className="social" src={social} alt="" />
                    <p style={{ color: 'var(--Gray-400-Text)' }}>{username}</p>
                </div>
                <h1 style={{ color: 'var(--White-Text)' }}>{number}</h1>
                <p className="status" style={{ color: 'var(--Gray-400-Text)' }}>{stat}</p>
                <div className="flexed">
                    <img className="arrow" src={icon} alt="" />
                    <p className={`${icon === '/icon-down.svg' ? "down" : 'up'}`}>{change} Today</p>
                </div>
            </div>
        </>
    )
}

export default Follower