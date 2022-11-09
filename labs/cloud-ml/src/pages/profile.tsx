import React from "react";
import '../css/profile.css';
import HeaderCentral from "../components/headerCentral";
import UnLoginButton from "../components/unloginButton";
import TableHistory from "../components/tableHistory";

function Profile() {

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
                    <TableHistory />
                </div>
            </main>
        </React.Fragment>
    );
}

export default Profile;