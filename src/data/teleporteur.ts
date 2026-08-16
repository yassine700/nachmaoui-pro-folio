export const TELEPORTEUR = {
  title: "Téléporteur",
  slug: "teleporteur",
  label: "Mobile App MVP / Marketplace Concept",
  status: "Concept / MVP — not a launched product",
  summary:
    "A local cargo marketplace concept connecting customers who need something transported with drivers who already have space on a trip.",
  overview:
    "Téléporteur is a mobile app MVP concept: two connected interfaces — one for customers posting a delivery, one for drivers accepting it — with a prepaid credit system underneath. It is designed and specified as a first version, not launched, and there are no users, revenue or results to report.",
  blocks: [
    {
      title: "Problem",
      body: "Sending something locally usually means phone calls, informal pricing and no visibility on who is actually available or already heading that way. Drivers, meanwhile, run trips with unused space.",
    },
    {
      title: "Concept",
      body: "A marketplace that matches cargo requests with drivers who are already making a compatible trip, so the price reflects spare capacity rather than a dedicated run.",
    },
    {
      title: "Customer experience",
      body: "Describe the load, set pickup and drop-off, choose a time window, publish the request, then follow it from published to accepted to delivered with the driver's details visible once matched.",
    },
    {
      title: "Driver experience",
      body: "Browse nearby requests filtered by route and load size, review distance, dimensions and expected payout, and accept the ones that fit the trip already planned.",
    },
    {
      title: "Booking flow",
      body: "Request created → visible to matching drivers → driver accepts and credits are held → pickup confirmed → delivery confirmed by both sides → request closed.",
    },
    {
      title: "Driver wallet & credits",
      body: "Drivers top up a prepaid credit balance. Accepting a request deducts credits, which keeps commission handling simple and gives drivers a clear picture of cost before they commit.",
    },
    {
      title: "Marketplace model",
      body: "Supply is independent drivers with spare capacity; demand is individuals and small businesses moving goods locally. The product's job is trust and matching: clear load details, confirmed handovers, and transparent pricing on both sides.",
    },
    {
      title: "Business model",
      body: "Platform commission taken through the prepaid credit system when a driver accepts a request. No subscription is assumed in the MVP scope.",
    },
    {
      title: "Product architecture",
      body: "Two mobile clients (customer, driver) over a shared request service, with accounts, request lifecycle state, matching by route and load, credit ledger, and notifications on state changes.",
    },
    {
      title: "MVP scope",
      body: "Account creation, publishing a request, driver browsing and acceptance, request status tracking, credit top-up and deduction, and delivery confirmation. Deliberately out of scope: live GPS tracking, in-app chat, ratings, multi-stop routing and automated pricing.",
    },
  ],
  screens: [
    { title: "Customer booking", detail: "Load details, pickup and drop-off, time window." },
    { title: "Request published", detail: "Status view while drivers see the request." },
    { title: "Driver feed", detail: "Nearby requests with route and payout." },
    { title: "Trip request detail", detail: "Distance, dimensions, cost in credits." },
    { title: "Driver wallet", detail: "Credit balance, top-up, deduction history." },
    { title: "Order status", detail: "Pickup and delivery confirmation by both sides." },
  ],
  technologies: [
    "Mobile UI Design",
    "User Flows",
    "Marketplace Logic",
    "Wallet / Credit System",
    "MVP Scoping",
  ],
} as const;
