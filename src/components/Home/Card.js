import Image from 'next/image';

const Card = ({ imageSrc, title, location, date }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image className="w-full" src={imageSrc} alt={title} width={600} height={500} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          Location: {location}
        </p>
        <p className="text-gray-700 text-base">
          Date: {date}
        </p>
      </div>
    </div>
  );
};

export default Card;
