import { useEffect, useState } from "react";
import Work from "../../Components/Work/work";

const Works = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetch("/work.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
      {works.map((work) => (
        <Work work={work} key={work.id}></Work>
      ))}
    </div>
  );
};

export default Works;
