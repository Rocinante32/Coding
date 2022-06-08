import React from "react";

function Profile({ watch, githubInfo, noUserFound }) {
    const { firstname, lastname, username, email } = watch();
    return (
        <div className="profile">
            <div className="profile-container">
                <div className="img-placeholder">
                    {/* If user is found render image if not render alternate text showing no user found */}
                    {!noUserFound && (
                        <img
                            className="profile-img"
                            src={githubInfo?.avatar_url}
                            alt="user avatar"
                        ></img>
                    )}
                    {noUserFound && (
                        <h2>No Github user found for: {username}</h2>
                    )}
                </div>
                <div style={{ height: "50%" }}>
                    <div>
                        {!noUserFound && <h2>{username}</h2>}
                        <h3>{`${firstname} ${lastname}`}</h3>
                        <h3>{email}</h3>
                    </div>
                    <div>
                        {/* allow user to search again by restarting workflow */}
                        <button onClick={() => window.location.reload()}>
                            Search again
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
