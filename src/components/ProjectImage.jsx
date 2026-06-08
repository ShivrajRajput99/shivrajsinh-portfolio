export default function ProjectImage({ title, image }) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}