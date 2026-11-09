// City of Cave Spring Guide — content transferred from the Jotform app
// "City of Cave Spring Guide" (https://app.jotform.com/251824916187162)
// Inventory checked Sun Nov 8, 2026. Photos in the Jotform app could not be
// retrieved as files, so photo slots below are placeholders marked
// "Photo to be added" — no photo has been invented or substituted.
// Restaurant phone numbers were not displayed in the source — none invented.
// Shop tiles were image-only in the source (no text names/addresses/hours),
// so shop names below are transcribed from the tile images as listed.

export type Announcement = {
  id: string;
  date: string; // as shown on cavespring.ga.gov/news, or "Recent"
  title: string;
  category: "Water" | "City" | "Meeting" | "Event" | "Service";
  area: string;
  details: string;
  status: string;
  url: string;
};

// Active water notices — posted recently on cavespring.ga.gov/news.
// The City pages do not print a date on these items, so they are shown as
// "Recent" and linked to the City page. Check the City site for the latest.
export const ACTIVE_WATER_NOTICES: Announcement[] = [
  {
    id: "water-padlock-mountain",
    date: "Recent",
    title: "Water Interruption Notice — Padlock Mountain Road",
    category: "Water",
    area: "2 Padlock Mountain Road to Ridge Road",
    details:
      "City crews are working on the water lines on Padlock Mountain Road. The water is shut off from 2 Padlock Mountain Road to Ridge Road to complete necessary repairs. Once service is restored, customers may experience temporary discoloration or air in the lines — run cold water for a few minutes until it clears.",
    status: "Water shut off for repairs",
    url: "https://cavespring.ga.gov/news/water-interruption-notice-",
  },
  {
    id: "water-emergency-citywide",
    date: "Recent",
    title: "Emergency Water Service Notice — Citywide",
    category: "Water",
    area: "Citywide",
    details:
      "Due to an emergency issue with the City's water system involving a pump failure, water service was temporarily shut off citywide while crews made repairs. Update: water service has been restored.",
    status: "Restored",
    url: "http://cavespring.ga.gov/news/emergency-water-service-notice%C2%A0",
  },
  {
    id: "water-spout-springs-road",
    date: "Recent",
    title: "Water Outage: Spout Springs Road",
    category: "Water",
    area: "All of Spout Springs Road",
    details:
      "A water main break on Spout Springs Road. The water crew is on site and has begun repairs. All of Spout Springs Road will be without water. Estimated repair time 3–4 hours, though this could change depending on conditions.",
    status: "Outage — repairs in progress",
    url: "https://cavespring.ga.gov/news/water-outage%3A-spout-springs-road-",
  },
  {
    id: "water-alabama-cr45",
    date: "Recent",
    title: "Water Service Outage: Alabama — County Road 45",
    category: "Water",
    area: "County Road 45 and all roads connected to it",
    details:
      "A major water main break on County Road 45. Because this is a primary water line, all roads connected to County Road 45 may experience low water pressure or an interruption in water service. Update 4:30pm: the break was located at the intersection of County Road 480 and County Road 45, and crews are working to restore service.",
    status: "Outage — repairs in progress",
    url: "https://cavespring.ga.gov/news/water-service-outage%3A-alabama-",
  },
  {
    id: "water-spout-springs-area",
    date: "Recent",
    title: "Water Outage: Spout Springs",
    category: "Water",
    area: "Entire Spout Springs area",
    details:
      "A water leak on Spout Springs Road is impacting the entire Spout Springs area. Emergency utility locates have been called in, and the Water Department crew is actively working to locate and repair the leak and restore water service as quickly as possible.",
    status: "Outage — repairs in progress",
    url: "https://cavespring.ga.gov/news/water-outage-spout-springs",
  },
];

