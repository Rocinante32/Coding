import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Form from "./components/Form";
import Profile from "./components/Profile";

function App() {
    const [step, setStep] = useState(0);
    const [githubInfo, setGithubInfo] = useState();
    const [noUserFound, setNoUserFound] = useState(false);

    //react-hook-form setup
    const {
        watch,
        register,
        formState: { errors, isValid },
    } = useForm({ mode: "all" });

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleNext = () => {
        setStep(step + 1);
        //pre fetch data once github username has been entered
        if (step === 1) {
            fetchData();
        }
    };

    const fetchData = () => {
        axios
            .get(`https://api.github.com/users/${watch().username}`)
            .then((response) => {
                setGithubInfo(response.data);
            })
            .catch((err) => {
                //if 404 thrown set noUserFound
                if (err.response.status === 404) {
                    setNoUserFound(true);
                }
            });
    };

    return (
        <div className="App">
            <div>
                {step <= 2 && (
                    <Form
                        handleBack={handleBack}
                        handleNext={handleNext}
                        step={step}
                        register={register}
                        watch={watch}
                        errors={errors}
                        isValid={isValid}
                    />
                )}
                {step === 3 && (
                    <Profile
                        watch={watch}
                        githubInfo={githubInfo}
                        noUserFound={noUserFound}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
