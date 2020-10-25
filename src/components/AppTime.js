import React from 'react';
import './Styles.css';
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdDateRange } from "react-icons/md";

import sobh from "./imges/sobh.png";
import chasht from "./imges/chasht.png";
import peshin from "./imges/peshin.png";
import sham from "./imges/sham.png";
import khoftan from "./imges/khoftan.png";

class AppTime extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            code: "",
            timings: "",
            date: [],
            meta: [],
            is_loaded: false, 
        };

    }

    componentDidMount(){
        fetch(`https://api.aladhan.com/v1/timingsByCity?city=${this.props.city}&country=${this.props.country}`)
        .then(res => res.json())
        .then( json => {
            this.setState({
                is_loaded: true, 
                code: json.code,
                timings: json.data.timings,
                date: json.data.date,
                meta: json.data.meta,        
            })
        })
    }

    render(){
        const { is_loaded, code, timings, date, meta} = this.state;

        if (!is_loaded){
            return <div className="loading">Loading...</div>
        }
        else if(code !== 200){
            return <div className="loading"> Error!  Something went wrong</div>
        }else{
            return(
                <div className="time_component">
                    <div className="component_date"><MdDateRange />  {date.readable} </div>

                    <div className="component_header"> 

                        <div>
                            <div className="sun_logo"><GiSunrise /></div>
                            <p>{timings.Sunrise}</p>
                        </div>

                        <div>
                            <div className="sun_logo"><GiSunset /></div>
                            <p>{timings.Sunset}</p>
                        </div>

                    </div>

                    <div className="component_main"> 

                        <div className="component_main_section">
                            <div>{timings.Fajr}</div>
                            <img src={sobh} alt="sobh_pic"/>  
                        </div>

                        <div className="component_main_section">
                            <div>{timings.Dhuhr}</div>
                            <img src={chasht} alt="chast_pic"/>   
                        </div>

                        <div className="component_main_section">
                            <div>{timings.Asr}</div>
                            <img src={peshin} alt="peshin_pic"/>
                        </div>

                        <div className="component_main_section">
                            <div>{timings.Maghrib}</div>
                            <img src={sham} alt="sham_pic"/>    
                        </div>

                        <div className="component_main_section">
                            <div>{timings.Isha}</div>
                            <img src={khoftan} alt="khoftan_pic"/>
                        </div>
                    </div>

                </div>
            );
        }
        

    }

}

export default AppTime;
