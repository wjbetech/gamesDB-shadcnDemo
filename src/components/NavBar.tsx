export default function NavBar() {
  return (
    <div className="navbar py-8 container flex justify-between max-w-{90%}">
      <div className="nav-left">
        <a href="#">
          <h1 className="text-2xl">GamesDB</h1>
        </a>
      </div>
      <div className="nav-right flex gap-8">
        <a href="#">Home</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}
