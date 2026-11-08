# City of Cave Spring Guide

A rebuild of the Jotform app **“City of Cave Spring Guide”**
(https://app.jotform.com/251824916187162) as a Lovable web app, built in
GitHub so it can be published in Lovable and, later, wrapped for the App
Store. Same guide, same pages and content — plus a new Announcements home
page.

## What is in this app

**Home — Announcements (new)**
- Active water notices at the top, then ALL city announcements from
  [cavespring.ga.gov/news](https://cavespring.ga.gov/news), newest first,
  with date, title, affected area/details, and status. Water outages are
  the most frequent, but the feed is not limited to water — it includes
  every city announcement (garbage, meetings, events, library, police,
  and more).
- The welcome paragraph from the original guide, and the Welcome Center
  & Museum: 4 Rome Road, Thu–Sat 11am–4pm, Sun noon–4pm.

**What's Happening** — Tockify pinboard link
(tockify.com/ddacavespring/pinboard); Veterans Day Program in the Square
Wed Nov 11, 11:00–11:30am (fixed from the source, which listed 11pm in
one place and “Always 11/11 at 11am” in the text); Merchant Open House
Nov 14–15; Tree Lighting Dec 1, 6–7pm at the gazebo; Small Town Christmas
in the Country Dec 5–6; Rolater Park Cave hours/prices; Rolater Park Pool
hours/prices; Sings on the Square, Singo, and Trivia recurring events.

**Take a Tour** — 25 National Register places, 23 added in 1980, four
historic districts; Clio tours for Rolater Park Historic District and
Cave Spring Residential Historic District; “Fact or Fiction” — Cave
Spring is “the 7th most HAUNTED town in Georgia,” with YouTube/TikTok
links.

**Restaurants** — all 7 listings from the source, with address, hours,
and description. No phone numbers were shown in the source, so none are
invented here.

**Shop** — all 10 shops from the source. In the source these were
image-only tiles (names in the images, no text addresses/hours), so the
names here are transcribed from the tile images.

**Where to Stay** — The Hearn Inn, 13 Cedartown Street, Cave Spring, GA
30124, with Facebook link; plus the Airbnb link for Cave Spring.

**Sign Up** — “Sign up to receive news about what's happening in Cave
Spring!” First name, last name, and email (required). The source form
had 0 submissions. Sign-ups in this rebuild are saved on the visitor's
own device for now; connect a list/form service before relying on it to
collect addresses.

The navigation is the same on every page. The source lost the
What's Happening / Take a Tour links on subpages — that is fixed here.

## Photos — please read

The photos in the Jotform app could **not** be retrieved as files, so
they are **not** in this repo. Photo slots in the app are clearly marked
“Photo to be added” (hero Rolater Park photo, Welcome Center & Museum
building, restaurant photos/logos, shop tiles, Hearn Inn). No photo has
been invented or substituted. Add the real photos from the Jotform app
(or new ones) in Lovable, or drop them into `public/` and point the
placeholders at them.

## Announcements — how they stay current

The announcements in `src/data.ts` are a seed, checked Nov 8, 2026
against cavespring.ga.gov/news. They do **not** update themselves. When
the City posts a new notice, add it to the top of `CITY_ANNOUNCEMENTS`
(or `ACTIVE_WATER_NOTICES` for a current water outage) in `src/data.ts`,
newest first, with its date, title, affected area, details, and link —
then re-publish in Lovable. The app always links each item to the City
website, and to the full news list at cavespring.ga.gov/news.

Note: the City pages for the recent water notices (Padlock Mountain
Road, citywide pump failure, Spout Springs Road, County Road 45) do not
print a date on the page, so those five are shown as “Recent” in the app.
Verify the date on the City site if a date is needed.

## Publish in Lovable (Melody does this — no Lovable AI credits used)

1. Go to [lovable.dev](https://lovable.dev) and open your workspace
   (“Melody's Lovable”).
2. Connect this GitHub repo: in Lovable, go to your account / GitHub
   settings and connect GitHub, then import this project from
   **melodyc007/cave-spring-guide** (or, if the project is already
   linked, open it and choose Sync / Pull from GitHub to bring in the
   latest commit).
3. Check the preview — Home (Announcements), What's Happening, Take a
   Tour, Restaurants, Shop, Where to Stay, and Sign Up.
4. Click **Publish** (top right in Lovable). That is the step that makes
   the app live on its Lovable web address.
5. Share the published link, or add it to a Home Screen from Safari /
   Chrome (Share → Add to Home Screen).

## App Store — later, not this build

This rebuild is the App Store path, but it is **not** in the stores yet.
The next step, when Melody wants it, is to wrap this Lovable web app
with Capacitor and build it in the cloud (no Mac needed), then submit it
from Apple ($99/year) and Google Play ($25 one-time) developer accounts.
The Jotform version itself cannot go in the App Store.

## Tech

Vite + React + TypeScript + Tailwind CSS. No backend, no database.
`npm install` then `npm run build` to verify locally.
