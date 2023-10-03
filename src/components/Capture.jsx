export default function Capture() {
  function handleClick() {
    alert("This button is clicked");
  }
  return (
    <section className="w-screen h-screen bg-red-600 grid place-content-center ">
      <button
        onClick={handleClick}
        className="font-bold text-5xl hover:text-4xl hover:text-blue-600 transition-all duration-500 border-2 border-purple-700 px-8 py-2 rounded-xl bg-red-400"
      >
        Click Me
      </button>
    </section>
  );
}
