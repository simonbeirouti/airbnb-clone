import Banner from "../components/Banner";
import Header from "../components/Header";
import MetaHead from "../components/MetaHead";
// import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <MetaHead
        title="Airbnb | Home"
        description="Home page for the airbnb clone"
      />

      <Header />

      <Banner />
    </div>
  );
}
