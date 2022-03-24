import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('https://dev.dashmed.in/sample-data').then((resp) =>
            setData(resp.data.data)
        );
    }, [])

    const notify = () => toast.success("List Item Clicked", {
        position: "top-right",

    });

    return (
        <>

            <div className="navbar">
                <h2>
                    MedDetails
                </h2>
            </div>

            <table id="customers">
                <tr>
                    <th>MedName</th>
                    <th>SaltName</th>
                    <th>Manufacturer</th>

                </tr>

                {

                    data.map((item) => (
                        <>
                            <tr>

                                <td>
                                    <button onClick={notify}>
                                        {item.medName}
                                    </button>

                                </td>
                                <td>{item.saltName}</td>
                                <td>{item.manufacturer}</td>
                            </tr>

                        </>
                    ))

                }
                <ToastContainer
                />
            </table>

        </>
    )
}

export default Home