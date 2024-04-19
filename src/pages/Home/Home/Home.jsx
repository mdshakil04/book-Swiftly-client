import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import BookingCategories from "../BookingCategories/BookingCategories";
import ExtraSection from "../ExtraSection/ExtraSection";
import Offers from "../Offers/Offers";
import ReactTabs from "../Tabs/ReactTabs";
import TopServices from "../TopServices/TopServices";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>
                    Book Swiftly | Home
                </title>
            </Helmet>
            <div  className=" ">
            <Banner></Banner>
            <ExtraSection></ExtraSection>
            <TopServices></TopServices>
            <Offers></Offers>
            <ReactTabs></ReactTabs>
            <BookingCategories></BookingCategories>
            
        </div>
        </>
    );
};

export default Home;