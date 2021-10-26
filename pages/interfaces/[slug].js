import { useRouter } from "next/router";

const Interfaces = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div>
            <h1>Interfaces</h1>
            {slug}
        </div>
    );
};

export default Interfaces;
