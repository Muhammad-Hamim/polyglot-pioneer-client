const InstCard = ({ inst }) => {
  const { name, email, class_taken, rating, image } = inst;
  return (
    <div>
      <div className="relative">
        <img src={image} alt="" />
        <div className="bg-white absolute bottom-10 rounded-lg p-3 left-1/2 -translate-x-1/2 w-5/6">
          <h2 className="text-2xl font-semibold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default InstCard;
