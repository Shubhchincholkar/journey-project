import { useState } from "react";

// more dummy data, added a "region" so we can filter
const allDestinations = [
  { id: 1, name: "Santorini", region: "Europe", desc: "White houses, blue domes, best sunsets ever." },
  { id: 2, name: "Kyoto", region: "Asia", desc: "Temples, cherry blossoms, quiet streets." },
  { id: 3, name: "Interlaken", region: "Europe", desc: "Mountains, lakes, paragliding spot." },
  { id: 4, name: "Bali", region: "Asia", desc: "Rice terraces, beaches, good coffee." },
  { id: 5, name: "Reykjavik", region: "Europe", desc: "Northern lights and hot springs." },
  { id: 6, name: "Marrakech", region: "Africa", desc: "Colorful markets and desert nearby." },
];

function Destinations() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? allDestinations
      : allDestinations.filter((d) => d.region === filter);

  const regions = ["All", "Europe", "Asia", "Africa"];

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-15 text-center">Destinations</h2>
    

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((d) => (
          <div
            key={d.id}
            className="group border border-[#EADBC8] rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold group-hover:text-[#B5651D] transition-colors">
                {d.name}
              </h3>
              <span className="text-xs font-medium bg-[#FFF1E0] text-[#B5651D] px-3 py-1 rounded-full whitespace-nowrap">
                {d.region}
              </span>
            </div>
            <p className="text-sm text-[#6b5b4d] leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
