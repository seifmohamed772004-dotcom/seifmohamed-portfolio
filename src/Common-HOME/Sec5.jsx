import React, { useState, useEffect } from 'react';
import './Sec5.css'
import TopTitleComp from './TopTitleProps'
import Cardcomp from './Sec5CardsProps'
import { supabase } from '../Pages/Supabase';
const  Sec5Home = () => {


    const [loading, setLoading] = useState(true);

    const [rowContent, setRowContent] = useState(null);

    useEffect(() => {
        async function getAPI() {
    
   
            const res = await supabase
                .from("Titles")
                .select("*")
                .eq("id", 38,4)
                .single();
            
            console.log("Supabase Response:", res); 
            
            if (res.data) {
                setRowContent(res.data);
            }

            setLoading(false);
        }
        getAPI();
    }, []);

    if (loading) return <p>Loading...</p>;



    return ( <>
<section className='Sec5Main'>
 <TopTitleComp title= {rowContent?.["enTitle"] }/>

<section className='Sec5Bottom'>
<Cardcomp CardNum='1' CardTitle='Analyze' CardDesc='Study the market needs and what would be most suitable for you!'/>
<Cardcomp CardNum='2' CardTitle='Filter' CardDesc='Choose the best approach that would be the ultimate move to lead your brand to success'/>
<Cardcomp CardNum='3' CardTitle='Excute' CardDesc='Work on what was visualized and launching your brand to all platforms'/>


</section>
</section>
    </> );
}
 
export default Sec5Home;