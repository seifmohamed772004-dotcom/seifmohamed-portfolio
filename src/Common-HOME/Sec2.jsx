import React, { useEffect, useState } from 'react'; // FIXED: Added missing hooks
import WBP from '../Common-HOME/WhiteButtonProp.jsx';
import './Sec2.css'
import Showreel from '../Assets/Showreel.mp4'
import { supabase } from '../Pages/Supabase';

const Sec2 = () => {
    const [loading, setLoading] = useState(true);
    const [rowContent, setRowContent] = useState(null);

    useEffect(() => {
        async function getAPI() {

            const res = await supabase
                .from("Titles")
                .select("*")
                .eq("id", 1) 
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

    return ( 
        <>
            <section className='Sec2Main'>
                <section className='Sec2Left'>
                    <section className='Sec2LeftTop'>
                  
                        <h1 className='Sec2Title'>
                            {rowContent?.["enTitle"]}
                        </h1>
                        <p className='Sec2Desc'>
                            {rowContent?.["enSub"]}
                        </p>
                    </section>

                    <WBP Btntitle='Create Together!' />
                </section>

                <video src={Showreel} type="video/mp4" controls className='ShowreelVideo'/>
            </section>
        </> 
    );
}

export default Sec2;