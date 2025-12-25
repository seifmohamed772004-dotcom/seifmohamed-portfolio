import React, { useEffect, useState } from 'react';
import './Sec4.css'
import TopTitleComp from './TopTitleProps'
import IllustratedIMG from '../Assets/sec3image.png'
import { supabase } from '../Pages/Supabase';

const Sec4Home = () => {

    const [loading, setLoading] = useState(true);

    const [rowContent, setRowContent] = useState(null);

    useEffect(() => {
        async function getAPI() {
    
   
            const res = await supabase
                .from("Titles")
                .select("*")
                .eq("id", 4)
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
            <section className='Sec4Main'>
                <TopTitleComp title='WHO' titlespan='am I?' />

                <section className='Sec4Bottom'>
                    <section className='Sec4BottomLeft'>
                        <h1 className='Sec4BottomLeftTitle'>
                            {rowContent?.["enTitle"]}
                        </h1>

                        <p className='Sec4BottomLeftdesc'>
                            {rowContent?.["enSub"] }
                        </p>
                    </section>

                    <img src={IllustratedIMG} alt='' />
                </section>
            </section>
        </>
    );
}

export default Sec4Home;