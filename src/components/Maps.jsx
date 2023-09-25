export default function Maps() {
  const lis = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  return (
    <section className="w-screen h-screen bg-blue-600 grid place-content-center ">
      <ul className="font-bold text-5xl hover:text-orange-500 transition-all duration-500 list-disc">
        {lis.map((elt) => (
          <li>{elt}</li>
        ))}
      </ul>
    </section>
  );
}
