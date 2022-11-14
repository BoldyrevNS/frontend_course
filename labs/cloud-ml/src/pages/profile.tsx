import React from "react";
import '../css/profile.css';
import HeaderCentral from "../components/headerCentral";
import UnLoginButton from "../components/unloginButton";
import TableHistory from "../components/tableHistory";
import OperationHistory from "../models/operationHistory";
import { getHistory } from "../apis/historyApi";

function Profile() {

    const [operations, setOperations] = React.useState<OperationHistory[]>([]);
    React.useEffect(() => {
        
        const get_history = async () => {
            const image = await getHistory(sessionStorage.getItem('user'));
            setOperations(image)
        }
        get_history()
    },
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