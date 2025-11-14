import React from 'react';
import GD1 from '../Assets/Graphic Design IMG 1.png'
import GD2 from '../Assets/Graphic Design IMG 2.png'
import GD3 from '../Assets/Graphic Design IMG 3.png'
import GD4 from '../Assets/Graphic Design IMG 4.png'
import CategoryBox from '../Common-HOME/Sec6CategoryBoxProps'
import Categoryspace from '../Common-Category/CategoryBox2'
import './Sec1Cat.css'

const Sec1Cat = () => {
    return ( <>
        <section className='Sec1Main'>

<section className='Sec1MainLeft'>

<section className='Sec1MainLeftTop'>
<section className='Sec1LowerRight'>
<div className='Sec1LowerRightDot'></div>

<h1 className='OFW'>Open For Work</h1>
</section>
        <CategoryBox title="GRAPHIC DESIGGN" widthClass="width-large" />
</section>



<section className='Sec1MainLeftBottom'>

<h1 className='RFtxt'>RECOMENDED FIELDS</h1>

<section className='RecFieldsButtons'>

<section className='RecFieldsButtonsTop'>
            <Categoryspace Title="BRANDING"/>
        <Categoryspace Title="UX/UI DESIGN"/>

</section>
        <CategoryBox title="PHOTOGRAPHY" widthClass="width-large" />

</section>

</section>

</section>



<section className='Sec1MainRight'>

<section className='Sec1MainRightleft'>
<img className='categoryimg' src={GD1}/>
<img className='categoryimg' src={GD2}/>
</section>

<section className='Sec1MainRightright'>
<img className='categoryimg' src={GD3}/>
<img className='categoryimg' src={GD4}/>
</section>

</section>




        </section>
    </> );
}
 
export default Sec1Cat;