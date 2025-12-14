export default function Nav(){
  return (
    <header className="nav">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div className="brand">Sammunat</div>
        <nav>
          <a className="cta" href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
