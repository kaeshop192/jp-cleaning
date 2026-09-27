import { FormEvent, useState } from 'react';
import { Menu, X, ArrowRight, Factory, Building2, HardHat, Leaf, Phone, MessageCircle } from 'lucide-react';

const services = [
  { name: 'Industrial Cleaning', copy: 'Practical, thorough cleaning for industrial workspaces, units and operational areas.', icon: Factory, img: 'https://images.pexels.com/photos/37443412/pexels-photo-37443412.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'House Construction Cleaning', copy: 'Detailed cleaning for newly built or renovated homes, clearing construction dust and residue so the property is ready for completion or handover.', icon: Building2, img: 'https://images.pexels.com/photos/3616746/pexels-photo-3616746.jpeg?auto=compress&cs=tinysrgb&w=1200' },
  { name: 'Building Site Cleaning', copy: 'Hands-on cleaning support for building sites, helping keep working areas clear and organised throughout the job through to final completion.', icon: HardHat, img: 'https://images.pexels.com/photos/27378843/pexels-photo-27378843.jpeg?auto=compress&cs=tinysrgb&w=1200' }
];

function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };
  const submitDemo = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return <main>
    <header className='nav'>
      <button className='brand' onClick={() => go('home')}><span className='leafLogo'><Leaf size={25}/></span><span><strong>JPA Cleaning</strong><small>CONSTRUCTION · INDUSTRIAL · SITE CLEANING</small></span></button>
      <button className='menu' aria-label='Toggle menu' onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'links open' : 'links'}><button onClick={() => go('home')}>Home</button><button onClick={() => go('services')}>Services</button><button onClick={() => go('about')}>About</button><button onClick={() => go('contact')}>Contact</button><button className='navCta' onClick={() => go('contact')}>Get a Quote</button></nav>
    </header>

    <section className='hero' id='home'><div className='heroShade'/><div className='heroContent'><span className='eyebrow'>JPA CLEANING</span><h1>Specialist Cleaning for Industrial Spaces, New Builds & Building Sites</h1><p>Reliable cleaning services for industrial environments, house construction projects and building sites.</p><div className='actions'><button className='primary' onClick={() => go('contact')}>Request a Quote <ArrowRight size={18}/></button><button className='outline' onClick={() => go('services')}>View Services</button></div></div></section>

    <section className='services' id='services'><div className='sectionHead'><span>OUR SERVICES</span><h2>Specialist cleaning for every stage of your project</h2><p>Practical cleaning for active sites, completed builds and industrial working environments.</p></div><div className='serviceGrid'>{services.map(({ name, copy, icon: Icon, img }) => <article className='serviceCard' key={name}><div className='serviceImg' style={{ backgroundImage: `url('${img}')` }}/><div className='cardBody'><Icon size={23}/><h3>{name}</h3><p>{copy}</p></div></article>)}</div></section>

    <section className='about' id='about'><div className='aboutPhoto'/><div className='aboutCopy'><span>ABOUT JPA CLEANING</span><h2>From site work to final handover.</h2><p>JPA Cleaning focuses on industrial cleaning, house construction cleaning and building site cleaning — keeping working areas cleaner during a project and carrying out detailed cleans before completion and handover.</p><button className='primary' onClick={() => go('contact')}>Request a Quote <ArrowRight size={18}/></button></div></section>

    <section className='quote' id='contact'>
      <div className='quoteIntro'><span>REQUEST A QUOTE</span><h2>Tell us about your site or project.</h2><p>Share the type of cleaning required, the project stage and the location so JPA Cleaning can understand the scope.</p><div className='quickContact'><button type='button'><Phone size={18}/> Call JPA Cleaning</button><button type='button'><MessageCircle size={18}/> WhatsApp</button></div><small>Demo buttons — JPA Cleaning's real contact details will be connected after confirmation.</small></div>
      <form className='quoteForm' onSubmit={submitDemo}>
        <div className='formRow'><label>Name<input name='name' required placeholder='Your name'/></label><label>Phone or email<input name='contact' required placeholder='How can we reach you?'/></label></div>
        <div className='formRow'><label>Cleaning service<select name='service' defaultValue=''><option value='' disabled>Select a service</option><option>Industrial Cleaning</option><option>House Construction Cleaning</option><option>Building Site Cleaning</option><option>Other</option></select></label><label>Postcode / area<input name='area' placeholder='Site or project area'/></label></div>
        <label>What do you need?<textarea name='message' rows={3} placeholder='Tell us about the site, project stage and cleaning required...'/></label>
        <button className='formSubmit' type='submit'>Request a Quote <ArrowRight size={17}/></button>
        {sent && <p className='demoSuccess'>Demo complete — on the live client site, this enquiry would be sent directly to JPA Cleaning.</p>}
      </form>
    </section>

    <footer><div className='brand footerBrand'><span className='leafLogo'><Leaf size={21}/></span><span><strong>JPA Cleaning</strong><small>CONSTRUCTION · INDUSTRIAL · SITE CLEANING</small></span></div><p>Sample website concept for JPA Cleaning.</p><span>© 2026 JPA Cleaning</span></footer>
    <div className='concept'>SAMPLE WEBSITE CONCEPT</div>
  </main>;
}
export default App;