import { Link } from "react-router-dom";

const itemCard = ({
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
}) => {
    return (
        <>
            <div className="overflow-hidden bg-white rounded-lg ">
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                        <Link
                            to={titleHref}
                            className="mb-4 block text-xl font-semibold text-dark sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                            {CardTitle}
                        </Link>
                    </h3>
                    <p className="text-base leading-relaxed mb-7 text-body-color">
                        {CardDescription}
                    </p>

                    <Link
                        to={btnHref}
                        className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition duration-200 hover:bg-[#E5E7EB] hover:text-dark"
                    >
                        View Details
                    </Link>

                </div>
            </div>
        </>
    );
};

export default itemCard;