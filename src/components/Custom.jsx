import Button from "./Button";

export default function Custom() {
  function handleClick(event) {
    alert(`Button ${event.target.textContent.split(" ")[2]} clicked`);
  }
  return (
    <section className="w-screen h-screen bg-purple-600 flex justify-center items-center gap-6">
      <Button num="1" handle={handleClick} />
      <Button num="2" handle={handleClick} />
      <Button num="3" handle={handleClick} />
    </section>
  );
}