// ALL city announcements from cavespring.ga.gov/news, newest first.
// Dates and titles are as listed on the City's News page, checked Nov 8, 2026.
export const CITY_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "news-2026-11-06-garbage",
    date: "Nov 6, 2026",
    title: "11/6/2026 Garbage Collection Update",
    category: "Service",
    area: "City of Cave Spring",
    details: "Garbage collection update from the City of Cave Spring. See the City website for the full notice.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-11-05-water-cr22",
    date: "Nov 5, 2026",
    title: "Water Leak on County Road 22",
    category: "Water",
    area: "County Road 22",
    details: "The City is aware of a water leak on County Road 22. See the City website for the full notice and any service impact.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news/water-outage-county-road-22",
  },
  {
    id: "news-2026-11-05-council-work-session",
    date: "Nov 5, 2026",
    title: "Cave Spring City Council Work Session 11/10/2026",
    category: "Meeting",
    area: "Cave Spring City Hall",
    details: "Notice of the Cave Spring City Council Work Session on November 10, 2026. See the City website for time and agenda.",
    status: "Upcoming",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-31-halloween",
    date: "Oct 31, 2026",
    title: "Halloween Trick or Treating",
    category: "Event",
    area: "Cave Spring",
    details: "Halloween trick or treating in Cave Spring. See the City website for times and details.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-30-council-meeting",
    date: "Oct 30, 2026",
    title: "November Work Session and Council Meeting",
    category: "Meeting",
    area: "Cave Spring City Hall",
    details: "Notice of the November Work Session and Council Meeting. See the City website for dates, times and agenda.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-28-finance",
    date: "Oct 28, 2026",
    title: "The Finance Committee will meet October 29, 2026 at 4:30pm",
    category: "Meeting",
    area: "Cave Spring City Hall",
    details: "The Finance Committee meets October 29, 2026 at 4:30pm.",
    status: "Meeting held",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-23-public-safety",
    date: "Oct 23, 2026",
    title: "Public Safety Committee Meeting: October 26",
    category: "Meeting",
    area: "Cave Spring",
    details: "Public Safety Committee Meeting on October 26, 2026. See the City website for time and agenda.",
    status: "Meeting held",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-22-garbage-delay",
    date: "Oct 22, 2026",
    title: "GARBAGE SERVICE DELAY",
    category: "Service",
    area: "City of Cave Spring",
    details: "Garbage service delay notice from the City of Cave Spring. See the City website for the full notice.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-16-floodplain",
    date: "Oct 16, 2026",
    title: "Public Notice: Floodplain Management Workshop",
    category: "City",
    area: "Cave Spring",
    details: "Public notice of a Floodplain Management Workshop. See the City website for date, time and location.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-16-brush",
    date: "Oct 16, 2026",
    title: "Fall Brush Route Reminder",
    category: "Service",
    area: "City of Cave Spring",
    details: "Fall brush route reminder from the City of Cave Spring. See the City website for the route and schedule.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-16-oversight",
    date: "Oct 16, 2026",
    title: "OVERSIGHT COMMITTEE MEETING OCTOBER 20, 2026 AGENDA",
    category: "Meeting",
    area: "Cave Spring",
    details: "Oversight Committee Meeting, October 20, 2026. Agenda on the City website.",
    status: "Meeting held",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-16-library",
    date: "Oct 16, 2026",
    title: "Help Us Welcome Reagan Vance to the Cave Spring Library!",
    category: "City",
    area: "Cave Spring Library",
    details: "Help us welcome Reagan Vance to the Cave Spring Library!",
    status: "Welcome",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-09-council-agenda",
    date: "Oct 9, 2026",
    title: "Regular Council Meeting October 13, 2026 Agenda",
    category: "Meeting",
    area: "Cave Spring City Hall",
    details: "Regular Council Meeting, October 13, 2026. Agenda on the City website.",
    status: "Meeting held",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-07-police",
    date: "Oct 7, 2026",
    title: "Community Notice: Police Presence",
    category: "City",
    area: "Cave Spring",
    details: "Community notice about police presence in Cave Spring. See the City website for details.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-10-06-work-session",
    date: "Oct 6, 2026",
    title: "Work Session Agenda: October 6, 2026 5:00pm",
    category: "Meeting",
    area: "Cave Spring City Hall",
    details: "Work Session, October 6, 2026 at 5:00pm. Agenda on the City website.",
    status: "Meeting held",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-09-29-blacksbluff",
    date: "Sep 29, 2026",
    title: "Water Outage: Blacksbluff",
    category: "Water",
    area: "Blacksbluff",
    details: "Water outage in the Blacksbluff area. See the City website for the full notice.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-09-29-buttermilk",
    date: "Sep 29, 2026",
    title: "Water Outage: Buttermilk Road, From Rehoboth to Henson",
    category: "Water",
    area: "Buttermilk Road, from Rehoboth to Henson",
    details: "Water outage on Buttermilk Road, from Rehoboth to Henson. See the City website for the full notice.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-09-28-blacks-bluff",
    date: "Sep 28, 2026",
    title: "Water Outage: Blacks Bluff Road",
    category: "Water",
    area: "Blacks Bluff Road",
    details: "Water outage on Blacks Bluff Road. See the City website for the full notice.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-09-24-cr803",
    date: "Sep 24, 2026",
    title: "Water Outage: County Road 803",
    category: "Water",
    area: "County Road 803",
    details: "Water outage on County Road 803. See the City website for the full notice.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
  {
    id: "news-2026-09-23-stewart",
    date: "Sep 23, 2026",
    title: "Water Outage: Stewart Circle",
    category: "Water",
    area: "Stewart Circle",
    details: "Water outage on Stewart Circle. See the City website for the full notice.",
    status: "See City site for details",
    url: "https://cavespring.ga.gov/news",
  },
];

