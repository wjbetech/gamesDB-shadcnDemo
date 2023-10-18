export default function SingleGame({ img, title, genres }) {

  const genreList = genres.map((genre, index) => (
    <span key={genre.name}>
      {genre.name}
      {index < genres.length - 1 ? ", " : ""}
    </span>
  ))

  return (
    <div className="single-game max-w-sm bg-white border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <a className="card-img" href="#">
            <img className="card-img rounded-t-lg shadow-2xl" src={img} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className=" font-normal text-gray-700 dark:text-gray-400 inline">
              {genreList}
            </p>
            <a href="#" className="mt-4 inline-flex items-center px-3 py-2 text-sm justify-center font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-xl w-full">
                Read more
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
  )
}
