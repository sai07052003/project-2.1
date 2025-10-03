import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const GameDevelopmentService = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeService, setActiveService] = useState('design');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleServiceChange = (service) => {
    setActiveService(service);
  };

  const faqs = [
    { question: "What platforms do you develop games for?", answer: "We build games for mobile (iOS & Android), PC, consoles, and AR/VR platforms." },
    { question: "Do you provide both 2D and 3D game development?", answer: "Yes, we specialize in both 2D casual games and high-quality 3D immersive games." },
    { question: "Can you help with publishing on app stores?", answer: "Yes, we assist with publishing, marketing strategies, and post-launch updates." },
    { question: "Do you create multiplayer or online games?", answer: "Absolutely, we develop multiplayer, co-op, and online games with scalable servers." },
    { question: "Do you offer game design and storytelling?", answer: "Yes, our creative team provides complete storytelling, level design, and character creation." }
  ];

  const services = {
    design: [
      { name: "Concept Design", logo: "🎨", description: "Creative storylines & engaging gameplay ideas" },
      { name: "Character Design", logo: "🧙‍♂️", description: "Unique characters with personality & depth" },
      { name: "Level Design", logo: "🗺️", description: "Exciting levels with balanced challenges" },
      { name: "Game UI/UX", logo: "🎮", description: "User-friendly game menus & interfaces" }
    ],
    development: [
      { name: "2D Game Development", logo: "🕹️", description: "Casual and arcade-style 2D games" },
      { name: "3D Game Development", logo: "🌍", description: "Immersive 3D games for all platforms" },
      { name: "AR/VR Games", logo: "🕶️", description: "Next-gen AR/VR gaming experiences" },
      { name: "Multiplayer Games", logo: "🌐", description: "Online & multiplayer game solutions" }
    ],
    postlaunch: [
      { name: "Game Testing", logo: "🧪", description: "Bug-free & optimized gameplay" },
      { name: "Monetization Strategy", logo: "💰", description: "Ads, in-app purchases, and subscriptions" },
      { name: "Publishing Support", logo: "🚀", description: "Assistance with App Store & Play Store" },
      { name: "Ongoing Updates", logo: "🔄", description: "Regular patches & new content updates" }
    ]
  };

  return (
    <div className="gamedev">
      <section className="hero">
        <div className="container">
          <h1>Game Development Services</h1>
          <p>Transform your vision into interactive and immersive gaming experiences.</p>
          <a href="#contact" className="btn">Start Your Game Project</a>
        </div>
      </section>

      <section className="overview">
        <div className="container mb-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Game Development
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Bring Ideas to Life</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>At Techlynx Innovations, we create cutting-edge games that entertain, engage, and inspire players worldwide.</p>
              <p className='text-body fs-5'>From concept design to development and post-launch updates, we deliver complete game development solutions.</p>
            </div>
            <div className="overview-image">
              <img src="https://tse3.mm.bing.net/th/id/OIP.yLBp6oHpk3AR-H3sQwlw3wHaD4?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Game Development" />
            </div>
          </div>
        </div>
      </section>

      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <p className="text-center">Comprehensive game development solutions</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🎨</div>
              <h3>Game Design</h3>
              <p className='text-dark fs-5'>From concept art to storylines.</p>
              <ul>
                <li>Character design</li>
                <li>Level design</li>
                <li>Game UI/UX</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🕹️</div>
              <h3>Game Development</h3>
              <p className='text-dark fs-5'>Engaging 2D & 3D experiences.</p>
              <ul>
                <li>2D/3D development</li>
                <li>Multiplayer games</li>
                <li>AR/VR experiences</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🧪</div>
              <h3>Game Testing</h3>
              <p className='text-dark fs-5'>Optimized for seamless gameplay.</p>
              <ul>
                <li>Performance testing</li>
                <li>Bug fixing</li>
                <li>Playtesting</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🚀</div>
              <h3>Publishing & Support</h3>
              <p className='text-dark fs-5'>From launch to updates.</p>
              <ul>
                <li>Store publishing</li>
                <li>Monetization strategy</li>
                <li>Post-launch updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="text-center">Our Expertise</h2>
          <p className="text-center">Complete solutions for every stage of game development</p>
          <div className="service-tabs">
            <button className={`service-tab ${activeService === 'design' ? 'active' : ''}`} onClick={() => handleServiceChange('design')}>
              Design
            </button>
            <button className={`service-tab ${activeService === 'development' ? 'active' : ''}`} onClick={() => handleServiceChange('development')}>
              Development
            </button>
            <button className={`service-tab ${activeService === 'postlaunch' ? 'active' : ''}`} onClick={() => handleServiceChange('postlaunch')}>
              Post-Launch
            </button>
          </div>
          <div className="tech-grid">
            {services[activeService].map((service, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">{service.logo}</div>
                <h3>{service.name}</h3>
                <p className='text-dark'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <h2 className="text-center">Why Choose Us</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Creative Expertise</h3>
              <p className='text-dark fs-5'>Talented designers & storytellers.</p>
            </div>
            <div className="benefit">
              <h3>Cross-Platform</h3>
              <p className='text-dark fs-5'>Games for mobile, PC, and consoles.</p>
            </div>
            <div className="benefit">
              <h3>End-to-End Support</h3>
              <p className='text-dark fs-5'>From concept to updates & beyond.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">Client Feedback</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx brought our fantasy RPG to life with stunning visuals and smooth gameplay."</p>
              <p className="testimonial-author">- Sarah Parker, Indie Studio CEO</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their multiplayer support made our game an instant hit with players worldwide."</p>
              <p className="testimonial-author">- David Johnson, Game Producer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Concept</h3>
              <p className='text-dark'>Brainstorming ideas and game design.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design</h3>
              <p className='text-dark'>Art, characters, and levels creation.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p className='text-dark'>Coding and building game mechanics.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p className='text-dark'>Debugging & performance optimization.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Launch</h3>
              <p className='text-dark '>Publishing & continuous updates.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Pricing</h2>
          <p className="text-center text-dark">Flexible packages for all types of games</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Indie Starter</h3>
              <p>For small 2D/mini games</p>
              <div className="price">₹50,000+</div>
              <ul className="plan-features">
                <li>Basic concept design</li>
                <li>2D development</li>
                <li>Basic testing</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Popular</div>
              <h3>Pro Studio</h3>
              <p>For mid-size 3D games</p>
              <div className="price">₹2,00,000+</div>
              <ul className="plan-features">
                <li>3D development</li>
                <li>Multiplayer integration</li>
                <li>AR/VR support</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise Gaming</h3>
              <p>Full-scale AAA game support</p>
              <div className="price">₹5,00,000+</div>
              <ul className="plan-features">
                <li>High-end 3D/VR games</li>
                <li>Advanced multiplayer</li>
                <li>Publishing & monetization</li>
                <li>12 months support</li>
              </ul>
              <a href="#contact" className="btn">Get a Quote</a>
            </div>
          </div>
          <p className="text-center text-dark" style={{ marginTop: "2rem" }}><a href="#contact">Contact us</a> for custom game development solutions.</p>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2 className="text-center">FAQs</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question} <span>{openFaqIndex === index ? '-' : '+'}</span>
              </div>
              {openFaqIndex === index && (
                <div className="faq-answer active">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container">
          <h2>Build Your Dream Game</h2>
          <p>Let’s bring your vision to life with our game development expertise.</p>
          <Link to="/contact-us" className="btn">Get in Touch</Link>
        </div>
      </section>

      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #e91e63;
          --accent: #3498db;
          --light: #f8f9fa;
          --dark: #2c3e50;
          --text: #333;
          --text-light: #7f8c8d;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { line-height: 1.6; color: var(--text); background-color: #ffffff; }
        .container { width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 15px; }
        h1, h2, h3, h4 { color: var(--primary); margin-bottom: 1rem; line-height: 1.2; }
        h1 { font-size: 2.5rem; } h2 { font-size: 2rem; } h3 { font-size: 1.5rem; }
        p { margin-bottom: 1rem; }
        .btn {
          display: inline-block; background: var(--secondary); color: white; padding: 0.8rem 1.8rem;
          border: none; border-radius: 30px; cursor: pointer; text-decoration: none; font-weight: 600;
          transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(233, 30, 99, 0.3);
        }
        .btn:hover { background: #c2185b; transform: translateY(-3px); box-shadow: 0 6px 8px rgba(233, 30, 99, 0.4); }
        .text-center { text-align: center; }
        section { padding: 5rem 0; }
        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(233, 30, 99, 0.8)), 
                     url('https://images.unsplash.com/photo-1558089687-0f3d8f7c036a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover; background-position: center; color: white; padding: 8rem 0; text-align: center;
        }
        .hero h1 { color: white; font-size: 3.2rem; margin-bottom: 1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        .hero p { font-size: 1.3rem; max-width: 700px; margin: 0 auto 2.5rem; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .overview { background: white; }
        .overview-content { display: flex; align-items: center; gap: 4rem; }
        .overview-text { flex: 1; }
        .overview-image { flex: 1; border-radius: 12px; overflow: hidden; box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .overview-image img { width: 100%; height: auto; display: block; transition: transform 0.5s ease; }
        .overview-image img:hover { transform: scale(1.03); }
        .offerings { background: var(--light); }
        .offering-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-top: 2rem; }
        .offering-card {
          background: white; border-radius: 12px; padding: 2.5rem; box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease; border-top: 4px solid var(--secondary); text-align: center;
        }
        .offering-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .offering-card h3 { color: var(--secondary); margin: 1.2rem 0; }
        .offering-card .icon { font-size: 3rem; color: var(--secondary); margin-bottom: 1rem; }
        .offering-card ul { list-style: none; padding: 0; margin: 1.5rem 0; text-align: left; }
        .offering-card ul li { padding: 0.5rem 0; position: relative; padding-left: 1.5rem; }
        .offering-card ul li:before { content: "✓"; color: var(--secondary); position: absolute; left: 0; font-weight: bold; }
        .services { background: white; }
        .service-tabs { display: flex; justify-content: center; margin: 2.5rem 0; flex-wrap: wrap; }
        .service-tab {
          padding: 0.9rem 2.2rem; background: #ff6f61; border: none; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; margin: 0.5rem; border-radius: 30px; font-size: 1.1rem;
        }
        .service-tab.active { background: var(--secondary); color: white; }
        .tech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .tech-card {
          background: white; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease; border: 1px solid #f1f1f1;
        }
        .tech-card:hover { transform: translateY(-7px); box-shadow: 0 12px 25px rgba(0,0,0,0.1); }
        .tech-logo { font-size: 3rem; margin-bottom: 1.5rem; }
        .why-us { background: linear-gradient(to bottom, #f8f9fa, #f1f3f5); }
        .benefits { display: flex; flex-wrap: wrap; gap: 2.5rem; margin-top: 2rem; }
        .benefit {
          flex: 1; min-width: 300px; background: white; padding: 2.5rem; border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); transition: all 0.3s ease; border-left: 4px solid var(--secondary);
        }
        .benefit:hover { transform: translateY(-5px); }
        .testimonials { margin-top: 4rem; }
        .testimonial {
          background: white; padding: 2.5rem; border-radius: 12px; margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); position: relative;
        }
        .testimonial:before {
          content: '"'; position: absolute; top: -15px; left: 20px; font-size: 4rem;
          color: var(--secondary); opacity: 0.2; font-family: Georgia, serif;
        }
        .testimonial-author { font-weight: bold; margin-top: 1.5rem; color: var(--secondary); font-style: italic; }
        .process { background: white; }
        .process-steps { display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 3rem; position: relative; }
        .process-steps:before {
          content: ""; position: absolute; top: 50px; left: 10%; right: 10%; height: 3px;
          background: var(--secondary); z-index: 1;
        }
        .step {
          flex: 1; min-width: 180px; text-align: center; padding: 2rem 1.5rem; position: relative; z-index: 2;
          background: white; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }
        .step-number {
          background: var(--secondary); color: white; width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-weight: bold;
          font-size: 1.5rem; box-shadow: 0 5px 10px rgba(233, 30, 99, 0.3);
        }
        .pricing { background: linear-gradient(to bottom, #f1f3f5, #f8f9fa); }
        .pricing-plans { display: flex; flex-wrap: wrap; gap: 2.5rem; margin-top: 3rem; }
        .plan {
          flex: 1; min-width: 300px; background: white; border-radius: 12px; padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); position: relative; transition: all 0.3s ease;
        }
        .plan.featured { transform: scale(1.05); border: 2px solid var(--secondary); z-index: 2; }
        .plan.featured:hover { transform: scale(1.07); }
        .plan:hover { transform: translateY(-10px); }
        .popular-badge {
          position: absolute; top: -12px; right: 20px; background: var(--secondary); color: white;
          padding: 5px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: bold;
        }
        .plan h3 { color: var(--secondary); border-bottom: 2px solid var(--light); padding-bottom: 1.2rem; margin-bottom: 1.2rem; }
        .price { font-size: 2.8rem; font-weight: bold; color: var(--primary); margin: 1.5rem 0; }
        .plan-features { list-style: none; margin: 2rem 0; padding: 0; }
        .plan-features li { padding: 0.8rem 0; border-bottom: 1px solid #eee; text-align: center; position: relative; padding-left: 1.8rem; }
        .plan-features li:before { content: "•"; color: var(--secondary); position: absolute; left: 0; font-size: 1.5rem; top: 0.4rem; }
        .faq { background: white; }
        .faq-item { margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .faq-question {
          font-weight: bold; color: var(--primary); cursor: pointer; display: flex; justify-content: space-between;
          align-items: center; padding: 1.5rem; background: var(--light); transition: background 0.3s ease; font-size: 1.1rem;
        }
        .faq-question:hover { background: #e9ecef; }
        .faq-answer { padding: 0; max-height: 0; overflow: hidden; transition: all 0.3s ease; }
        .faq-answer.active { padding: 1.5rem; max-height: 500px; }
        .cta {
          background: linear-gradient(135deg, var(--secondary), #c2185b); color: white; text-align: center; padding: 6rem 0;
        }
        .cta h2 { color: white; font-size: 2.5rem; margin-bottom: 1.5rem; }
        .cta p { max-width: 700px; margin: 0 auto 2.5rem; font-size: 1.2rem; }
        .cta .btn { background: white; color: var(--secondary); margin-top: 1.5rem; font-size: 1.2rem; padding: 1rem 2.5rem; }
        @media (max-width: 768px) {
          .overview-content { flex-direction: column; }
          .hero h1 { font-size: 2.3rem; }
          .process-steps:before { display: none; }
          .plan.featured { transform: scale(1); }
          section { padding: 3.5rem 0; }
        }
      `}</style>
    </div>
  );
};

export default GameDevelopmentService;