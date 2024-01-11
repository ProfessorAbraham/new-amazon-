import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img
                    className="home__img"
                    src="https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg"
                    alt="home__img"
                />
                <div className="home__row">
                    <Product
                        id="45678901"
                        title={
                            "Maraa Wall Basket Decor set of 3. Add Luxury to any Space - Modern Boho, Farmhouse, and Rustic Style Woven Wall Décor. Transform your Bedroom, Kitchen, Living Room or Home Office with these Wicker Wall Art"
                        }
                        image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/b8cf0d9d-b0a6-4979-a638-d813c1352b67._CR0,358,4999,2616_SX460_QL70_.jpg"
                        price={246.89}
                        rating={5}
                    />

                    <Product
                        id="23456789"
                        title={
                            "Arlo - Wireless Home Security | Night vision, Indoor/Outdoor, HD Video, Wall Mount | Includes Cloud Storage & Required Base Station | 1-Camera System (VMS3130)"
                        }
                        image="https://m.media-amazon.com/images/I/71yMqy+YI9L._AC_UL320_.jpg"
                        price={187.28}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="98765432"
                        title={
                            " Xmas Trees Stocking Photography Background Indoors Winter Holiday Party Decoration New Year Photo Backdrops Studio Booth Props"
                        }
                        image="https://m.media-amazon.com/images/I/6176VwwXYFL._AC_UL320_.jpg"
                        price={178.9}
                        rating={5}
                    />
                    <Product
                        id="12345678"
                        title={
                            "Toys from Learning Resources and Educational Insights"
                        }
                        image="https://m.media-amazon.com/images/I/31xGEnkAmoL._AC_UF226,226_FMjpg_.jpg"
                        price={89.67}
                        rating={4}
                    />
                    <Product
                        id="87654321"
                        title={
                            "Logitech G613 LIGHTSPEED Wireless Mechanical Gaming Keyboard, Multihost 2.4 GHz + Blutooth Connectivity - Black"
                        }
                        image="https://m.media-amazon.com/images/I/51jay95Zw5L._AC_UL320_.jpg"
                        price={867.89}
                        rating={5}
                    />
                    <Product
                        id="34567890"
                        title={
                            "Aduro 40W 6-Port USB Desktop Charging Station Hub Wall Charger for iPhone iPad Tablets Smartphones with Smart Flow (Black)"
                        }
                        image="https://m.media-amazon.com/images/I/61QzBR02g3L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        price={145.33}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="56789012"
                        title={
                            "AIWA ARC Noise Cancelling Over Ear Wireless Headphones with 45 Hour Battery Life, Fast Charging, Multipoint"
                        }
                        image="https://m.media-amazon.com/images/I/71vxxJqvJxL._AC_UL320_.jpg"
                        price={77.99}
                        rating={3}
                    />
                    <Product
                        id="78901234"
                        title={
                            "AqtivAqua Swimming Goggles, DX Wide View Swim Goggles for Adult Men Women, Anti Fog No Leaking"
                        }
                        image="https://m.media-amazon.com/images/I/91SF7Me+0DL._AC_UL320_.jpg"
                        price={43.43}
                        rating={5}
                    />
                    <Product
                        id="89012345"
                        title={
                            "160 Pack Silver Plastic Cutlery Disposable Silverware - 80 Forks, 40 Knives, 40 Spoons - For Catering, Parties, Dinners, Weddings, and Everyday Use"
                        }
                        image="https://m.media-amazon.com/images/I/71sOTFhHQDL._AC_UL320_.jpg"
                        price={99.89}
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="67890123"
                        title={
                            "Luminarc Glass 10-Piece Set Stackable Bowl Set,Clear"
                        }
                        image="https://m.media-amazon.com/images/I/717Hk5-mSqL._AC_UL320_.jpg"
                        price={68.6}
                        rating={5}
                    />
                    <Product
                        id="43210987"
                        title={
                            "Hume Supernatural Invisible Whole Body Deodorant Balm - Full Body Protection - Aluminum Free, No Baking Soda - Anti-Chafing Odor Control - Clinically Tested on Sensitive Skin (Desert Bloom, 1-Pack)"
                        }
                        image="https://m.media-amazon.com/images/I/7165D71OKYL._AC_UL320_.jpg"
                        price={23.87}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="21098765"
                        title={
                            "SAMSUNG 65-Inch Class QLED Q80A Series - 4K UHD Direct Full Array Quantum HDR 12x Smart TV with Alexa Built-in and 6 Speaker Object Tracking Sound - 60W, 2.2.2CH"
                        }
                        image="https://images-na.ssl-images-amazon.com/images/I/41WjcXhmjjL._AC_SX184_.jpg"
                        price={148.89}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
