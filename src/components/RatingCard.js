const RatingCard = ({ title, description, name, rating = 5 }) => {
    return (
        <div className="bg-gray-50 rounded-md shadow-md p-4">
            <div className="flex">
                {Array.from({ length: rating }).map((_, index) => (
                    <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="ml-2 size-5 fill-yellow-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                ))}
            </div>
            <hr className="h-px my-2 mx-2" />
            <h1 className="ml-2 text-base font-semibold">{title}</h1>
            <p className="px-4 py-2 text-sm text-justify max-h-28 line-clamp-5">{description}</p>
            <h1 className="font-semibold text-sm tracking-wider text-right mr-2 mt-2">{name}</h1>
        </div>
    );
};

export default RatingCard;
