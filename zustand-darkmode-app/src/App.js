import { useThemeStore } from './store/themeStore'
import './App.css'

function App() {
  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <header className="header">
        <div className="logo">▶ YouTube</div>
        <input type="text" className="search-bar" placeholder="검색" />
        <button onClick={toggleTheme} className="toggle-button">
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>

      <nav className="category-tabs">
        {['전체', '음악', '게임', '믹스', '라이브', '최근에 업로드된 동영상', '감상한 동영상'].map((tab) => (
          <button key={tab} className="category-button">{tab}</button>
        ))}
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <ul>
            <li>🏠 홈</li>
            <li>🎬 Shorts</li>
            <li>📺 구독</li>
            <li>🕓 시청 기록</li>
            <li>📃 재생목록</li>
            <li>🎞 내 동영상</li>
          </ul>
        </aside>

        <main className="video-container">
          <section className="preview-banner">
            <div className="banner-video" />
          </section>

          <section className="video-list">
            {[1, 2, 3, 4, 5, 6,7,8].map((id) => (
              <div key={id} className="video-card">
                <img
                    className="thumbnail"
                    src={`/thumbnails/${id}.jpg`}
                    alt={`영상 ${id} 썸네일`}
                />
                <div className="thumbnail" />
                <div className="video-info">
                  <div className="video-title">[광고] 영상 제목 {id}</div>
                  <div className="channel-name">채널 이름</div>
                  <div className="video-meta">조회수 100만회 · 3일 전</div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App;