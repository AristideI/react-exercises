export default function Maps2() {
  const lis = ["dog", "cat", "chicken", "cow", "sheep", "horse"];
  const liss = ["🐩", "🐈", "🐔", "🐄", "🐑", "🏇"];
  return (
    <section className="w-screen h-screen bg-orange-600 grid place-content-center ">
      <table className="font-bold text-5xl hover:text-orange-900 transition-all duration-500 list-disc">
        {lis.map((elt, ind) => (
          <tr key={elt} className="border px-8 py-2">
            <td className=" ">{liss[ind]}</td>
            <td className="">{elt}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}
