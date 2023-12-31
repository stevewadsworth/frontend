export default function ComingSoon() {
    return (
        <div className="min-h-screen min-w-screen bg-cover bg-no-repeat bg-gradient-to-b from-black to-gray-500"> {/* fallback gradient background */}
            <div className="min-h-screen flex flex-col justify-center bg-cover bg-no-repeat bg-[url('https://firebasestorage.googleapis.com/v0/b/portfolio-62576.appspot.com/o/images%2F1%2FLooking%20Up%20II.jpg?alt=media&token=72697edf-b12f-41b2-8e9f-2aa563574e72')]"> {/* image background */}
                <div className='flex flex-row justify-center'>
                    <div className="text-center text-2xl text-slate-100 bg-black/75 p-12 rounded">
                        <p className="text-4xl">Coming Soon...</p>
                        <br />
                        <p><a href="mailto:enquiries@melissawadsworth.co.uk">enquiries@melissawadsworth.co.uk</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
