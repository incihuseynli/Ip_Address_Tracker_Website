import btnIcon from "/icon-arrow.svg";

const SearchBox = ({ handleSubmit, ipAddress, setIpAddress }) => {
  return (
    <div
      className="
    w-full h-64 flex flex-col
    items-center justify-center gap-5
    bg-headerSM bg-cover bg-center
    md:bg-headerLG
"
    >
      <h1
        className="
  text-white  text-2xl
    md:text-4xl
"
      >
        IP address tracker
      </h1>
      <form
        className="
      flex items-center max-w-xl w-full
    "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="
        w-full h-12 rounded-s-lg px-6 outline-none text-lg
        "
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button
          type="submit"
          className="
        w-12 h-12 bg-slate-950 rounded-e-lg cursor-pointer
        px-4 hover:bg-slate-800 transition-all duration-500
        linear
      "
        >
          <img src={btnIcon} alt="Search Button Icon" />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
