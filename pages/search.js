import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaHead from "../components/MetaHead";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import MapBox from "../components/MapBox";

export default function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  const buttonLinks = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  return (
    <>
      <MetaHead title="Airbnb | Search" description="I am the search page" />
      <Header placeholder={`Going to ${location}!`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays during {range} for {noGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex space-x-3 text-gray-800 mb-5 whitespace-nowrap">
            {buttonLinks.map((link) => (
              <p key={link} className="button">
                {link}
              </p>
            ))}
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, title, description, location, star, price, total }) => (
                <InfoCard
                  key={title}
                  img={img}
                  title={title}
                  description={description}
                  location={location}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapBox searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
