import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { AiOutlineStock } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { startProTrade } from '../Api/Api';
const Protrader = () => {
    const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate=useNavigate()
    const onSubmitUser = (data) => {
        console.log(data);
    }

    const startTrade=async()=>{
        await startProTrade()
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);    
        })

    }
    return (
        <section className='container-fluid dashboard'>
            <div className="col-11 m-auto pt-4">
                <div className="head">
                    <h3 className="text-center user-head">Pro trader Statistics</h3>
                </div>

                <div className='d-flex justify-content-end'>

                    <button className='start_btn px-2' type="button" onClick={() => setIsOffCanvasOpen(true)} >Enter credentials</button>

                    <button className='start_btn px-2 ms-2' type="button" onClick={startTrade} >Start protrader</button>
                </div>

                <div
                    className={`offcanvas offcanvas-end ${isOffCanvasOpen ? "show" : ""}`}
                    tabindex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                    title='createCanvas'
                >
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Protrader credentials</h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            onClick={() => setIsOffCanvasOpen(false)}
                        ></button>
                    </div>
                    {/* ============ offcanvas create ====================== */}
                    <div className="offcanvas-body">
                        <div className="row canva">
                            <div className="col-12 card-section">
                                <div className="login-sign-form-section">
                                    <form
                                        className="login-sign-form"
                                        onSubmit={handleSubmit(onSubmitUser)}
                                    >
                                        <div className="form-group">
                                            <div className="label-time">
                                                <label>
                                                    Username<sup className="super">*</sup>
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                
                                                name="user_name"
                                                className="form-control"
                                                {...register("user_name", {
                                                    required: "Please enter the username",
                                                })}
                                            />
                                            <p className="error-msg"></p>
                                        </div>

                                        <div className="form-group">
                                            <div className="label-time">
                                                <label>
                                                    Password<sup className="super">*</sup>
                                                </label>
                                            </div>
                                            <input
                                                type="password"
                                                
                                                name="password"
                                                className="form-control"
                                                {...register("password", {
                                                    required: "Please enter the username",
                                                })}
                                            />
                                            <p className="error-msg"></p>
                                        </div>

                                        <div className="form-group">
                                            <div className="label-time">
                                                <label>
                                                    Login pin TOTP<sup className="super">*</sup>
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                
                                                name="totp"
                                                className="form-control"
                                                {...register("totp", {
                                                    required: "Please enter the username",
                                                })}
                                            />
                                            <p className="error-msg"></p>
                                        </div>

                                        <div className="form-group">
                                            <div className="label-time">
                                                <label>
                                                    Client secret key<sup className="super">*</sup>
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                
                                                name="client_secret"
                                                className="form-control"
                                                {...register("client_secret", {
                                                    required: "Please enter the username",
                                                })}
                                            />
                                            <p className="error-msg"></p>
                                        </div>

                                        <div className="form-group">
                                            <div className="label-time">
                                                <label>
                                                    API key<sup className="super">*</sup>
                                                </label>
                                            </div>
                                            <input
                                                type="text"
                                                
                                                name="api_key"
                                                className="form-control"
                                                {...register("api_key", {
                                                    required: "Please enter the username",
                                                })}
                                            />
                                            <p className="error-msg"></p>
                                        </div>


                                        <div className="d-flex justify-content-center mt-4">
                                            <button
                                                type="submit"
                                                className="start_btn"
                                            > Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-dash">
                        <div className="card_das card_das_1 pointer" onClick={()=>navigate("/protrader/banknifty")}>
                            <div className="das_para col-lg-10 d-flex flex-column justify-content-between">
                                <div>
                                    <h5>BANK NIFTY</h5>
                                </div>
                                <div className="rate-das">
                                    <h4>+50</h4>
                                </div>
                            </div>
                            <div className="das_icon col-lg-2">
                                <AiOutlineStock />
                            </div>
                        </div>
                    </div>

                    <div className="col-dash">
                        <div className="card_das card_das_1 pointer" onClick={()=>navigate("/protrader/nifty")}>
                            <div className="das_para col-lg-10 d-flex flex-column justify-content-between">
                                <div>
                                    <h5>NIFTY</h5>
                                </div>
                                <div className="rate-das">
                                    <h4>+50</h4>
                                </div>
                            </div>
                            <div className="das_icon col-lg-2">
                                <AiOutlineStock />
                            </div>
                        </div>
                    </div>

                    <div className="col-dash">
                        <div className="card_das card_das_1 pointer" onClick={()=>navigate("/protrader/finnifty")}>
                            <div className="das_para col-lg-10 d-flex flex-column justify-content-between">
                                <div>
                                    <h5>FIN NIFTY</h5>
                                </div>
                                <div className="rate-das">
                                    <h4>+50</h4>
                                </div>
                            </div>
                            <div className="das_icon col-lg-2">
                                <AiOutlineStock />
                            </div>
                        </div>
                    </div>

                    <div className="col-dash">
                        <div className="card_das card_das_1 pointer" onClick={()=>navigate("/protrader/midcpnifty")}>
                            <div className="das_para col-lg-10 d-flex flex-column justify-content-between">
                                <div>
                                    <h5>MIDCP NIFTY</h5>
                                </div>
                                <div className="rate-das">
                                    <h4>+50</h4>
                                </div>
                            </div>
                            <div className="das_icon col-lg-2">
                                <AiOutlineStock />
                            </div>
                        </div>
                    </div>

                    <div className="col-dash">
                        <div className="card_das card_das_1 pointer" onClick={()=>navigate("/protrader/sensex")}>
                            <div className="das_para col-lg-10 d-flex flex-column justify-content-between">
                                <div>
                                    <h5>SENSEX</h5>
                                </div>
                                <div className="rate-das">
                                    <h4>+50</h4>
                                </div>
                            </div>
                            <div className="das_icon col-lg-2">
                                <AiOutlineStock />
                            </div>
                        </div>
                    </div>

                    <div className="col-dash">
                        <div className="card_das card_das_1 pointer" onClick={()=>navigate("/protrader/bankex")}>
                            <div className="das_para col-lg-10 d-flex flex-column justify-content-between">
                                <div>
                                    <h5>BANKEX</h5>
                                </div>
                                <div className="rate-das">
                                    <h4>+50</h4>
                                </div>
                            </div>
                            <div className="das_icon col-lg-2">
                                <AiOutlineStock />
                            </div>
                        </div>
                    </div>



                </div>
            </div>


        </section>
    )
}

export default Protrader