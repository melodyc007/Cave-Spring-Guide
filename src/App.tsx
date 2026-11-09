import { useState } from "react";
import {
  ACTIVE_WATER_NOTICES,
  CITY_ANNOUNCEMENTS,
  RESTAURANTS,
  SHOPS,
  EVENTS,
  RECURRING,
  type Announcement,
} from "./data";

type Page =
  | "home"
  | "happening"
  | "tour"
  | "restaurants"
  | "shop"
  | "stay"
  | "signup";

const NAV: { id: Page; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "happening", label: "What's Happening" },
  { id: "tour", label: "Take a Tour" },
  { id: "restaurants", label: "Restaurants" },
  { id: "shop", label: "Shop" },
  { id: "stay", label: "Where to Stay" },
];

const CITY_NEWS_URL = "https://cavespring.ga.gov/news";
const CITY_URL = "https://cavespring.ga.gov/";

function PhotoPlaceholder({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="photo-placeholder">
      <span className="photo-label">{label}</span>
      {sub ? <span className="photo-sub">{sub}</span> : null}
      <span className="photo-note">Photo to be added</span>
    </div>
  );
}

function Photo({
  src,
  alt,
  credit,
}: {
  src: string;
  alt: string;
  credit: string;
}) {
  return (
    <figure className="photo">
      <img className="photo-img" src={src} alt={alt} />
      <figcaption className="photo-credit">{credit}</figcaption>
    </figure>
  );
}

// Photos below are linked from Georgia's Rome (romegeorgia.org), the
// official Rome tourism site, with credit — approved by Melody Nov 8, 2026.
// They are external URLs, not local files, so they survive a GitHub
// snapshot push (which cannot carry binary images).
const ROLATER_PHOTO =
  "https://romegeorgia.org/wp-content/uploads/2025/08/park-pond-and-cave_edited.jpg";
const WELCOME_CENTER_PHOTO =
  "https://romegeorgia.org/wp-content/uploads/2025/07/1_Ucvbog-600x400.jpeg";
const HEARN_INN_PHOTO =
  "https://romegeorgia.org/wp-content/uploads/2025/07/hearn.jpeg";
const PHOTO_CREDIT = "Photo: Georgia's Rome — romegeorgia.org";

function AnnouncementCard({ item }: { item: Announcement }) {
  return (
    <article className="announcement">
      <div className="announcement-top">
        <span className={`badge badge-${item.category.toLowerCase()}`}>
          {item.category}
        </span>
        <span className="announcement-date">{item.date}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="announcement-area">📍 {item.area}</p>
      <p>{item.details}</p>
      <p className="announcement-status">
        <strong>Status:</strong> {item.status}
      </p>
      <a href={item.url} target="_blank" rel="noreferrer">
        Read on the City website →
      </a>
    </article>
  );
}

function HomePage({ go }: { go: (p: Page) => void }) {
  return (
    <>
      <section className="hero">
        <Photo
          src={ROLATER_PHOTO}
          alt="Rolater Park pond with the stone cave entrance across the water"
          credit={PHOTO_CREDIT}
        />
        <h1>Cave Spring, Georgia</h1>
        <p className="tagline">a hidden gem off the beaten path.</p>
        <p>
          Located in northwest Georgia in Floyd County&rsquo;s southwestern
          corner, Cave Spring lies at the western end of beautiful Vann&rsquo;s
          Valley. The one redlight town is rich in history! Please visit our
          Welcome Center and Museum at 4 Rome Road on Thursday – Saturday
          11am–4pm and Sunday from noon–4pm.
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/Historic-Cave-Spring-Georgia-483278155015652"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
            TikTok
          </a>
        </div>
      </section>

      <section>
        <h2>Announcements</h2>

        <h3 className="subhead">Active water notices</h3>
        {ACTIVE_WATER_NOTICES.map((item) => (
          <AnnouncementCard key={item.id} item={item} />
        ))}

        <h3 className="subhead">All city announcements</h3>
        {CITY_ANNOUNCEMENTS.map((item) => (
          <AnnouncementCard key={item.id} item={item} />
        ))}
        <p>
          <a href={CITY_NEWS_URL} target="_blank" rel="noreferrer">
            See all announcements on the City website →
          </a>
        </p>
      </section>

      <section>
        <h2>Welcome Center &amp; Museum</h2>
        <Photo
          src={WELCOME_CENTER_PHOTO}
          alt="Cave Spring Welcome Center & Museum front porch with its green sign"
          credit={PHOTO_CREDIT}
        />
        <p>
          <strong>4 Rome Road, Cave Spring, GA</strong>
          <br />
          Thursday – Saturday 11am–4pm
          <br />
          Sunday noon–4pm
        </p>
        <p>
          <button className="button" onClick={() => go("happening")}>
            See what&rsquo;s happening
          </button>{" "}
          <button className="button button-secondary" onClick={() => go("tour")}>
            Take a tour
          </button>
        </p>
      </section>
    </>
  );
}

