import Invitacion from "./components/invitacion"
import Texto from "./components/texto"

export default function Home() {
  return (
    <main className="" id="hero">
      <Texto/>
      <video muted autoPlay loop id="hero">
          <source src="/wallpaper-bulbasaur.mp4" type="video/mp4"></source>
      </video>
    <Invitacion/>
    </main>
  )
}
