

const AboutUs = () => {
    return (
        <>
            <section className="bg-sky-200 rounded-xl mt-12">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-5xl font-extrabold text-gray-900 ">About <span className="text-sky-400 underline">Us</span></h2>
                <p className="mt-4 text-gray-600 text-lg">Event Horizon is your one-stop shop for all things entertainment. We offer a wide variety of events, from concerts and music festivals to theater and performing arts to film screenings and premieres to comedy shows to sports events. Whether you are looking for a night out on the town or a weekend getaway, we have the perfect event for you.</p>
                
            </div>
            <div className="mt-12 md:mt-0">
                <img src="https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?w=1380&t=st=1696846829~exp=1696847429~hmac=805ee3b6748c9ada9dd5c8393e23e7c765e3737eff8595d94631b08429882b02" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
        </>
    );
};

export default AboutUs;