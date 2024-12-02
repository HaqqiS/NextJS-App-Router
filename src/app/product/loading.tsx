export default function Loading() {
    return (
        <div className="container mx-auto p-4">
            <div className="max-w-screen-xl  py-8 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="rounded-lg bg-card p-4 relative overflow-hidden">
                        {/* Image skeleton */}
                        <div className="relative w-full pt-[100%] bg-gray-200 rounded-md overflow-hidden">
                            <div className="absolute inset-0 w-full h-full">
                                <div className="w-full h-full animate-pulse bg-gray-300" />
                            </div>
                        </div>
                        {/* Title skeleton */}
                        <div className="mt-4 space-y-2">
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                            <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                        </div>
                        {/* Price and button skeleton */}
                        <div className="mt-4 flex items-center justify-between">
                            <div className="h-6 bg-gray-200 rounded animate-pulse w-20" />
                            <div className="h-9 bg-gray-200 rounded animate-pulse w-28" />
                        </div>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                ))}
            </div>
        </div>
    );
}
