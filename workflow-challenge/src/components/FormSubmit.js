import React from "react";

function FormSubmit({ register }) {
    return (
        <form className="form-body">
            <div style={{ width: "100%" }} className="terms-container">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="email address"
                    name="email"
                    id="email"
                    {...register("email", {
                        required: true,
                        // checks entered info is of email pattern
                        pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                />
            </div>

            <div className="terms-container">
                <label htmlFor="terms">Agree with terms and services</label>
                <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    {...register("terms", {
                        required: true,
                    })}
                />
            </div>
        </form>
    );
}

export default FormSubmit;
