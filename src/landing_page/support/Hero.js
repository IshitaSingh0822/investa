import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-5' id="supportWrapper">
                <h4>Support Portal</h4>
                <Link to="/support/tickets">Track Tickets</Link>
            </div>

            <div className='row p-5 m-3'>
                <div className='col-6 p-5'>
                    <h1 className='fs-3 mb-3'>
                        Search for an answer or browse help topics to create a ticket
                    </h1>

                    <input
                        className="mb-3"
                        placeholder='Eg: how do i activate F&O, why is my order getting rejected..'
                    /><br/>

                    <Link style={{ marginRight: "20px" }} to="/support/account-opening">
                        Track account opening
                    </Link>

                    <Link style={{ marginRight: "20px" }} to="/support/segment-activation">
                        Track segment activation
                    </Link>

                    <Link style={{ marginRight: "20px" }} to="/support/intraday-margins">
                        Intraday margins
                    </Link>
                    <br />

                    <Link to="/support/kite-manual">Kite user manual</Link>
                </div>

                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li className='mb-3'>
                            <Link to="/support/takeovers-jan-2024">
                                Current Takeovers and Delisting - January 2024
                            </Link>
                        </li>
                        <li>
                            <Link to="/support/intraday-leverages">
                                Latest Intraday leverages - MIS & CO
                            </Link>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
