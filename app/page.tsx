'use client';

import { FormEvent, ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Menu,
  UserRound,
  X,
} from 'lucide-react';

const navigation = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skill', 'skills'],
  ['Projects', 'projects'],
  ['FAQ', 'faq'],
];

const skills = [
  { name: 'HTML', value: 90, icon: '/html5.png' },
  { name: 'CSS', value: 90, icon: '/css3.png' },
  { name: 'Javascript', value: 90, icon: '/js.png' },
  { name: 'React JS', value: 90, icon: '/react.png' },
  { name: 'Mongo DB', value: 90, icon: '/mongodb.png' },
  { name: 'Docker', value: 90, icon: '/docker.png' },
  { name: 'Express JS', value: 90, icon: '/jsexpress.png' },
  { name: 'PostgreSQL', value: 90, icon: '/postgresql.png' },
];

const orbitTechnologies = [
  { name: 'CSS3', src: '/css3.png' },
  { name: 'Next.js', src: '/nextjs.png' },
  { name: 'MongoDB', src: '/mongodb.png' },
  { name: 'JavaScript', src: '/js.png' },
  { name: 'Docker', src: '/docker.png' },
  { name: 'TypeScript', src: '/ts.png' },
  { name: 'Sequelize', src: '/sequelize.png' },
  { name: 'PostgreSQL', src: '/postgresql.png' },
  { name: 'HTML5', src: '/html5.png' },
  { name: 'Express.js', src: '/jsexpress.png' },
  { name: 'React Native', src: '/reactnative.png' },
  { name: 'React', src: '/react.png' },
];

const strengths = [
  'React Expert',
  'Precise Website Implementation',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Responsive Website Development',
  'UI Design Proficiency (Figma)',
];
const developerNeeds = [
  'Basic React Knowledge',
  'Inconsistent Design Translation',
  'Little to No TypeScript Knowledge',
  'Unstructured Code',
  'Inconsistent Responsiveness',
  'No Design Skills',
];

const projects = [
  {
    name: 'Portfolio 1',
    theme: 'purple',
    image: '/Portfolio1.png',
    title: 'WILLY NIELSEN',
    description: 'Creative portfolio',
  },
  {
    name: 'Portfolio 2',
    theme: 'green',
    image: '/Portfolio2.png',
    title: 'ECONOMIZE',
    description: 'Analytics dashboard',
  },
  {
    name: 'Portfolio 3',
    theme: 'blue',
    image: '/Portfolio Image.png',
    title: 'Willy Nielsen',
    description: 'Designer portfolio',
  },
  {
    name: 'Portfolio 4',
    theme: 'orange',
    image: '/Portfolio1.png',
    title: 'Studio North',
    description: 'Digital studio',
  },
];

const timeline = [
  {
    company: 'Adobe',
    role: 'Frontend Developer',
    years: '2025 – Present',
    image: '/Image.png',
    logo: '/adobe.png',
  },
  {
    company: 'Dribbble',
    role: 'Frontend Developer',
    years: '2025 – Present',
    image: '/Image(2).png',
    logo: '/dribble.png',
  },
  {
    company: 'Dropbox',
    role: 'Frontend Developer',
    years: '2025 – Present',
    image: '/Image(3).png',
    logo: '/dropbox.png',
  },
  {
    company: 'PayPal',
    role: 'Frontend Developer',
    years: '2025 – Present',
    image: '/Image(4).png',
    logo: '/paypal.png',
  },
];

const testimonials = [
  {
    name: 'Sarah Lim',
    title: 'Product Manager at Loopware',
    avatar: '/Ellipse 1980.png',
    text: 'Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.',
  },
  {
    name: 'Sarah Lim',
    title: 'Product Manager at Loopware',
    avatar: '/Ellipse 1980(1).png',
    text: 'Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.',
  },
  {
    name: 'Sarah Lim',
    title: 'Product Manager at Loopware',
    avatar: '/Ellipse 1980(2).png',
    text: 'Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.',
  },
  {
    name: 'Sarah Lim',
    title: 'Product Manager at Loopware',
    avatar: '/Ellipse 1980(3).png',
    text: 'Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.',
  },
];

