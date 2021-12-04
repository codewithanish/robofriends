const Card = ({name, email, id}) => {
  return (
    <div className="bg-green-200 inline-block border-r-3 p-3 m-2 hover:scale-105 border-2 shadow-sm transform transition duration-200 text-center rounded-md">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
