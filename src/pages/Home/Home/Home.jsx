import Banner from "../Banner/Banner";
import ReactTabs from "../Tabs/ReactTabs";

const Home = () => {
    return (
        <div  className=" max-w-screen-2xl  mx-auto">
            <Banner></Banner>
            <ReactTabs></ReactTabs>
        </div>
    );
};

export default Home;