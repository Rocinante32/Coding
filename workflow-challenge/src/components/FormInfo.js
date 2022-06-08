import React from "react";

function FormInfo({ register, errors }) {
    return (
        <form className="form-body">
            <label htmlFor="firstname">First Name</label>
            <input
                type="text"
                placeholder="first name"
                name="firstname"
                id="firstname"
                {...register("firstname", {
                    required: true,
                })}
            />
            <p className={`${!errors.firstname && "hidden"} error-text`}>
                Please add a first name
            </p>

            <label htmlFor="lastname">Last Name</label>
            <input
                type="text"
                placeholder="last name"
                name="lastname"
                id="lastname"
                {...register("lastname", {
                    required: true,
                })}
            />
            <p className={`${!errors.lastname && "hidden"} error-text`}>
                Please add a last name
            </p>

            <label htmlFor="username">Github Username</label>
            <input
                type="text"
                placeholder="Github Username"
                name="username"
                id="username"
                {...register("username", {
                    required: true,
                })}
            />
            <p className={`${!errors.username && "hidden"} error-text`}>
                Please add a username
            </p>
        </form>
    );
}

export default FormInfo;
