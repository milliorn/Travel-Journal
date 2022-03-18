import { GoGlobe } from "react-icons/go";
import { HiLocationMarker } from "react-icons/hi";
import "./App.css";
import { data } from "./data";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const openImage = (url) => () => openInNewTab(url);

function Hero({ text }) {
  return (
    <div className="flex justify-center p-4 font-sans lowercase bg-red-400 text-red-50">
      <span className="pr-4 text-xl md:text-4xl">
        <GoGlobe />
      </span>
      <h1 className="text-sm md:text-xl">{text}</h1>
    </div>
  );
}

function Card(props) {
  return (
    <div className="flex justify-center h-100">
      <div className="flex flex-col rounded-lg shadow-lg md:flex-row md:max-w-xl bg-red-50 sm:my-8">
        <img
          className="object-cover w-full p-8 rounded-t-lg cursor-pointer hover:saturate-200 h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={props.imgSrc}
          alt={props.alt}
          onClick={openImage(props.imgSrc)}
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="inline-flex mb-2 text-xl font-medium text-red-50">
            <HiLocationMarker className="mr-1 text-3xl text-red-400" />
            <span className="mr-4 text-red-900 capitalize">
              {props.country}
            </span>
            <a
              className="my-auto text-xs text-red-600 capitalize"
              href={props.locationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="hover:sepia">google maps</span>
            </a>
          </h5>
          <p className="text-3xl font-bold capitalize">{props.location}</p>
          <p className="pt-4 text-xs font-bold capitalize">{props.date}</p>
          <p className="pt-4 text-xs text-red-900">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const cardLayout = data.map((e, i) => {
    return (
      <Card
        alt={e.alt}
        country={e.country}
        date={e.date}
        description={e.description}
        imgSrc={e.imgSrc}
        key={i}
        location={e.location}
        locationUrl={e.locationUrl}
      />
    );
  });

  return (
    <div className="bg-black">
      <Hero text="my travel journal." />
      <div className="bg-red-100 dark:bg-red-900">{cardLayout}</div>
      <footer className="bottom-0 w-full p-4 font-sans text-sm text-center lowercase bg-red-400 text-red-50 md:text-xl">
        <a
          alt="github"
          className="hover:text-red-900 hover:capitalize"
          href="https://github.com/milliorn"
          rel="noreferrer"
          target="_blank"
        >
          <span>source</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
