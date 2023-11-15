
const SearchResults = ({address}) => {
  return (
    <div
        className="
      px-6 py-10 relative -top-12
      w-full max-w-5xl bg-white mx-auto
      grid grid-cols-1 gap-10 md:gap-8 rounded-lg 
      md:grid-cols-2 lg:grid-cols-4 shadow-lg
    "
        style={{ zIndex: 1000 }}
      >
        <div
          className="
        w-full md:pr-4 
        flex flex-col items-center
        lg:items-start gap-4 
        md:border-r-2
        md:border-opacity-20
      "
        >
          <h4
            className="
          uppercase text-gray-500 
          text-xs
          tracking-widest font-bold
        "
          >
            IP address
          </h4>
          <p
            className="
          text-2xl font-bold text-slate-800
        "
          >
            {address.ip}
          </p>
        </div>
        <div
          className="
        w-full md:pr-4
        flex flex-col  items-center 
        lg:items-start gap-4 lg:border-r-2
        lg:border-opacity-20
      "
        >
          <h4
            className="
          uppercase text-gray-500 
          text-xs
          tracking-widest font-bold
        "
          >
            Location
          </h4>
          <p
            className="
          text-2xl font-bold text-slate-800
        "
          >
            {address.location &&
              address.location.city + " " + address.location.region}
          </p>
        </div>
        <div
          className="
        w-full pr-4
        flex flex-col  items-center 
        lg:items-start gap-4 md:border-r-2
        md:border-opacity-20
      "
        >
          <h4
            className="
          uppercase text-gray-500 
          text-xs
          tracking-widest font-bold
        "
          >
            Timezone
          </h4>
          <p
            className="
          text-2xl font-bold text-slate-800
        "
          >
            UTC {address.location && address.location.timezone}
          </p>
        </div>
        <div
          className="
        w-full pr-4
        flex flex-col  items-center 
        lg:items-start gap-4
      "
        >
          <h4
            className="
          uppercase text-gray-500 
          text-xs
          tracking-widest font-bold
        "
          >
            ISP
          </h4>
          <p
            className="
         text-2xl font-bold text-slate-800
       "
          >
            {address.isp}
          </p>
        </div>
      </div>
  )
}

export default SearchResults
