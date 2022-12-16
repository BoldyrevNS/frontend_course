import image4 from "../../content/mainPage/575a0322f3b36ca2fecb23ad2c6dd5ad.svg"
import Search from "./components/Search";
import {useDispatch, useSelector} from "react-redux";
import {getServerByCategory, getServers} from "../../redux/features/servers/ServerSlice";
import {FC, useEffect} from "react";
import ServerItem from "./components/ServerItem";
import {useAppDispatch, useAppSelector} from "../../hooks";
import Categories from "./components/Category";

const DiscoverView:FC=()=> {

    const {servers, types} = useAppSelector((state) => state.servers)

    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(getServers())
    }, [dispatch]);


    return <div className={'discover-body '}>
        <section className="discover-section1">
            <div className="discover-section1-content">
                <h1 className="discover-section1-top-text">
                    FIND YOUR COMMUNITY ON DISCORD
                </h1>
                <div className={'mt-10 text-[clamp(16px,2vw,20px);]'}>
                    From gaming, to music, to learning, there's a place for you.
                </div>
            </div>
        </section>

        <Search/>

        <section>
            <div className="discover-category">

                <Categories props={types}/>

                <div className="discover-col2">
                    <h2> {servers.length?servers.length +'Results Found':0} </h2>

                    <div>

                        {servers.length?servers.map((server, key)=>{

                            return <ServerItem props={server} key={key} />
                        }):<div>
                            Здесь пока ничего нет
                        </div>
                        }

                    </div>
                </div>


            </div>
        </section>


        <section>
            <div className="discover-section2">
                <h1 className="discover-headline">
                    Have a server you want to add to Discovery?
                </h1>
                <div className="discover-section1-buttons">
                    <button className="discover-section1-button section1-button2">
                        Make Your Community Public
                    </button>
                </div>
            </div>
        </section>


        <section className="discover-section3">
            <div className="discover-div-headline">
                <h1 className="discover-headline">
                    Find a place where you belong
                </h1>
                <span className="discover-under-headline"> Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</span>
                <button className="discover-section1-button discover-section1-button2">
                    Join Discord
                </button>
            </div>
            <img className="discover-section-img" src={image4} alt="img"/>
            <div className="discover-section1-buttons">
            </div>

        </section>
    </div>
}

export default DiscoverView