export type Restaurant = {
  name: string;
  address: string;
  description: string;
  hours: string;
  photo?: string;
  photoCredit?: string;
};

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Southern Flavor",
    address: "2 Alabama St",
    description: "Southern cooking in downtown Cave Spring.",
    hours: "Mon–Fri 11am–8pm",
    photo: "/photos/southern-flavor.jpg",
    photoCredit: "Photo supplied by Melody Noyes",
  },
  {
    name: "Linde Maries",
    address: "18 Broad St",
    description: "Best steaks in Floyd County.",
    hours: "Wed–Thu 4–8pm, Fri–Sat noon–9pm",
    photo: "/photos/linde-maries.jpg",
    photoCredit: "Photo supplied by Melody Noyes",
  },
  {
    name: "Creekside",
    address: "23 Cedartown St SW",
    description: "Creekside dining in Cave Spring.",
    hours: "Thu–Sat 11–3, Sun 11–8",
    photo: "/photos/creekside.jpg",
    photoCredit: "Photo supplied by Melody Noyes",
  },
  {
    name: "Local Joes",
    address: "6 Broad St",
    description: "Local Joe's in downtown Cave Spring.",
    hours: "Tue–Thu 10:30–8pm, Fri–Sat 10:30–9pm",
    photo: "/photos/local-joes.jpg",
    photoCredit: "Photo supplied by Melody Noyes",
  },
  {
    name: "Stagecoach Pizza",
    address: "24 Alabama St",
    description: "Pizza in downtown Cave Spring. Breakfast 7–10am on Saturday.",
    hours: "Thu–Fri 11–9, Sat 7–10 (breakfast 7–10am), Sun 12:30–6",
    photo: "/photos/stagecoach-pizza.jpg",
    photoCredit: "Photo supplied by Melody Noyes",
  },
  {
    name: "Spring Brew",
    address: "16 Alabama St",
    description: "Café and creamery. Coffee made with spring water.",
    hours: "Mon–Sat 9–6, Sun 12:30–5",
  },
  {
    name: "La Cabana",
    address: "118 Gadsden Rd",
    description: "Mexican restaurant.",
    hours: "Mon–Fri 11am–9pm, Sat noon–9pm, Sun noon–8:30pm",
    photo: "/photos/la-cabana.jpg",
    photoCredit: "Photo supplied by Melody Noyes",
  },
];

export type Shop = {
  name: string;
  note: string;
  url?: string;
  photo?: string;
  photoCredit?: string;
};

export const SHOPS: Shop[] = [
  { name: "graze — growcery & goods", note: "Grocery & goods", url: "https://www.facebook.com/graze.growcery.goods", photo: "/photos/graze.jpg", photoCredit: "Photo supplied by Melody Noyes" },
  { name: "Christa's etc.", note: "Antiques, Collectibles, Jewelry", photo: "/photos/christas-etc.jpg", photoCredit: "Photo supplied by Melody Noyes" },
  { name: "Bell House", note: "", photo: "/photos/bell-house.jpg", photoCredit: "Photo supplied by Melody Noyes" },
  { name: "Peddler", note: "", photo: "/photos/peddler.jpg", photoCredit: "Photo supplied by Melody Noyes" },
  { name: "Evergreen on Broad", note: "Est. 2022" },
  { name: "Antiques on the Square", note: "" },
  { name: "General Store", note: "" },
  { name: "Pondora's Box", note: "Home Decor & More, Antiques" },
  { name: "Rocky Hollow Patch at Angel Farm", note: "Cave Spring, GA / Centre, AL" },
  { name: "Buttermilk Blooms", note: "Jackson Farms, Cave Spring, GA, Est. 2024" },
];

export const EVENTS = [
  {
    title: "Veterans Day Program in the Square",
    date: "Wednesday, Nov 11",
    time: "11:00–11:30am",
    details: "Always 11/11 at 11am.",
  },
  {
    title: "Downtown Cave Spring Merchant Open House",
    date: "Saturday–Sunday, Nov 14–15",
    time: "",
    details: "Downtown merchants open house.",
  },
  {
    title: "Cave Spring Downtown Tree Lighting",
    date: "Tuesday, Dec 1",
    time: "6:00–7:00pm",
    details: "At the gazebo.",
  },
  {
    title: "Small Town Christmas in the Country",
    date: "Saturday–Sunday, Dec 5–6",
    time: "",
    details: "Annual Christmas arts & crafts bazaar in Rolater Park.",
  },
];

export const RECURRING = [
  {
    title: "Sings on the Square with The Stockettes",
    when: "Wednesdays 6:30pm, May–Sep",
    details: "",
  },
  {
    title: "Singo at Stagecoach Pizza",
    when: "Tuesdays 6pm",
    details: "",
  },
  {
    title: "Trivia at Local Joe's",
    when: "3rd Thursday monthly, 6:30pm",
    details: "$5 plus can goods. Southern Flavor catering.",
  },
];
