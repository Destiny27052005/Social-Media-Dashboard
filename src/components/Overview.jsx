function Overview({ action, icon, num, img, percent }) {
    return (
        <>
            <div className="overview">
                <div className="view">
                    <p style={{ color: 'var(--Gray-400-Text)' }}>{action}</p>
                    <img className="social" src={icon} alt="" />
                </div>
                <div className="details view">
                    <h2 style={{ color: 'var(--White-Text)' }}>{num}</h2>
                    <div className="flx">
                        <img className="arrow" src={img} alt="" />
                        <p className={`${img === '/icon-down.svg' ? "down" : 'up'}`}>{percent}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview