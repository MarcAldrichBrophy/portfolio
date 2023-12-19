import './styling/style.css';
import './scripts/navbar.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      
      <section className="et-hero-tabs" id="home">

        <div id="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>

        <div id="intro">
          <h1>
              Marc-Aldrich Brophy
          </h1>
          <h2>
              Engineer | Technical Leader
          </h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/marc-brophy">
              <div className='social-btn flex-center' id="linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                <span>in/marc-brophy</span>
              </div>
            </a>
            {/* <a href="assets/mbrophy_resume.pdf">
              <div className='flex-center resumeButton'>
                <span>Resume</span>
              </div>
            </a> */}
            <a href="https://www.github.com/MarcAldrichBrophy">
              <div className='social-btn flex-center' id="github">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>MarcAldrichBrophy</span>
              </div>
            </a>
          </div>
        </div>

        {/* Navbar */}
        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#home">HOME</a>
          <a className="et-hero-tab" href="#about">ABOUT</a>
          <a className="et-hero-tab" href="#accomplishments">ACCOMPLISHMENTS</a>
          <a className="et-hero-tab" href="#projects">PROJECTS</a>
          <span className="et-hero-tab-slider"></span>
        </div>
      </section>
      
      <section id="about">
        <h2>TIMELINE</h2>

        <div className="timelineItem">
          <h3>2007<br></br>|</h3>
          <p>
            My family had a an extremely outdated computer for the time, a 1999 Dell home 
            computer. This started my fascination with technology.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2012<br></br>|</h3>
          <p>
          Using my father's old Toshiba laptop, I started to make my own games on 
          the Roblox game engine, my go to gaming platform as a child. 
          </p>
        </div>

        <div className="timelineItem">
          <h3>2018<br></br>|</h3>
          <p>
          I became fluent in programming Lua and Python, and released what felt like my 10th 
          game, this time with immensely better engineering. Setting up advertising, my game 
          generated 1/4 million total plays, and over 10 thousand monthly active users. 
          Days after I hired and onboarded a team of 3D artists and engineers.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2019<br></br>|</h3>
          <p>
          I got my first non-entrepreneurial job teaching children from various backgrounds 
          how to code. I became distinguished in teaching the company's Roblox game engine 
          classes, and later had an opportunity to design parts of their curriculum.
          </p>
        </div>

        <div className="timelineItem">
          <h3>2023<br></br>|</h3>
          <p>
          Unfortunately owning a video game studio as a young adult isn't as easy as I thought 
          to maintain; especially when being in college at the same time. I dropped my game studio 
          and started a new company focusing on the implementation of extended reality applications.
          </p>
        </div>

        <div className="timelineItem">
          <h3>FUTURE<br></br>|</h3>
          <p>
          I plan to hone in on my leadership abilities and pursue a Masters degree in Business 
          Administration. My main goals for my future is to continue learning and strive to be 
          a leader wherever I happen to be.
          </p>
        </div>
      </section>
      
      <br></br>
        <div class="breakLine"></div>
      <br></br>

      <section id="accomplishments">
        <h2>Accomplishments</h2>
        <ul>
          <li>
            Started my first company at 16, maintained 5 employees over 5 years.
          </li>
          <li>
            Successfully ran and taught my own programming classes as a public and 
            private tutor. (nearly 3 years)
          </li>
          <li>
            Started my own club at Seattle University focused on AWS Cloud engineering for business.
          </li>
          <li>
            Won 1st place at Seattle University's Associate of Computer Machinery project competition.
          </li>
          <li>
            Won 1st place at INRIX x AWS hackathon.
          </li>
        </ul>
      </section>

      <br></br>
        <div class="breakLine"></div>
      <br></br>
      
      <section id="projects">
        <h2>PROJECTS</h2>
        <div className='projectCard'>
          <h3>ResponsightML - 2023</h3>
          <p>
            A machine learning solution to decrease EMS response 
            time by predicting areas where collisions are likely.
            <br></br><br></br>
            My contribution to the project was designing the AWS infrastructure, 
            guiding the project to follow problem statement, and creating my teams 
            project pitch slides.
            <br></br><br></br>
            This project won our team 1st place at the INRIX x AWS project competition 
            and final round interviews at INRIX.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/MarcAldrichBrophy/responsightml">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        </div>

        <div className='projectCard'>
          <h3>Extracta AI - 2023</h3>
          <p>
            An AI solution to automatically cataloging data in a centralized repository. 
            Images, documents, and audio files utilized AWS AI to append relevant tags, 
            allowing the user to search based on the content of their files.
            <br></br><br></br>
            My contribution to the project was project lead. I created our planning board, 
            assigned tasks across a team of 8 engineers, and developed the AWS 
            infrastructure. I also ran to support all engineers, allowing them to learn new skills.
            <br></br><br></br>
            This project won my team 1st place at Seattle university's Association of Computer 
            Machinery's project competition.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/MarcAldrichBrophy/extracta-main">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        </div>

        <div className='projectCard'>
          <h3>SU to DOCX - 2023</h3>
          <p>
            A web scraping solution to aid in converting Seattle University web pages into a 
            formatted word document. This aided in the web redesign process.
            <br></br><br></br>
            Solo project utilizing Azure cloud to store and retrieve converted pages.
          </p>
        </div>

        <div className='projectCard'>
          <h3>Home Price Prediction - 2023</h3>
          <p>
            A machine learning solution to predict the price of houses based on 
            numerous factors such as home size, number of rooms, and location.
            <br></br><br></br>
            This was created for the purposed of demonstrating AWS resources for 
            the AWS Cloud Club at Seattle University.
          </p>
        </div>

        <div className='projectCard'>
          <h3>3150 warehouse - 2023</h3>
          <p>
            This project brought life to a warehouse simulation assignment in my business 
            information systems class at Seattle University. This project provided an 
            interface and cataloging abilities for fake products coming in and out of a 
            fake warehouse. Students were able to retrieve current information of the 
            warehouse with CSV files and analyze on MS Excel.
            <br></br><br></br>
            Solo project, using NFC card readers to simulate product scanning and AWS 
            services such as Elastic BEanstalk and DynamoDB.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/MarcAldrichBrophy/is-3150-react">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        </div>

        <div className='projectCard'>
          <h3>piHome - 2022</h3>
          <p>
            A fun project for my raspberry pi and touch screen module. This allows people at home to 
            quickly view weather and current light levels with RF technology.
          </p>

          <div id="buttonContainer">
            <a href="https://github.com/MarcAldrichBrophy/pi-home-application">
              <button><span>Github</span><i></i></button>
            </a>
          </div>
        </div>

        <div className='projectCard'>
          <h3>Beyond the Screen - 2022</h3>
          <p>
          A 3 year video game project. Included selectable classes, 
          weapons and ability systems, randomly generating dungeons, 
          and AI enemy path-finding.
          <br></br><br></br>
          Lead engineer in a team of 5.
          </p>

          <div id="buttonContainer">
            <a href="https://www.roblox.com/games/5338916310/Beyond-the-Screen-Beta">
              <button><span>Play</span><i></i></button>
            </a>
          </div>
          
        </div>

        <div className='projectCard'>
          <h3>Mystical Winds - 2018</h3>
          <p>
          My first successful video game. A story based dungeon crawling game.
          <br></br><br></br>
          Solo project, generating 1/4 million plays and over 10 thousand 
          monthly active users.
          </p>

          <div id="buttonContainer">
            <a href="https://www.roblox.com/games/929172294/Mystical-Winds-I-RPG">
              <button><span>Play</span><i></i></button>
            </a>
          </div>
          
        </div>

      </section>

    </div>
  );
}

export default App;
