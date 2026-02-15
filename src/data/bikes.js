export const bikes = [
  {
    id: 1,
    name: "Jawa 42 FJ",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop", // placeholder
    totalKm: 1200,
    lastService: "2024-08-10",
    nextServiceDue: 1500, // km
    oilChangeDue: 300, // km left
    logs: [
      { date: "2024-04-20", activity: "Ride to Lonavala", type: "ride" },
      { date: "2024-04-19", activity: "Oil Change Done", type: "service" },
      { date: "2024-04-18", activity: "Bike Wash", type: "maintenance" },
    ],
    expenses: [
      { month: "Jan", fuel: 500, service: 0, parts: 0 },
      { month: "Feb", fuel: 1200, service: 0, parts: 200 },
      { month: "Mar", fuel: 800, service: 0, parts: 0 },
      { month: "Apr", fuel: 600, service: 1500, parts: 500 },
    ],
  },
  {
    id: 2,
    name: "Bullet 350",
    image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2070&auto=format&fit=crop", // placeholder
    totalKm: 9800,
    lastService: "2024-07-05",
    nextServiceDue: 10000,
    oilChangeDue: 200,
    logs: [
      { date: "2024-04-15", activity: "Clutch Adjustment", type: "maintenance" },
      { date: "2024-04-10", activity: "Long Ride", type: "ride" },
    ],
    expenses: [
      { month: "Jan", fuel: 1000, service: 0, parts: 0 },
      { month: "Feb", fuel: 1100, service: 500, parts: 0 },
      { month: "Mar", fuel: 900, service: 0, parts: 100 },
      { month: "Apr", fuel: 950, service: 0, parts: 0 },
    ],
  },
];
