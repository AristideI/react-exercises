import todos from "./todos";

function Card(props) {
  return (
    <section className="border border-gray-50 bg-white rounded-xl shadow-xl w-1/3 flex flex-col items-center justify-center gap-6 py-12 px-12 text-center hoo">
      <p className="font-bold text-3xl">{props.one}</p>
      <p>{props.two}</p>
    </section>
  );
}

export default function JSON() {
  return (
    <article className="bg-green-200 w-full h-screen flex justify-center items-center gap-12 px-12">
      {todos.map((elt) => {
        return <Card key={elt.id} one={elt.setup} two={elt.punchline} />;
      })}
    </article>
  );
}
