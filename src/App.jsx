import ThemeToggle from './components/toggle'
import Follower from './components/Follower'
import Overview from './components/Overview'
import './App.css'

function App() {
  const handleToggleChange = () => {
    console.log()
  }
  return (
    <>
      <div className="container">

        <div className='flex'>
          <div>
            <h1 className='heading' style={{ color: 'var(--White-Text)' }}>Social Media Dashboard</h1>
            <p style={{ color: 'var(--Gray-400-Text)' }}>Total Followers: 23,004</p>
          </div>
          <div>
            <ThemeToggle onToggle={handleToggleChange} />
          </div>
        </div>

        <div className="first cards">
          <div className="face wrap">
            <Follower social="/icon-facebook.svg" username="@nathanf" number="1987" stat="FOLLOWERS" icon="/icon-up.svg" change="12" />
          </div>
          <div className="twit wrap">
            <Follower social="/icon-twitter.svg" username="@nathanf" number="1044" stat="FOLLOWERS" icon="/icon-up.svg" change="99" />
          </div>
          <div className="inst wrap">
            <Follower social="/icon-instagram.svg" username="@realnathanf" number="11K" stat="FOLLOWERS" icon="/icon-up.svg" change="1099" />
          </div>
          <div className="yout wrap">
            <Follower social="/icon-youtube.svg" username="@Nathan F." number="8239" stat="SUBSCRIBERS" icon="/icon-down.svg" change="144" />
          </div>
        </div>

        <h2 className='today' style={{ color: 'var(--White-Text)' }}>Overview - Today</h2>
        <div className="cards">
          <Overview action="Page Views" icon="/icon-facebook.svg" num="87" img="/icon-up.svg" percent="3%" />
          <Overview action="Likes" icon="/icon-facebook.svg" num="52" img="/icon-down.svg" percent="2%" />
          <Overview action="Likes" icon="/icon-instagram.svg" num="5462" img="/icon-up.svg" percent="2257%" />
          <Overview action="Profile Views" icon="/icon-instagram.svg" num="52K" img="/icon-up.svg" percent="1375%" />
          <Overview action="Retweets" icon="/icon-twitter.svg" num="117" img="/icon-up.svg" percent="303%" />
          <Overview action="Likes" icon="/icon-twitter.svg" num="507" img="/icon-up.svg" percent="553%" />
          <Overview action="Likes" icon="/icon-youtube.svg" num="107" img="/icon-down.svg" percent="19%" />
          <Overview action="Total Views" icon="/icon-youtube.svg" num="1407" img="/icon-down.svg" percent="12%" />
        </div>
      </div>
    </>
  )
}

export default App
