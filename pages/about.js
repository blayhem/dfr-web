import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="mt-4 mx-auto">
        <Image
          className="rounded-full shadow-white"
          src="/img/sofa.jpeg"
          alt="Avatar"
          width={180}
          height={180}
        />
      </div>

      <section className="text-center mt-6">
        <p className="mb-2">
          Hi! My name is Daniel and I’m a 26 years old, Madrid-based, Frontend
          Engineer at Vizzuality.
        </p>
        <p className="mb-2">
          Before working here, I got a Computer Science BS from UC3M, worked as
          a developer and designer, participated in several hackathons and
          advocated for technology in different ways.
        </p>
        <p className="mb-2">
          I am a person of too many hobbies. My interests outside of coding
          include minimalism, coffee, mechanical keyboards, synths and
          electronic music, and digital &amp; analog photography.
        </p>
      </section>
      <section className="flex justify-center mx-auto mt-6">
        <svg
          className="hidden sm:block mr-5 w-4 transform rotate-180"
          viewBox="0 0 8 558"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M3.64642 557.354C3.84168 557.549 4.15827 557.549 4.35353 557.354L7.53551 554.172C7.73077 553.976 7.73077 553.66 7.53551 553.464C7.34025 553.269 7.02367 553.269 6.8284 553.464L3.99998 556.293L1.17155 553.464C0.976287 553.269 0.659704 553.269 0.464442 553.464C0.26918 553.66 0.26918 553.976 0.464442 554.172L3.64642 557.354ZM3.5 -2.18557e-08L3.49998 557L4.49998 557L4.5 2.18557e-08L3.5 -2.18557e-08Z"
            fill="#FAFAFA"
          />
        </svg>
        <div className="exp">
          <div className="my-4">
            <p>
              2018-currently @
              {' '}
              <a href="https://www.vizzuality.com">Vizzuality</a>
            </p>
            <ul className="pl-2 sm:pl-8">
              <li>
                Leading the development of
                {' '}
                <a href="https://usa-resilience-opportunity-map.vercel.app/">
                  USA Resilience Opportunity Map
                </a>
                , and bootstrapped projects such as
                {' '}
                <a href="https://thermal-assessment.climate.copernicus.eu/">
                  Copernicus Climate
                </a>
                {' '}
                or 
                {' '}
                <a href="https://forest-forward.com">Forest Forward</a>
                .
              </li>
              <li>
                Between 2018 and 2019 I created and maintained several data
                visualizations for
                {' '}
                <a href="https://www.globalforestwatch.org">
                  Global Forest Watch
                </a>
                , and contributed to the map.
              </li>
              <li>
                Co-developed some key features such the &quot;Areas of
                Interest&quot; (custom user-drawn areas for geospacial
                analysis), as well as the Topics pages (scrollytelling section
                using fullpageJS and lottie).
              </li>
              <li>
                I use Nextjs, React, Redux, SASS, Jest, Cypress, and several
                data visualization and geospacial analysis libraries such as D3
                and Mapbox.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <p>
              Summer 2018 @
              {' '}
              <a href="https://nddn.design">Everis / NTT data design</a>
            </p>
            <ul className="pl-2 sm:pl-8">
              <li>
                Redesigned the digital experience of Burger King with a talented
                team, from user interviews, UX (user flows, personas, and
                navigation), to visual interface (UI). I worked on the
                responsive version of the web app, and translating some
                workflows from app to web.
              </li>
              <li>I worked with Sketch but have experience with Figma.</li>
            </ul>
          </div>
          <div className="my-4">
            <p>
              2016-2017 @ 
              {' '}
              <a href="https://www.graphext.com/">Graphext</a>
            </p>
            <ul className="pl-2 sm:pl-8">
              <li>
                Designed and implemented a Chrome extension that integrated web
                scrapping with the main product API.
              </li>
              <li>
                Implemented the interface of a web app (made in Electron) that
                indexed datasets.
              </li>
              <li>Used vanilla JS, React, Mobx, and Electron.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <p className="text-center mb-4">Other</p>
        <ul>
          <li>
            On 2019, I won a
            {' '}
            <a href="https://twitter.com/blayhem/status/1117111829124341760">
              Facebook-adglow hackathon
            </a>
            {' '}
            with an
            {' '}
            <a href="https://twitter.com/JGFerreiro/status/1131424675828047873">
              amazing multidisciplinary team
            </a>
            .
          </li>
          <li>
            On 2016, I was
            {' '}
            <a href="https://www.facebook.com/hackupc/photos/a.326823167691748/326851221022276/?type=3">
              finalist at the HackUPC hackathon
            </a>
            {' '}
            (Barcelona).
          </li>
          <li>
            On 2016 I was a volunteer organizer at
            {' '}
            <a href="https://t3chfest.es">T3chfest</a>
            , a big tech-related event in Madrid.
            <br />
            Fun fact! I was going to give
            {' '}
            <a href="https://twitter.com/blayhem/status/1217729915954651136">
              a talk
            </a>
            {' '}
            on this year’s edition! Then COVID happened :(
          </li>
        </ul>
      </section>
      <section className="block text-center mt-6 mb-16">
        <p className="mb-4">More about me</p>
        <p>
          contact me
          {' '}
          <span role="img" aria-label="at">
            👉
          </span>
          {' '}
          <a href="mailto:daniel.fdez@pm.me">daniel.fdez@pm.me</a>
          <br />
          code and pet projects
          {' '}
          <span role="img" aria-label="at">
            👉
          </span>
          {' '}
          <a href="https://github.com/blayhem">github.com/blayhem</a>
          <br />
          occasional code streamings
          {' '}
          <span role="img" aria-label="at">
            👉
          </span>
          {' '}
          <a href="https://www.twitch.tv/blayhem">twitch.tv/blayhem</a>
          <br />
          a bit of everything
          {' '}
          <span role="img" aria-label="at">
            👉
          </span>
          {' '}
          <a href="https://twitter.com/blayhem">twitter.com/blayhem</a>
        </p>
      </section>
    </>
  );
}
