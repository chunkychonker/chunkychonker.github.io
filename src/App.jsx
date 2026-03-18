

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#hero">
            steve ling<span className="dot">.</span>
          </a>
          <nav className="site-nav" aria-label="primary navigation">
            <a href="#features">interests</a>
            <a href="#featured">featured</a>
            <a href="#secondary">more</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="hero" aria-labelledby="hero-title">
          <div className="container hero-content">
            <h1 id="hero-title">steve ling&apos;s hobbies, interests, &amp; skills</h1>
            <p className="hero-subhead">
              based in the pacific northwest and drawn to the outdoors, competition,
              and building with technology.
            </p>
            <a className="btn btn-dark" href="#featured">see featured story</a>
            <a className="btn btn-outline" href="#contact">reach out</a>
          </div>
        </section>

        <section className="features" id="features" aria-labelledby="features-title">
          <div className="container">
            <h2 className="section-title" id="features-title">interests at a glance</h2>
            <p className="section-lede">
              a quick look at the activities and skills that shape how i spend my
              time and what i care about.
            </p>

            <div className="features-grid">
              <article className="feature">
                <div className="icon" aria-hidden="true">⛰</div>
                <h3>outdoor activities</h3>
                <p>
                  hiking, skiing, mountain biking, and paddle boarding are some of
                  the ways i like to spend time outside and reset.
                </p>
              </article>

              <article className="feature">
                <div className="icon" aria-hidden="true">🏀</div>
                <h3>indoor interests</h3>
                <p>
                  i also enjoy hooping, playing valorant, reading, and strategy
                  games because they mix competition, focus, and fun.
                </p>
              </article>

              <article className="feature">
                <div className="icon" aria-hidden="true">💻</div>
                <h3>skills</h3>
                <p>
                  i like programming in different languages, training ai models, and
                  learning how to work with open source tools and frameworks.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="featured" id="featured" aria-labelledby="featured-title">
          <div className="container">
            <h2 className="section-title" id="featured-title">featured content</h2>
            <p className="section-lede">
              growing up in the pnw made the outdoors a huge part of my life, and
              hiking became one of the best ways for me to step away from stress and
              appreciate where i am.
            </p>
            <div
              className="media featured-photo"
              role="img"
              aria-label="steve ling sitting on a rocky overlook during sunset in the pacific northwest."
            ></div>
          </div>
        </section>

        <section className="secondary" id="secondary" aria-labelledby="secondary-title">
          <div className="container">
            <h2 className="section-title" id="secondary-title">more about me</h2>
            <p className="section-lede">
              two parts of my life that stand out most are competitive gaming and
              spending time in the mountains.
            </p>

            <div className="secondary-grid">
              <article className="card">
                <div className="card-text">
                  <h3>valorant state champion</h3>
                  <p>
                    i picked up valorant in high school because i loved the
                    strategic and competitive side of the game. during college, i
                    improved a lot and won state leagues two semesters in a row.
                  </p>
                  <a className="btn btn-outline" href="#contact">connect with me</a>
                </div>
              </article>

              <article className="card">
                <div className="card-text">
                  <h3>hiking and camping</h3>
                  <p>
                    being close to the mountains shaped a lot of my hobbies. hiking
                    gives me a break from school stress and lets me hold onto some
                    of the calm and adventure i grew up with.
                  </p>
                  <a className="btn btn-outline" href="#hero">back to top</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cta" id="cta" aria-labelledby="cta-title">
          <div className="container cta-inner">
            <h2 className="section-title" id="cta-title">thanks for visiting</h2>
            <p className="section-lede">
              this page is a snapshot of the hobbies, places, and skills that matter
              most to me right now.
            </p>
            <a className="btn btn-dark" href="#contact">say hello</a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-inner">
          <div className="footer-left">
            <p><strong>steve ling</strong></p>
            <p>thanks for visiting my portfolio and interests page.</p>
            <p>
              email: <a href="mailto:sling22@wisc.edu">sling22@wisc.edu</a>
            </p>
          </div>

          <div className="footer-cols" aria-label="footer links">
            <div className="footer-col">
              <h4>site</h4>
              <a href="#hero">home</a>
              <a href="#features">interests</a>
              <a href="#featured">featured</a>
            </div>
            <div className="footer-col">
              <h4>connect</h4>
              <a href="mailto:sling22@wisc.edu">email</a>
              <a href="#secondary">more info</a>
              <a href="#cta">thanks</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default App