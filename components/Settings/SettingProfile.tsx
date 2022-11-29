export default function SettingProfile() {
  return (
    <div className="profile">
        <img className="avatar-xl" src="dist/img/avatars/avatar-male-1.jpg" alt="avatar" />
        <h1><a href="#">Michael Knudsen</a></h1>
        <span>Helena, Montana</span>
        <div className="stats">
            <div className="item">
                <h2>122</h2>
                <h3>Fellas</h3>
            </div>
            <div className="item">
                <h2>305</h2>
                <h3>Chats</h3>
            </div>
            <div className="item">
                <h2>1538</h2>
                <h3>Posts</h3>
            </div>
        </div>
    </div>
  )
}
