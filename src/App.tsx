import { RosterCarousel } from './components/RosterCarousel';
import { roster } from './data/players';
import './styles/roster-carousel.css';

export default function App() {
  return (
    <main className="demo">
      <header className="demo__intro">
        <p className="demo__eyebrow">Interactive roster</p>
        <h1>Meet the team.</h1>
        <p>
          A responsive, touch-friendly roster experience designed to give every
          player a moment in the spotlight.
        </p>
      </header>
      <RosterCarousel members={roster} />
    </main>
  );
}
