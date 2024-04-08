import Banner from "../Banner/Banner";
import Offers from "../Offers/Offers";
import ReactTabs from "../Tabs/ReactTabs";

const Home = () => {
    return (
        <div  className=" max-w-screen-2xl  mx-auto">
            <Banner></Banner>
            <ReactTabs></ReactTabs>
            <Offers></Offers>
        </div>
    );
};

export default Home;