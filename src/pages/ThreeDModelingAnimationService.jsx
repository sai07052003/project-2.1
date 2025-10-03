import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ThreeDModelingAnimationService = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeStack, setActiveStack] = useState('3d');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleStackChange = (stack) => {
    setActiveStack(stack);
  };

  const faqs = [
    {
      question: "What industries do you serve with 3D modeling?",
      answer: "We provide 3D solutions for gaming, films, advertising, architecture, product design, e-commerce, and education."
    },
    {
      question: "Do you create product animations?",
      answer: "Yes, we create realistic 3D product animations for marketing, prototyping, and presentations."
    },
    {
      question: "Can you design for AR/VR experiences?",
      answer: "Absolutely! We build immersive 3D assets optimized for AR/VR and Metaverse applications."
    },
    {
      question: "Do you offer custom character design?",
      answer: "Yes, our artists specialize in creating unique characters, environments, and animations."
    },
    {
      question: "What software do you use?",
      answer: "We use Blender, Autodesk Maya, Cinema4D, Unity, Unreal Engine, and Adobe After Effects."
    }
  ];

  const stacks = {
    "3d": [
      { name: "Blender", logo: "🐵", description: "Open-source 3D modeling, texturing, and animation" },
      { name: "Autodesk Maya", logo: "🎨", description: "High-end 3D modeling, rigging & animation" },
      { name: "Cinema 4D", logo: "🎬", description: "Motion graphics and 3D visualizations" },
      { name: "ZBrush", logo: "🖌️", description: "Digital sculpting for characters and objects" }
    ],
    "animation": [
      { name: "After Effects", logo: "✨", description: "2D/3D compositing and motion design" },
      { name: "Unity 3D", logo: "🎮", description: "Real-time 3D environments & game animations" },
      { name: "Unreal Engine", logo: "⚡", description: "Cinematic animation & immersive experiences" },
      { name: "Moho/Spine", logo: "🦴", description: "2D character rigging & skeletal animation" }
    ],
    "visuals": [
      { name: "Rendering Engines", logo: "🌐", description: "Cycles, V-Ray, Arnold for realistic rendering" },
      { name: "Architectural Viz", logo: "🏠", description: "Interior, exterior, and walkthrough models" },
      { name: "Product Demos", logo: "📦", description: "Interactive 3D prototypes & ads" },
      { name: "AR/VR Assets", logo: "👓", description: "Immersive 3D content for AR/VR apps" }
    ]
  };

  return (
    <div className="modeling-animation">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>3D Modeling & Animation Services</h1>
          <p className="fs-5">Bring your ideas to life with stunning 3D models, animations, and immersive experiences.</p>
          <a href="#contact" className="btn">Request Demo</a>
        </div>
      </section>

      {/* Service Overview */}
      <section className="overview">
        <div className="container mb-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                3D Modeling & Animation
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Visual Storytelling Through 3D</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">At Techlynx Innovations, we design realistic 3D assets and animations that elevate your brand, products, and projects.</p>
              <p className="text-body fs-5">From character modeling and motion graphics to architectural visualization and AR/VR experiences, we craft visually stunning solutions.</p>
              <p className="text-body fs-5">Our team uses industry-leading tools to deliver precision, creativity, and immersive digital storytelling.</p>
            </div>
            <div className="overview-image">
              <img src="https://5.imimg.com/data5/SELLER/Default/2024/3/397118331/XO/GP/QL/2825084/3d-modeling-animation-services-1000x1000.jpeg" alt="3D Modeling & Animation" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our 3D & Animation Services</h2>
          <p className="text-center text-body">Creative 3D solutions for business, entertainment, and technology</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🖌️</div>
              <h3>3D Modeling</h3>
              <p className="text-primary fs-5">Custom 3D assets for products, architecture, and characters.</p>
              <ul>
                <li>Product design</li>
                <li>Architectural visualization</li>
                <li>Game assets</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🎬</div>
              <h3>Animation</h3>
              <p className="text-primary fs-5">Cinematic animations for storytelling and branding.</p>
              <ul>
                <li>Character animation</li>
                <li>Explainer videos</li>
                <li>Motion graphics</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🏗️</div>
              <h3>Visualizations</h3>
              <p className="text-primary fs-5">3D environments for real estate, ads, and simulations.</p>
              <ul>
                <li>Interior & exterior walkthroughs</li>
                <li>Simulation design</li>
                <li>AR/VR experiences</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📦</div>
              <h3>Product Animation</h3>
              <p className="text-primary fs-5">Showcase products with realistic 3D demos.</p>
              <ul>
                <li>Interactive product views</li>
                <li>Advertising visuals</li>
                <li>Prototype visualization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Expertise */}
      <section className="stacks">
        <div className="container">
          <h2 className="text-center">Our 3D & Animation Expertise</h2>
          <p className="text-center text-dark f5-5">Cutting-edge tools and platforms for world-class visuals</p>
          <div className="stack-tabs">
            <button className={`stack-tab ${activeStack === '3d' ? 'active' : ''}`} onClick={() => handleStackChange('3d')}>
              3D Design
            </button>
            <button className={`stack-tab ${activeStack === 'animation' ? 'active' : ''}`} onClick={() => handleStackChange('animation')}>
              Animation
            </button>
            <button className={`stack-tab ${activeStack === 'visuals' ? 'active' : ''}`} onClick={() => handleStackChange('visuals')}>
              Visualization
            </button>
          </div>
          <div className="tech-grid">
            {stacks[activeStack].map((tech, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">{tech.logo}</div>
                <h3>{tech.name}</h3>
                <p className="text-dark">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="text-center">3D Modeling & Animation FAQs</h2>
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

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="container">
          <h2>Want Stunning 3D Visuals?</h2>
          <p>Let us design engaging 3D models and animations that make your brand unforgettable.</p>
          <Link to="/contact-us" className="btn">Get Started</Link>
        </div>
      </section>

      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #00b894;
          --accent: #3498db;
          --light: #f8f9fa;
          --dark: #2c3e50;
          --text: #333;
          --text-light: #7f8c8d;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
          line-height: 1.6;
          color: var(--text);
          background-color: #ffffff;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 15px;
        }

        h1, h2, h3, h4 {
          color: var(--primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        h1 { font-size: 2.5rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.5rem; }

        p { margin-bottom: 1rem; }

        .btn {
          display: inline-block;
          background: var(--secondary);
          color: white;
          padding: 0.8rem 1.8rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 184, 148, 0.3);
        }

        .btn:hover {
          background: #009c7b;
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(0, 184, 148, 0.4);
        }

        .text-center { text-align: center; }

        section { padding: 5rem 0; }

        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(0, 184, 148, 0.8));
          background-size: cover;
          background-position: center;
          color: white;
          padding: 8rem 0;
          text-align: center;
        }

        .hero h1 {
          color: white;
          font-size: 3.2rem;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .hero p {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        .overview { background: white; }

        .overview-content {
          display: flex;
          align-items: center;
          gap: 4rem;
        }

        .overview-text { flex: 1; }

        .overview-image {
          flex: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .overview-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .overview-image img:hover { transform: scale(1.03); }

        .offerings { background: var(--light); }

        .offering-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .offering-card {
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border-top: 4px solid var(--secondary);
          text-align: center;
        }

        .offering-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .offering-card h3 {
          color: var(--secondary);
          margin: 1.2rem 0;
        }

        .offering-card .icon {
          font-size: 3rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .offering-card ul {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          text-align: left;
        }

        .offering-card ul li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .offering-card ul li:before {
          content: "✓";
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .stacks { background: white; }

        .stack-tabs {
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .stack-tab {
          padding: 0.9rem 2.2rem;
          background: #ff6f61;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0.5rem;
          border-radius: 30px;
          font-size: 1.1rem;
        }

        .stack-tab.active {
          background: var(--secondary);
          color: white;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .tech-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: 1px solid #f1f1f1;
        }

        .tech-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.1);
        }

        .tech-logo {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .why-us { background: linear-gradient(to bottom, #f8f9fa, #f1f3f5); }

        .benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .benefit {
          flex: 1;
          min-width: 300px;
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border-left: 4px solid var(--secondary);
        }

        .benefit:hover { transform: translateY(-5px); }

        .testimonials { margin-top: 4rem; }

        .testimonial {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          position: relative;
        }

        .testimonial:before {
          content: '"';
          position: absolute;
          top: -15px;
          left: 20px;
          font-size: 4rem;
          color: var(--secondary);
          opacity: 0.2;
          font-family: Georgia, serif;
        }

        .testimonial-author {
          font-weight: bold;
          margin-top: 1.5rem;
          color: var(--secondary);
          font-style: italic;
        }

        .process { background: white; }

        .process-steps {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 3rem;
          position: relative;
        }

        .process-steps:before {
          content: "";
          position: absolute;
          top: 50px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: var(--secondary);
          z-index: 1;
        }

        .step {
          flex: 1;
          min-width: 180px;
          text-align: center;
          padding: 2rem 1.5rem;
          position: relative;
          z-index: 2;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .step-number {
          background: var(--secondary);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-weight: bold;
          font-size: 1.5rem;
          box-shadow: 0 5px 10px rgba(0, 184, 148, 0.3);
        }

        .pricing { background: linear-gradient(to bottom, #f1f3f5, #f8f9fa); }

        .pricing-plans {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .plan {
          flex: 1;
          min-width: 300px;
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          position: relative;
          transition: all 0.3s ease;
        }

        .plan.featured {
          transform: scale(1.05);
          border: 2px solid var(--secondary);
          z-index: 2;
        }

        .plan.featured:hover { transform: scale(1.07); }

        .plan:hover { transform: translateY(-10px); }

        .popular-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--secondary);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .plan h3 {
          color: var(--secondary);
          border-bottom: 2px solid var(--light);
          padding-bottom: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .price {
          font-size: 2.8rem;
          font-weight: bold;
          color: var(--primary);
          margin: 1.5rem 0;
        }

        .plan-features {
          list-style: none;
          margin: 2rem 0;
          padding: 0;
        }

        .plan-features li {
          padding: 0.8rem 0;
          border-bottom: 1px solid #eee;
          text-align: center;
          position: relative;
          padding-left: 1.8rem;
        }

        .plan-features li:before {
          content: "•";
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-size: 1.5rem;
          top: 0.4rem;
        }

        .faq { background: white; }

        .faq-item {
          margin-bottom: 1.5rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .faq-question {
          font-weight: bold;
          color: var(--primary);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: var(--light);
          transition: background 0.3s ease;
          font-size: 1.1rem;
        }

        .faq-question:hover { background: #e9ecef; }

        .faq-answer {
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-answer.active {
          padding: 1.5rem;
          max-height: 500px;
        }

        .cta {
          background: linear-gradient(135deg, var(--secondary), #009c7b);
          color: white;
          text-align: center;
          padding: 6rem 0;
        }

        .cta h2 {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .cta p {
          max-width: 700px;
          margin: 0 auto 2.5rem;
          font-size: 1.2rem;
        }

        .cta .btn {
          background: white;
          color: var(--secondary);
          margin-top: 1.5rem;
          font-size: 1.2rem;
          padding: 1rem 2.5rem;
        }

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

export default ThreeDModelingAnimationService;