const faqs = [
  {
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },
  {
    question: 'Do you work on freelance or remote projects?',
    answer:
      'Yes. I’m open to remote collaborations, freelance projects, and thoughtful partnerships with teams around the world.',
  },
  {
    question: 'Can you convert Figma or Sketch designs into code?',
    answer:
      'Absolutely. I turn product designs into responsive, production-ready interfaces while keeping the details and interactions consistent.',
  },
  {
    question: 'Do you collaborate with backend developers or teams?',
    answer:
      'Yes. I enjoy working closely with designers, product teams, and backend developers to ship polished experiences.',
  },
  {
    question: 'Are you available for full-time roles?',
    answer:
      'I’m open to the right opportunity. Use the contact form below and tell me a little about your team.',
  },
];

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className='section-heading'>
      <span className='eyebrow'>{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={`project-preview preview-${project.theme}`}>
      <Image
        className='project-image'
        src={project.image}
        alt={`${project.name} preview`}
        fill
        sizes='(max-width: 760px) 100vw, 33vw'
      />
      <span className='project-label'>{project.name}</span>
    </div>
  );
}

export default function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [messageState, setMessageState] = useState<'success' | 'error' | null>(
    null
  );
  const [openFaq, setOpenFaq] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessageState(
      typeof navigator !== 'undefined' && !navigator.onLine
        ? 'error'
        : 'success'
    );
  };

  const visibleProjects = [
    ...projects.slice(projectIndex),
    ...projects.slice(0, projectIndex),
  ].slice(0, 3);
  const visibleTestimonials = [
    ...testimonials.slice(testimonialIndex),
    ...testimonials.slice(0, testimonialIndex),
  ];

  return (
    <main>
      <section className='hero' id='home'>
        <div className='hero-grid' aria-hidden='true' />
        <header className='site-header container mx-auto w-full max-w-6xl'>
          <a className='brand' href='#home' aria-label='Edwin home'>
            <Image src='/edwin navbar.png' width={620} height={760} alt='' />
            <span>Edwin</span>
          </a>
          <nav className='desktop-nav' aria-label='Main navigation'>
            {navigation.map(([label, href]) => (
              <a key={href} href={`#${href}`}>
                {label}
              </a>
            ))}
          </nav>
          <a href='#contact' className='button button-light header-cta'>
            Hire Me
          </a>
          <button
            className='menu-trigger'
            onClick={() => setMenuOpen(true)}
            aria-label='Open navigation menu'
          >
            <Menu size={23} />
          </button>
        </header>

        <div className='hero-content container mx-auto w-full max-w-6xl'>
          <motion.div
            className='hero-copy'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <h1>
              <span className='highlight'>Crafting</span>
              <br />
              Interfaces, One
              <br />
              Line at a Time
            </h1>
            <p>
              Build fast, accessible, and responsive web experiences that users
              love.
            </p>
            <a className='button button-light hero-cta' href='#contact'>
              Say Hello
            </a>
          </motion.div>
          <motion.div
            className='hero-portrait'
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.24, ease: 'easeOut' }}
          >
            <Image
              src='/edwin hero.png'
              width={760}
              height={760}
              alt='Edwin, frontend developer'
              priority
            />
          </motion.div>
        </div>
        <div className='hero-bottom-glow' aria-hidden='true' />
        <svg
          className='hero-wave'
          viewBox='0 0 1440 110'
          preserveAspectRatio='none'
          aria-hidden='true'
        >
          <path
            d='M0 110C260 48 460 7 720 7s460 41 720 103v0H0V110Z'
            fill='white'
          />
        </svg>
      </section>

      <section className='about-section section-pad' id='about'>
        <div className='container mx-auto w-full max-w-6xl'>
          <SectionHeading
            eyebrow='About'
            title='The Developer Behind the Pixel'
          />
          <div className='about-bento'>
            <Reveal className='about-intro-card'>
              <div className='mini-profile'>
                <Image src='/edwin navbar.png' width={80} height={80} alt='' />
                <div>
                  <strong>Edwin Haryanto</strong>
                  <span>edwin@hello.dev</span>
                </div>
                <div className='mini-socials'>
                  <a href='https://facebook.com' aria-label='Facebook'>
                    <Image src='/fb.png' width={40} height={40} alt='' />
                  </a>
                  <a
                    href='https://www.instagram.com/'
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Instagram (opens in a new tab)'
                  >
                    <Image src='/ig.png' width={40} height={40} alt='' />
                  </a>
                  <a href='https://linkedin.com' aria-label='LinkedIn'>
                    <Image src='/linkedin.png' width={40} height={40} alt='' />
                  </a>
                  <a href='https://tiktok.com' aria-label='TikTok'>
                    <Image src='/tiktok.png' width={40} height={40} alt='' />
                  </a>
                </div>
              </div>
              <h3>Pushing boundaries through innovation</h3>
              <p>
                I create frontend solutions that not only look good but also
                load fast, work everywhere, and scale well.
              </p>
            </Reveal>
            <Reveal className='about-avatar-card' delay={0.08}>
              <Image
                src='/Developer Image Container.png'
                width={393}
                height={440}
                alt='Edwin waving hello'
              />
            </Reveal>
            <Reveal className='about-work-card' delay={0.08}>
              <div className='work-card-top'>
                <div>
                  <span>Check My Portfolio</span>
                  <p>Explore selected works and real-world projects</p>
                </div>
                <Link
                  className='work-card-action'
                  href='/portfolio'
                  aria-label='Open portfolio'
                >
                  <ArrowRight size={20} />
                </Link>
              </div>
              <Image
                className='portfolio-image'
                src='/Portfolio Image.png'
                width={438}
                height={376}
                alt='Screenshot of a portfolio website project'
              />
            </Reveal>
            <Reveal className='about-tech-card' delay={0.16}>
              <div className='orbit' />
              <div className='orbit orbit-one' />
              <div className='orbit orbit-two' />
              <div className='orbit orbit-three' />
              <div className='orbit-icons'>
                {orbitTechnologies.map(({ name, src }, index) => {
                  const startAngle =
                    -60 + index * (120 / orbitTechnologies.length);
                  const transition = {
                    duration: 34,
                    repeat: Infinity,
                    ease: 'linear' as const,
                    delay: -(34 * index) / orbitTechnologies.length,
                  };

                  return (
                    <motion.div
                      key={name}
                      className='orbit-icon-rotor'
                      animate={
                        prefersReducedMotion
                          ? { rotate: startAngle }
                          : { rotate: [-60, 60] }
                      }
                      transition={
                        prefersReducedMotion ? { duration: 0 } : transition
                      }
                    >
                      <span>
                        <motion.div
                          className='orbit-icon-art'
                          animate={
                            prefersReducedMotion
                              ? { rotate: -startAngle }
                              : { rotate: [60, -60] }
                          }
                          transition={
                            prefersReducedMotion ? { duration: 0 } : transition
                          }
                        >
                          <Image src={src} width={48} height={48} alt={name} />
                        </motion.div>
                      </span>
                    </motion.div>
                  );
                })}
              </div>
              <h3>Built with 10+ Trusted Technologies</h3>
            </Reveal>
            <Reveal className='about-side-card' delay={0.2}>
              <a href='mailto:edwin@hello.dev' aria-label='Email Edwin'>
                <Image src='/email.png' width={44} height={34} alt='' />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className='skills-section section-pad' id='skills'>
        <div className='skills-grid' aria-hidden='true' />
        <div className='container mx-auto w-full max-w-6xl section-layer'>
          <SectionHeading
            eyebrow='Skillset'
            title='Skills That Build Great Interfaces'
          />
          <div className='skill-grid'>
            {skills.map((skill, index) => (
              <Reveal key={skill.name} delay={index * 0.035}>
                <motion.div
                  className='skill-card'
                  whileHover={{ y: -5, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                >
                  <div
                    className='skill-ring'
                    style={{
                      background: `conic-gradient(var(--secondary-100) ${skill.value}%, var(--neutral-200) ${skill.value}% 100%)`,
                    }}
                  >
                    <div className='ring-center'>
                      <strong>{skill.value}%</strong>
                    </div>
                  </div>
                  <div className='skill-name'>
                    <Image
                      className='skill-icon'
                      src={skill.icon}
                      width={20}
                      height={20}
                      alt=''
                    />
                    {skill.name}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='strengths-section section-pad'>
        <div className='container mx-auto w-full max-w-6xl'>
          <SectionHeading
            eyebrow='Superiority'
            title='Built with design, speed, and UX in mind.'
          />
          <div className='comparison-grid'>
            <Reveal className='comparison-card working-card'>
              <div className='comparison-heading'>
                <span>Working with me</span>
                <Image
                  src='/edwin navbar.png'
                  width={80}
                  height={80}
                  alt='Edwin Haryanto'
                />
              </div>
              <ul>
                {strengths.map((item) => (
                  <li key={item}>
                    <Image
                      className='comparison-icon'
                      src='/Frame.png'
                      width={32}
                      height={32}
                      alt=''
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className='comparison-card needs-card' delay={0.1}>
              <div className='comparison-heading'>
                <span>Another Developer</span>
                <div className='generic-avatar'>
                  <UserRound size={40} strokeWidth={2.6} />
                </div>
              </div>
              <ul>
                {developerNeeds.map((item) => (
                  <li key={item}>
                    <Image
                      className='comparison-icon comparison-icon-muted'
                      src='/Frame(1).png'
                      width={32}
                      height={32}
                      alt=''
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className='center-cta'>
            <a className='button button-blue' href='#contact'>
              Hire Me
            </a>
          </div>
        </div>
      </section>

      <section className='projects-section section-pad' id='projects'>
        <div className='container mx-auto w-full max-w-6xl'>
          <SectionHeading
            eyebrow='Portfolio'
            title='Built with Passion, Shipped with Precision'
          />
          <div className='project-carousel'>
            <div className='project-cards'>
              {visibleProjects.map((project, index) => (
                <Reveal key={project.name} delay={index * 0.06}>
                  <motion.a
                    href='#contact'
                    className='project-card'
                    whileHover={{ y: -6 }}
                  >
                    <ProjectPreview project={project} />
                  </motion.a>
                </Reveal>
              ))}
            </div>
            <div className='carousel-controls'>
              <button
                onClick={() =>
                  setProjectIndex(
                    (projectIndex + projects.length - 1) % projects.length
                  )
                }
                aria-label='Previous project'
              >
                <ArrowLeft size={15} />
              </button>
              <button
                onClick={() =>
                  setProjectIndex((projectIndex + 1) % projects.length)
                }
                aria-label='Next project'
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='timeline-section section-pad' id='experience'>
        <div
          className='timeline-decoration timeline-decoration-top'
          aria-hidden='true'
        />
        <div className='container mx-auto w-full max-w-6xl timeline-layer'>
          <SectionHeading
            eyebrow='Work Experience'
            title='A timeline of companies and roles that helped shape my skills.'
          />
          <div className='timeline-list'>
            {timeline.map((item, i) => (
              <div
                className={`timeline-row timeline-row-${i}`}
                key={item.company}
              >
                <Reveal className='timeline-image' delay={i * 0.035}>
                  <Image
                    className='team-art'
                    src={item.image}
                    alt={`${item.company} team collaboration`}
                    fill
                    sizes='(max-width: 760px) 100vw, 50vw'
                  />
                </Reveal>
                <Reveal className='timeline-copy' delay={i * 0.035 + 0.08}>
                  <span className='timeline-dates'>
                    <Image
                      src='/lets-icons_date-today-duotone.png'
                      width={18}
                      height={18}
                      alt=''
                    />
                    {item.years}
                  </span>
                  <div className='company-logo'>
                    <Image
                      src={item.logo}
                      width={97}
                      height={35}
                      alt={`${item.company} logo`}
                    />
                  </div>
                  <h3>{item.role}</h3>
                  <p>
                    Builds responsive and high-performance web applications with
                    clean, maintainable code. Expert in translating UI/UX
                    designs into pixel-perfect interfaces using modern
                    frameworks. Focused on optimizing performance,
                    accessibility, and seamless user experiences
                  </p>
                </Reveal>
                <span className='timeline-node' aria-hidden='true' />
              </div>
            ))}
          </div>
        </div>
        <div
          className='timeline-decoration timeline-decoration-bottom'
          aria-hidden='true'
        />
      </section>

      <section className='testimonials-section section-pad' id='testimonials'>
        <div className='container mx-auto w-full max-w-6xl'>
          <div className='testimonial-heading'>
            <div>
              <span className='eyebrow'>Testimony</span>
              <h2>Built with Trust &amp; Collaboration</h2>
            </div>
            <div className='carousel-controls'>
              <button
                onClick={() =>
                  setTestimonialIndex(
                    (testimonialIndex + testimonials.length - 1) %
                      testimonials.length
                  )
                }
                aria-label='Previous review'
              >
                <ArrowLeft size={15} />
              </button>
              <button
                onClick={() =>
                  setTestimonialIndex(
                    (testimonialIndex + 1) % testimonials.length
                  )
                }
                aria-label='Next review'
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
          <div className='testimonial-grid'>
            {visibleTestimonials.map((item, i) => (
              <Reveal key={item.avatar} delay={i * 0.04}>
                <motion.article
                  className='testimonial-card'
                  whileHover={{ y: -4 }}
                >
                  <div className='testimonial-person'>
                    <Image src={item.avatar} width={90} height={90} alt='' />
                    <div className='stars' aria-label='5 out of 5 stars'>
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <Image
                          key={starIndex}
                          src='/line-md_star-filled.png'
                          width={20}
                          height={20}
                          alt=''
                        />
                      ))}
                    </div>
                  </div>
                  <p>“{item.text}”</p>
                  <div className='testimonial-author'>
                    <strong>— {item.name}</strong>
                    <span>{item.title}</span>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className='faq-contact-section' id='faq'>
        <div className='faq-glow' aria-hidden='true' />
        <Reveal className='faq-panel container mx-auto w-full max-w-6xl'>
          <SectionHeading eyebrow='FAQ' title='Need More Info? Start Here' />
          <div className='faq-list'>
            {faqs.map((faq, i) => {
              const open = i === openFaq;
              return (
                <div
                  className={`faq-item ${open ? 'is-open' : ''}`}
                  key={faq.question}
                >
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                  >
                    <span>{faq.question}</span>
                    <span className='faq-toggle'>{open ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        className='faq-answer-wrap'
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24 }}
                      >
                        <p className='faq-answer'>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      <footer className='site-footer' id='contact'>
        <div className='footer-container container mx-auto w-full max-w-6xl'>
          <div className='footer-left'>
            <a className='footer-person' href='#home'>
              <Image src='/edwin navbar.png' width={80} height={80} alt='' />
              <span>
                <strong>Edwin Anderson</strong>
                <small>edwinanderson@email.com</small>
              </span>
            </a>
            <h2>
              Great results begin
              <br />
              with clear ideas.
            </h2>
            <p>Have an idea in mind? Let’s make it real together.</p>
            <div className='footer-socials'>
              <a href='https://facebook.com' aria-label='Facebook'>
                <Image src='/fb.png' width={24} height={24} alt='' />
              </a>
              <a href='https://linkedin.com' aria-label='LinkedIn'>
                <Image src='/linkedin.png' width={24} height={24} alt='' />
              </a>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'
                aria-label='Instagram (opens in a new tab)'
              >
                <Image src='/ig.png' width={24} height={24} alt='' />
              </a>
              <a href='https://tiktok.com' aria-label='TikTok'>
                <Image src='/tiktok.png' width={24} height={24} alt='' />
              </a>
            </div>
          </div>
          <form className='contact-form' onSubmit={sendMessage}>
            <div className='contact-kicker'>Contact</div>
            <h2>Start Your Next Project</h2>
            <label>
              <span>
                Name<span className='required-mark'>*</span>
              </span>
              <input
                name='name'
                type='text'
                placeholder='What should I call you?...'
                required
              />
            </label>
            <label>
              <span>
                Email<span className='required-mark'>*</span>
              </span>
              <input
                name='email'
                type='email'
                inputMode='email'
                autoComplete='email'
                placeholder='Where can I reach you? ...'
                required
              />
            </label>
            <label>
              <span>
                Message<span className='required-mark'>*</span>
              </span>
              <textarea
                name='message'
                placeholder='Tell me about your project or just say hi :) ...'
                rows={3}
                required
              />
            </label>
            <button className='button button-blue submit-button' type='submit'>
              Send Message
            </button>
          </form>
        </div>
        <div className='footer-bottom container mx-auto w-full max-w-6xl'>
          <span>© 2025 Edwin Anderson. All rights reserved.</span>
        </div>
      </footer>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className='mobile-menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className='mobile-menu-head'>
              <a
                className='brand menu-brand'
                href='#home'
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src='/edwin navbar.png'
                  width={620}
                  height={760}
                  alt=''
                />
                <span>Edwin</span>
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label='Close navigation menu'
              >
                <X size={24} />
              </button>
            </div>
            <nav aria-label='Mobile navigation'>
              {navigation.map(([label, href]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              className='button button-blue mobile-hire'
              href='#contact'
              onClick={() => setMenuOpen(false)}
            >
              Hire Me <ArrowUpRight size={16} />
            </a>
            <span className='mobile-menu-caption'>
              Thoughtful design. Friendly code.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog.Root
        open={messageState !== null}
        onOpenChange={(open) => !open && setMessageState(null)}
      >
        <AnimatePresence>
          {messageState && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className='dialog-overlay'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </Dialog.Overlay>
              <Dialog.Content asChild forceMount>
                <motion.div
                  className='message-modal'
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                >
                  <Image
                    className='popup-image'
                    src={
                      messageState === 'success'
                        ? '/Popup.png'
                        : '/Popup(1).png'
                    }
                    width={454}
                    height={471}
                    alt={
                      messageState === 'success'
                        ? 'Message sent successfully'
                        : 'Message failed to send'
                    }
                  />
                  <Dialog.Title className='sr-only'>
                    {messageState === 'success'
                      ? 'Got Your Message!'
                      : 'Message Failed to Send'}
                  </Dialog.Title>
                  <Dialog.Description className='sr-only'>
                    {messageState === 'success'
                      ? 'Really appreciate you reaching out. I’ll be in touch soon.'
                      : 'Sorry about that. Please check your connection and try again.'}
                  </Dialog.Description>
                  <Dialog.Close asChild>
                    <button
                      className='popup-action'
                      onClick={() => setMessageState(null)}
                      aria-label={
                        messageState === 'success'
                          ? 'Back to Home'
                          : 'Try Again'
                      }
                    />
                  </Dialog.Close>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </main>
  );
}
