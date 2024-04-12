import Banner from "../Banner/Banner";
import BookingCategories from "../BookingCategories/BookingCategories";
import ExtraSection from "../ExtraSection/ExtraSection";
import Offers from "../Offers/Offers";
import ReactTabs from "../Tabs/ReactTabs";
import TopServices from "../TopServices/TopServices";

const Home = () => {
    return (
        <div  className="">
            <Banner></Banner>
            <ReactTabs></ReactTabs>
            <Offers></Offers>
            <ExtraSection></ExtraSection>
            <BookingCategories></BookingCategories>
            <TopServices></TopServices>
        </div>
    );
};

export default Home;