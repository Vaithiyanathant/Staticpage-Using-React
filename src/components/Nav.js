import Image from './image.png';

export default function Nav() {
  return (
    <nav className='container'>
      <img className="logo" alt="logo" src={Image} />
      <h1>ReactFacts</h1>
      <h2>ReactFirst Project</h2>
    </nav>
  );
}
