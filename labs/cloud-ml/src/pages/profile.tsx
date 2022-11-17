import React from "react";
import '../css/profile.css';
import HeaderCentral from "../components/headerCentral";
import UnLoginButton from "../components/unloginButton";
import TableHistory from "../components/tableHistory";
import OperationHistory from "../models/operationHistory";
import { getHistory } from "../apis/historyApi";
import { NavigateFunction, useNavigate } from "react-router-dom";

function Profile() {
    const navigate: NavigateFunction = useNavigate();
    const [operations, setOperations] = React.useState<OperationHistory[]>([]);
    React.useEffect(() => {
        
        const get_history = async () => {
            const history = await getHistory();
            if(history === true){

                get_history()

            }else if(history === null){

                navigate('/login');

            }else{

                setOperations(history);
            }
        }
        get_history()
    },
    // eslint-disable-next-line
        []
    );
    return (
        <React.Fragment>
            <HeaderCentral />
            <main className="container">
            <section className="profile-list">
                <div>
                    <div className="profile-title mb-3">
                        Это ваш профиль
                    </div>
                </div>
                <UnLoginButton />
            </section>
                <div>
                    <div className="profile-title mb-3">
                        История действий
                    </div>
                    <TableHistory data = {operations}/>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Profile;