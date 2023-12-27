const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-3/12 text-center my-8">
            <p className="text-yellow-600 mb-3">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4 text-white">{heading}</h3>
        </div>
    );
};

export default SectionTitle;