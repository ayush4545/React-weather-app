import React ,{useState,useEffect}from 'react'
import './css/style.css';



const Tempapp=()=>{
    const [city, setCity] = useState(null);
    const [search,setSearch]=useState();

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d636883db482156273339c910ced1564`
            const response=await fetch(url)
            const resJson= await response.json();
           console.log(response)
           console.log(resJson)
            setCity(resJson.main);
            
        }

        fetchApi()
    },[search])
    return(
        <>
           <div className='box'>
               <div className="inputData">
                   <input type='search' value={search}className='inputFeild' onChange={(event) =>{
                     setSearch(event.target.value)
                   }} />
               </div>
               {!city ? (
                   <div style={{textAlign:'center',marginTop:'50px'}}>
                   <p>No Data Found</p>
                   </div>
                   ):
                   (
                    <div>
                        <div className='info'>
                            <h2 className='location'>
                            <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className='temp'>
                             {city.temp}
                            </h1>

                            <h3 className='tempmin_max'> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>

                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                        </div>
                )}
           </div>
        </>
    )
}

export default Tempapp;