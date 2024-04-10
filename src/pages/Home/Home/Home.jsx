import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import Offers from "../Offers/Offers";
import ReactTabs from "../Tabs/ReactTabs";

const Home = () => {
    return (
        <div  className="">
            <Banner></Banner>
            <ReactTabs></ReactTabs>
            <Offers></Offers>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;