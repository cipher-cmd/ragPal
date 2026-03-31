import React, { useEffect, useRef } from 'react';

function App() {
  const heroBgRef = useRef(null);

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Simple Parallax for hero
    const handleScroll = () => {
      if (heroBgRef.current) {
        const scrolled = window.scrollY;
        heroBgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div ref={heroBgRef} className="hero-parallax-wrapper">
          <img src="/images/hero.webp" alt="Background Blur" className="hero-bg-blur" />
          <img src="/images/hero.webp" alt="Hero background" className="hero-bg" />
        </div>
        <div className="hero-content reveal">
          <h1 className="hero-title">Happy Birthday Saumi</h1>
          <p className="hero-subtext">HBD to the most special person, stay blessed, keep being fun, caring, grateful to have you.</p>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="as-seen-on reveal">
        <div className="as-seen-header">
          <div className="as-seen-line"></div>
          <p className="as-seen-title">As Seen on</p>
          <div className="as-seen-line"></div>
        </div>
        <div className="logos-group">
          <img src="/images/flopshop.webp" alt="Flopshop" className="as-seen-img" />
          <img src="/images/guts.webp" alt="Guts" className="as-seen-img" />
          <img src="/images/pattepack.webp" alt="Pattepack" className="as-seen-img" />
          <img src="/images/timepass.webp" alt="Timepass" className="as-seen-img" />
          <img src="/images/windup.webp" alt="Windup" className="as-seen-img" />
          <img src="/images/zipit.webp" alt="Zipit" className="as-seen-img" />
        </div>
      </section>

      {/* Dear Saumi Section */}
      <section className="dear-saumi reveal">
        <div className="dear-saumi-text">
          <p className="dear-saumi-heading">Dear Saumi,</p>
          <p>
            You're the most good looking, beautiful person I know,<br/>everything about you feels like art.
          </p>
          <p>
            Three months with you in Delhi were the best time of my life, and I keep going back to them more than I admit. The way you can be so fun and crazy in one moment, and so strong and focused the next, it honestly inspires me. Watching you chase your dreams in New York, even when things could be easier, makes me respect you even more.
          </p>
          <p>
            Even the simplest things with you, just being on FaceTime while you cook, sleep, acting, style , your presence alone feels like a blessing.
          </p>
          <p>
            I love you, grateful for you, just the way you are.
          </p>
          <p className="ds-thanks">
            Thanks for being you.
          </p>
        </div>
        <div className="dear-saumi-images parallax-img-group">
          <img src="/images/dearSaumi1.png" alt="Saumi 1" className="ds-img ds-img-1" />
          <img src="/images/dearSaumi2.png" alt="Saumi 2" className="ds-img ds-img-2" />
          <img src="/images/dearSaumi3.png" alt="Saumi 3" className="ds-img ds-img-3" />
          <img src="/images/dearSaumi4.png" alt="Saumi 4" className="ds-img ds-img-4" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials reveal">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          <div className="test-card">
            <img src="/images/testimonial1.webp" alt="Simran Jain" />
            <p className="test-quote">"Isko kaise jhel lete ho" is the best dialogue since birth. Jk chote, watching you grow into a b'ful, independent, person is the best feeling. LY</p>
          </div>
          <div className="test-card">
            <img src="/images/testimonial2.webp" alt="Mammi Pappa" />
            <p className="test-quote">My late night tv partner, darling daughter, sunny &amp; biggest rondu, proud of you &amp; LY</p>
          </div>
          <div className="test-card">
            <img src="/images/testimonial3.webp" alt="Apurv Budhraja" />
            <p className="test-quote">Khud kuch kaam karle Thanks for lifetime memories, and now for some space, best sister<br/>💚</p>
          </div>
        </div>
      </section>

      {/* Media Recognition Section */}
      <section className="media-recognition reveal">
        <h2 className="section-title">Media Recognition</h2>
        <p className="media-body">
          222lab.in founder Saumya Jain has been featured across media for her sharp UI/UX,<br/>world class taste &amp; harkate
          <br /><br />
          She runs a full-time job, advisor to PeakPals, loves hard, hypes her people, sips matcha &amp;<br/>overthinks everything(I'm going insane)
          <br /><br />
          But somehow, she's a huge inspiration to many, especially one.
        </p>
      </section>

      {/* Magazine Covers Section */}
      <section className="magazines reveal">
        <div className="magazines-grid">
          <div className="mag-item">
             <img src="/images/media1.webp" alt="The Chicken Magazine" />
          </div>
          <div className="mag-item">
             <img src="/images/media2.webp" alt="R. Republic Magazine" />
          </div>
          <div className="mag-item">
             <img src="/images/media3.webp" alt="Femina Magazine" />
          </div>
          <div className="mag-item">
             <img src="/images/media4.webp" alt="Fortune Time Magazine" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section reveal">
        <div className="footer-inner">
          <div className="footer-left">
            <img src="/images/logo.png" alt="SAUMPALS Logo" className="footer-logo" />
            <div className="footer-copyright-block">
              <p className="footer-copyright"><span className="footer-underline">222lab.in</span> 2026</p>
              <p className="footer-copyright">All rights reserved by @saumyajain.design</p>
              <p className="footer-copyright">Anashirinbrainrot pvt ltd.</p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-tagline">No returns. No exchanges. You're stuck with me.</p>
            <p className="footer-secondary">Started with facetime, and rest is history</p>
            <p className="footer-credits">Built with alot of love &amp; efforts by Team PeakPals,<br/>hope you love it, God bless!</p>
          </div>
        </div>
        <div className="footer-divider"></div>
      </footer>
    </div>
  );
}

export default App;
