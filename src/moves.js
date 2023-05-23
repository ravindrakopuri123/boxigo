import React from "react";
import { useEffect, useState } from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Grid } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import WarningIcon from '@mui/icons-material/Warning';
import Steptwo from "./stepTwo";
import Data from "./button";



function Moves() {
    const [dummyData, setDummyData] = useState([]);
    const [showAdditionalData, setShowAdditionalData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://test.api.boxigo.in/sample-data/');
                const data = await response.json();
                setDummyData(data.Customer_Estimate_Flow);
                console.log(data.Customer_Estimate_Flow)
            } catch (error) {
                console.log('Error fetching dummy data:', error);
            }
        };
        fetchData();
    }, []);
    const handleViewAllClick = () => {
        setShowAdditionalData(!showAdditionalData);
    };


    return (
        <div>
            {dummyData.map((items) => (
                <div>
                    <Grid container>
                        <Grid xs={6}>
                            <h4>From</h4>
                            <div key={items.id}>
                                {items.moving_to}
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div><ArrowCircleRightIcon size={'30px'} style={{color:"red"}}/></div>
                        </Grid>
                        <Grid item xs={1}>
                            <h4>To</h4>

                            <div style={{ display: "flex", flexWrap: "nowrap" }}>
                                <div> {items.moving_to}</div>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <h5>Request#</h5>
                            <h5 style={{ color: "#f53527" }}>  {items.estimate_id}</h5>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={8} >
                        <div direction="row" style={{ display: "flex", flexWrap: "nowrap" }}>
                                    <div><HomeIcon style={{ color: "red", paddingTop: "20px" }} iconPosition="start" />{items.property_size}</div>
                                    <div style={{ margin: "20px" }}><ViewQuiltIcon style={{ color: "red" }} iconPosition="start" />{items.uniquieId} 32</div>
                                    <div style={{ margin: "20px" }}><ConnectWithoutContactIcon style={{ color: "red" }} iconPosition="start" />{items.distance}</div>
                                    <div style={{ margin: "20px" }}><PermContactCalendarIcon style={{ color: "red" }} iconPosition="start" />{items.order_date}</div>
                                    <div style={{ margin: "20px" }}><CheckBoxIcon style={{ color: "red" }} iconPosition="start" />is flexible</div>
                                </div>
                        </Grid>
                        <Grid xs={4}>
                            <div style={{ paddingTop: "30px" }}>
                                <button onClick={handleViewAllClick} style={{ color: '#f53527', padding: '5px', borderColor: "#f53527" }} >
                                    {showAdditionalData ? 'View More Details' : 'View More Details'}

                                </button>
                            </div>
                            <div style={{ marginTop: "-30px", marginLeft: "140px", }}>
                                <button style={{ padding: '7px', backgroundColor: "#f53527", color: "white", border: "none" }} >
                                    {showAdditionalData ? 'Quotes Awaiting' : 'Quotes Awaiting'}

                                </button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid>
                    <div style={{ display: "flex", flexWrap: "nowrap", marginTop: "13px" }}><WarningIcon style={{ color: "red" }} iconPosition="start" />Disclaimer:-Please update your movie data defour two dayes of shifting</div>
                    </Grid>
                    {showAdditionalData && <Data />}

                    <hr style={{marginTop:'30px',}}/>
                </div>
            ))}
        </div>
    );
};
export default Moves