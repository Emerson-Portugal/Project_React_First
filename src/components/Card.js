const Card = (props) => {
    return (
        <div className="bg-white">
            <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
                <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shop by Category</h2>
                    <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>

                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                            <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                <a
                                    href={props.href}
                                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                >
                                    <span aria-hidden="true" className="absolute inset-0">
                                        <img src={props.imageSrc} alt="" className="w-full h-full object-center object-cover" />
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 px-4 sm:hidden">
                    <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
