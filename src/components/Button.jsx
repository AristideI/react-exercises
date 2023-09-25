export default function Button(props) {
  return (
    <button
      onClick={props.handle}
      className="font-bold text-5xl hover:text-4xl hover:text-blue-600 transition-all duration-500 border-2 border-purple-700 px-8 py-2 rounded-xl bg-red-400"
    >
      Click Me {props.num}
    </button>
  );
}
