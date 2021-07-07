import React,{useEffect}  from 'react'
import { useState } from 'react';
import './covid.css'
const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData= await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error)
            
        }
        
    }
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        
        <section>
         <div class="Header">
            <h1>Covid</h1>
            <h1>Live Statistics</h1>
            <p>Daily Statistics of Covid Cases</p>
         </div>
         <div class="row1-container">  
            <div className="box box-down blue">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> COVID STATISTICS </span> OF </p>
                            <p className="card__total card__small">INDIA</p>
                        </div>
                    </div>  
            </div>          
            <div className="box red">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> LAST </span> UPDATED </p>
                            <p className="card__total card__small">{data.lastupdatedtime}</p>
                        </div>
                    </div>    
            </div>
            <div className="box box-down blue">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> RECOVERED </p>
                            <p className="card__total card__small">{data.recovered}</p>
                        </div>
                    </div>    
            </div>
         </div>
         <div class="row2-container">   
            <div className="box box-down cyan">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> DEATHS </p>
                            <p className="card__total card__small">{data.deaths}</p>
                        </div>
                    </div>    
            </div>
            <div className="box orange">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> CONFIRMED </p>
                            <p className="card__total card__small">{data.confirmed}</p>
                        </div>
                    </div>    
            </div>
            <div className="box box-down cyan">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> ACTIVE </p>
                            <p className="card__total card__small">{data.active}</p>
                        </div>
                    </div>    
            </div>
         </div>  
         <div class="row3-container">  
         
         </div>
        </section>
    )
}

export default Covid
