import { useState } from "react";
import { useEffect } from "react";

function Robot({ img, name, status }) {
  return (
    <section className="flex items-center justify-center relative min-w-[20%] h-96 grouper">
      <div className="bg-yellow-50 w-full h-96 border-2 rounded-2xl border-yellow-600 p-8 absolute top-0 left-0 robot">
        <img className="w-60 h-60 object-contain mb-4" src={img} alt="Robot" />
        <p>{name}</p>
        <p>{status}</p>
      </div>
      <div className="bg-yellow-50 border-2 rounded-2xl border-yellow-600 p-8 absolute top-0 left-0 diva w-full h-96">
        <p className="font-bold text-3xl">More Informations</p>
      </div>
    </section>
  );
}

export default function API() {
  let [robots, setRobots] = useState([]);
  let pro = 0;
  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((resp) => resp.json())
      .then((data) => setRobots(data));
  }, [pro]);
  let display = robots.map((elt) => {
    return (
      <Robot
        img={elt.avatar}
        name={`${elt.first_name} ${elt.last_name}`}
        status={elt.employment.title}
      />
    );
  });
  return (
    <section className="w-full h-fit bg-yellow-200 py-12 flex flex-col justify-center px-12">
      <article className=" flex flex-wrap justify-center items-center gap-6 px-12">
        {display}
      </article>
    </section>
  );
}