function HappeningPage() {
  return (
    <>
      <h1>What&rsquo;s Happening</h1>
      <p>
        <a
          href="https://tockify.com/ddacavespring/pinboard"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          What&rsquo;s Happening this Month →
        </a>
      </p>
      <p className="section-note">
        Events calendar: tockify.com/ddacavespring/pinboard
      </p>

      <h2>Upcoming events</h2>
      {EVENTS.map((e) => (
        <article className="card" key={e.title}>
          <h3>{e.title}</h3>
          <p>
            <strong>{e.date}</strong>
            {e.time ? ` — ${e.time}` : ""}
          </p>
          <p>{e.details}</p>
        </article>
      ))}

      <h2>Rolater Park &amp; the Cave</h2>
      <p>
        <strong>Cave hours:</strong> Friday–Sunday 10am–5pm. Park open 8am
        to dark.
      </p>
      <p>
        The cave is 254 ft deep, 54°F year-round, with 54 steps down. No
        backpacks. Admission: $2 adult, $1 child 6–12, under 5 free. Closed
        Thanksgiving, Dec 24–25, and Jan 1.
      </p>
      <p>
        Guided cave tours November–March, for groups of 10 or more — call{" "}
        <a href="tel:7067773570">706-777-3570</a>.
      </p>
      <p>
        <a
          href="https://www.youtube.com/results?search_query=A+Look+Into+The+Cave+Cave+Spring"
          target="_blank"
          rel="noreferrer"
        >
          Watch “A Look Into The Cave” on YouTube →
        </a>
      </p>

      <h2>Rolater Park Pool</h2>
      <p>
        Phone: <a href="tel:7067773387">706-777-3387</a>
      </p>
      <ul>
        <li>Mar 25–May 22: Saturday–Sunday only</li>
        <li>May 23–Aug 9: daily 11am–5:45pm</li>
        <li>Aug 10–Sep 7: weekends only</li>
      </ul>
      <p>
        $5 admission. Play area, lazy river, lap pool, and 2 slides. No
        outside food or drink. Pavilion information:{" "}
        <a href="https://rolaterpark.net" target="_blank" rel="noreferrer">
          rolaterpark.net
        </a>{" "}
        or <a href="tel:7067773900">706-777-3900</a>.
      </p>

      <h2>Recurring fun</h2>
      {RECURRING.map((r) => (
        <article className="card" key={r.title}>
          <h3>{r.title}</h3>
          <p>
            <strong>{r.when}</strong>
          </p>
          {r.details ? <p>{r.details}</p> : null}
        </article>
      ))}
    </>
  );
}

function TourPage() {
  return (
    <>
      <h1>Take a Tour</h1>
      <h2>Walking / Bicycle Tour</h2>
      <p>
        Cave Spring has 25 individual places on the National Register of
        Historic Places, 23 of them added in 1980, in four districts:
      </p>
      <ul>
        <li>Georgia School for the Deaf District</li>
        <li>Rolater Park Historic District</li>
        <li>Cave Spring Commercial District</li>
        <li>Cave Spring Residential District</li>
      </ul>
      <p>
        <a
          href="https://theclio.com/tour/2856"
          target="_blank"
          rel="noreferrer"
        >
          Rolater Park Historic District — Clio tour →
        </a>
        <br />
        <a
          href="https://theclio.com/tour/2842"
          target="_blank"
          rel="noreferrer"
        >
          Cave Spring Residential Historic District — Clio tour →
        </a>
      </p>

      <h2>Fact or Fiction</h2>
      <p>
        Cave Spring is “the 7th most HAUNTED town in Georgia.”
      </p>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/@CaveSpringDDA"
            target="_blank"
            rel="noreferrer"
          >
            Cave Spring DDA on YouTube — “Two Minutes in History” playlist
          </a>
        </li>
        <li>
          <a
            href="https://www.tiktok.com/search?q=Georgia%20Urban%20Legends%20Cave%20Spring"
            target="_blank"
            rel="noreferrer"
          >
            Georgia Urban Legends on TikTok
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/results?search_query=Visiting+the+Cave+Cave+Spring+Georgia"
            target="_blank"
            rel="noreferrer"
          >
            “Visiting the Cave” on YouTube
          </a>
        </li>
      </ul>
    </>
  );
}

function RestaurantsPage() {
  return (
    <>
      <h1>Restaurants</h1>
      <p className="section-note">
        Phone numbers were not shown in the original guide — tap “Call” in
        the original app, or look the restaurant up for the number.
      </p>
      {RESTAURANTS.map((r) => (
        <article className="card" key={r.name}>
          {r.photo ? (
            <Photo
              src={r.photo}
              alt={`${r.name}, ${r.address}`}
              credit={r.photoCredit || ""}
            />
          ) : (
            <PhotoPlaceholder label={r.name} sub={r.address} />
          )}
          <h3>{r.name}</h3>
          <p>{r.address}</p>
          <p>{r.description}</p>
          <p>
            <strong>Hours:</strong> {r.hours}
          </p>
        </article>
      ))}
    </>
  );
}

