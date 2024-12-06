'use client'
export default function Button() {
  return (
    <div>
      <span className="text-3xl" onClick={() => console.log("clicked")}>Click me</span>
    </div>
  );
}
