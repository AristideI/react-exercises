import Button from "./Button";

export default function Custom() {
  function handleClick() {
    alert("This button is clicked");
  }
  return (
    <section className="w-screen h-screen bg-purple-600 flex justify-center items-center gap-6">
      <Button num="1" />
      <Button num="2" />
      <Button num="3" />
    </section>
  );
}