function ShopPage() {
  return (
    <>
      <h1>Shop</h1>
      <p className="section-note">
        In the original guide these shops were shown as image-only tiles,
        with names in the images and no text addresses or hours. The names
        below are transcribed from those tiles.
      </p>
      <div className="shop-grid">
        {SHOPS.map((s) => (
          <article className="card shop-tile" key={s.name}>
            {s.photo ? (
              <Photo
                src={s.photo}
                alt={s.name}
                credit={s.photoCredit || ""}
              />
            ) : (
              <PhotoPlaceholder label={s.name} sub={s.note || undefined} />
            )}
            <h3>{s.name}</h3>
            {s.note ? <p>{s.note}</p> : null}
            {s.url ? (
              <p>
                <a href={s.url} target="_blank" rel="noreferrer">
                  Visit on Facebook →
                </a>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </>
  );
}

function StayPage() {
  return (
    <>
      <h1>Where to Stay</h1>
      <article className="card">
        <Photo
          src={HEARN_INN_PHOTO}
          alt="The Hearn Inn, a yellow historic inn in Cave Spring"
          credit={PHOTO_CREDIT}
        />
        <h3>The Hearn Inn</h3>
        <p>
          Historic inn in Rolater Park.
          <br />
          13 Cedartown Street, Cave Spring, GA 30124
        </p>
        <p>
          <a
            href="https://www.facebook.com/hearninn/"
            target="_blank"
            rel="noreferrer"
          >
            The Hearn Inn on Facebook →
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/hearninn/"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Call the Hearn Inn
          </a>
        </p>
        <p className="section-note">
          No phone number was shown in the original guide.
        </p>
      </article>

      <h2>More places to stay</h2>
      <p>Click the logo below to find places in Cave Spring!</p>
      <p>
        <a
          href="https://www.airbnb.com/s/Cave-Spring--GA"
          target="_blank"
          rel="noreferrer"
          className="airbnb-link"
        >
          Airbnb — places to stay in Cave Spring →
        </a>
      </p>
    </>
  );
}

function SignupPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <>
      <h1>Sign up for Cave Spring news</h1>
      <p>
        Sign up to receive news about what&rsquo;s happening in Cave Spring —
        events, announcements, and things to do — from the Historic Cave
        Spring Downtown Development Authority. We&rsquo;ll only use your email
        for Cave Spring news.
      </p>
      {done ? (
        <p className="success">
          Thank you, {first}! You&rsquo;re signed up. (This sign-up is saved
          on this device for now — the list is managed by the Cave Spring DDA.)
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const list = JSON.parse(
              localStorage.getItem("cave-spring-signups") || "[]",
            );
            list.push({ first, last, email, at: new Date().toISOString() });
            localStorage.setItem("cave-spring-signups", JSON.stringify(list));
            setDone(true);
          }}
        >
          <label>
            First name *
            <input
              required
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </label>
          <label>
            Last name *
            <input
              required
              value={last}
              onChange={(e) => setLast(e.target.value)}
            />
          </label>
          <label>
            Email *
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-inner">
          <div>
            <p className="eyebrow">Historic Downtown Cave Spring</p>
            <h1 className="site-title">City of Cave Spring Guide</h1>
          </div>
          <p className="header-note">Cave Spring, Georgia</p>
        </div>
        <nav className="nav" aria-label="Guide pages">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={page === n.id ? "nav-link active" : "nav-link"}
              onClick={() => {
                setPage(n.id);
                window.scrollTo(0, 0);
              }}
            >
              {n.label}
            </button>
          ))}
          <button
            className={page === "signup" ? "nav-link active" : "nav-link"}
            onClick={() => {
              setPage("signup");
              window.scrollTo(0, 0);
            }}
          >
            Sign Up
          </button>
        </nav>
      </header>

      <main className="main">
        {page === "home" && <HomePage go={setPage} />}
        {page === "happening" && <HappeningPage />}
        {page === "tour" && <TourPage />}
        {page === "restaurants" && <RestaurantsPage />}
        {page === "shop" && <ShopPage />}
        {page === "stay" && <StayPage />}
        {page === "signup" && <SignupPage />}
      </main>

      <footer className="site-footer">
        <p>
          City of Cave Spring Guide — Historic Cave Spring Downtown
          Development Authority.
        </p>
        <p>
          Announcements are from the City of Cave Spring,{" "}
          <a href={CITY_NEWS_URL} target="_blank" rel="noreferrer">
            cavespring.ga.gov/news
          </a>
          . Welcome Center &amp; Museum: 4 Rome Road, Thu–Sat 11am–4pm, Sun
          noon–4pm. City website:{" "}
          <a href={CITY_URL} target="_blank" rel="noreferrer">
            cavespring.ga.gov
          </a>
        </p>
      </footer>
    </div>
  );
}
