import { Link } from "react-router-dom";


const pins = [
  { id: 1, title: "Meghalaya", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUr7PZctcF2Y7ixUtRLDl-ZNkcu91YO8QdohpyEGsD5GXoxLa3Y5EQaVo&s=10" },
  { id: 2, title: "Europe", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo1CV8KrypDIQZUQzpDmk9kZSIXScaF3q-koaaTenGFdKD4FlsvpS0IsQ&s=10" },
  { id: 3, title: "Da Nang", img: "https://hblimg.mmtcdn.com/content/hubble/img/da_nang/mmt/activities/t_ufs/m_activities_da_nang_golden_bridge_l_400_640.jpg" },
  { id: 4, title: "Paris", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBn2o1QljkMyFaCnEIdQW5UjWd1epY4g-b5Qc6AvoF2A&s=10https://i.natgeofe.com/k/04665f4a-3f8d-4b62-8ca3-09ce7dfc5a20/france-eiffel-tower.jpg?wp=1&w=1084.125&h=609" },
  { id: 5, title: "Iceland Roadtrip", img: "https://flyingsquirrelholidays.com/wp-content/uploads/2020/11/Best-Places-for-World-Tour-2021-1.jpg" },
  { id: 6, title: "Agra", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5if0zoQFgdfSBuaiIlI1KP1eMhavvzmENDEWN6qBI-ZVS2GZ4F0l5Vl0L&s=10" },
];

function Home() {
  return (
    <div>
      <section className="text-center py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Collect places, not things.
        </h2>
        <p className="text-lg text-[#6b5b4d] max-w-xl mx-auto mb-8">
          A little corner of the internet to save every place I want to
          travel to someday. Inspired by my Pinterest travel board lol.
        </p>
        <Link
          to="/destinations"
          className="bg-[#B5651D] text-white px-6 py-3 rounded-full hover:bg-[#8f4e17] transition"
        >
          Explore Destinations
        </Link>
      </section>

      <section className="px-6 pb-16">
        <div className="columns-2 md:columns-3 gap-4 space-y-6 ">
          {pins.map((pin) => (
            <div
              key={pin.id}
          
              className="break-inside-avoid rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg hover:-translate-y-5 transition-all duration-300"
            >
              <img src={pin.img} alt={pin.title} className="w-full" />
              <p className="bg-transparent p-2 text-sm text-center font-medium ">{pin.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
