import "./education.scss";

export default function Education() {
  const data = [
    {
      id: 1,
      name: "Sri Venkateswara University college of Engineering --Btech",
      year: "2019-2023",
      branch: "Electronics and Communication Engineering",
      Aggregate: "81%",
    },
    {
      id: 2,
      name: "Narayana Junior College, Kadapa  —Intermediate",
      year: "2017-2019",
      branch: "Maths,Physics,Chemistry",
      Aggregate: "100%",
    },
    {
      id: 3,
      name: "Sree Shanthikethan E.M High School— SSC",
      year: "2009-2016",
      Aggregate: "97%",
    },
  ];
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <div className="container">
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
      </div>
    </div>
  );
}
