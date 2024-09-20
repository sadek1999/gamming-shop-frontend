import Banner from "../../../components/Banner";
import Products from "../../../components/products";
import Cards from "../../card/card";
import Category from "../category";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
        <Category></Category>
        {/* <div>
            <h1 className="font-bold text-black text-center text-3xl"> Our Products </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
        </div> */}
        
           <Products></Products>
        </div>
    );
};

export default Home;