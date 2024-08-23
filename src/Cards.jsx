function Cards({ title, text }) {
    return (
      <div className="mt-4  bg-slate-200 px-3 rounded-lg">
        <h1 className="text-3xl mb-2">{title}</h1>
        <p>{text}</p>
      </div>
    );
  }
  
export default Cards;
  