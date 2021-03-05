import React from 'react';
import './Home.css';

import CardRow from './CardRow';

function Home() {

    return (
        <div className="home">
            <div className="home__cards">
                <CardRow
                    id="2"
                    title="Apple iPhone 12"
                    price="2000"
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000"
                />
                
                <CardRow
                    id="3"
                    title="Apple iPhone SE"
                    price="350"
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-family-select-2020?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1586794486444"
                />
                <CardRow
                    id="4"
                    title="Apple Watch Series 6"
                    price="500"
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTP72_VW_34FR+watch-40-alum-gold-nc-6s_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&op_usm=0.5,0.5&.v=1566449884261,1601920567000"
                />
                <CardRow
                    id="5"
                    title="Apple Macbook Air"
                    price="1500"
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=640&hei=595&fmt=jpeg&qlt=95&.v=1613672874000"
                />
                <CardRow
                    id="6"
                    title="AirPods"
                    price="200"
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MRXJ2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489675083"
                />
                <CardRow
                    id="7"
                    title="AirPods Max"
                    price="400"
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-hero-select-202011?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5%2C0.5&.v=1604709293000"
                />
            </div>
        </div>
    )
}

export default Home
