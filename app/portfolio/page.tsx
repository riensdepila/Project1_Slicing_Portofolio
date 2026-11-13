import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Portfolio 1',
    description: 'Creative portfolio website',
    image: '/Portfolio1.png',
  },
  {
    title: 'Portfolio 2',
    description: 'Analytics dashboard experience',
    image: '/Portfolio2.png',
  },
  {
    title: 'Portfolio 3',
    description: 'Designer portfolio website',
    image: '/Portfolio Image.png',
  },
];

export default function PortfolioPage() {
  return (
    <main className='portfolio-page'>
      <div className='container mx-auto w-full max-w-6xl'>
        <Link className='portfolio-back' href='/#about'>
          ← Back to About
        </Link>
        <span className='eyebrow'>Portfolio</span>
        <h1>Selected work</h1>
        <p className='portfolio-intro'>Explore selected works and real-world projects.</p>
        <div className='portfolio-grid'>
          {portfolioItems.map((item) => (
            <article className='portfolio-item' key={item.title}>
              <div className='portfolio-item-image'>
                <Image src={item.image} alt={`${item.title} preview`} fill sizes='(max-width: 760px) 100vw, 33vw' />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
