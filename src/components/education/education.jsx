import "./education.scss";
import BootstrapCarousel from "./BootstrapCarousel";
export default function Education() {
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };
  // const data = [
  //   {
  //     id: 1,
  //     name: "Sri Venkateswara University college of Engineering --Btech",
  //     year: "2019-2023",
  //     branch: "Electronics and Communication Engineering",
  //     Aggregate: "81%",
  //   },
  //   {
  //     id: 2,
  //     name: "Narayana Junior College, Kadapa  —Intermediate",
  //     year: "2017-2019",
  //     branch: "Maths,Physics,Chemistry",
  //     Aggregate: "96%",
  //   },
  //   {
  //     id: 3,
  //     name: "Sree Shanthikethan E.M High School— SSC",
  //     year: "2015-2016",
  //     Aggregate: "97%",
  //   },
  // ];
  return (
    <div className="education" id="education">
      <h1>Certifications</h1>
      <div className="carousel-wrapper">
        <BootstrapCarousel />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="container">
{data.map((d) => (
  <div className="card">
    <div className="bottom">
      <h3>{d.name}</h3>
      <p>
        ❖<i>{d.year}</i>
      </p>
      <p>
        ❖<b>Aggregate: </b>
        <i>{d.Aggregate}</i>
      </p>
    </div>
  </div>
))}
</div> */
}
