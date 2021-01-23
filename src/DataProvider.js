import React,{createContext,useState,useEffect} from 'react';

export const DataContext = createContext();

export default function DataProvider({children}) {
    
    const [products, setproducts] = useState([
        {
            "id":1 ,
            "titele":"choses1",
            "size":[
                "40",
                "41",
                "42",
                "43",
                "44",
                "45"
            ],
            "color":[
                "SaddleBrown",
                "white",
                "black",
                "gray",
                "blue"
            ],
            "img":[
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/137592626_5632228010124495_8873417896396855482_o.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeGxj3arPs1rYrDSB0Ez7I0w0cWmRZeJHRzRxaZFl4kdHIZXyqeFpgTuOpHegCSNBjMGH4CRWEIqZG2i-4Rhm-RZ&_nc_ohc=P3sj3xizN7EAX9OBf8R&_nc_ht=scontent.fcai20-1.fna&oh=82a15df8578b269a1d8008ccc3015724&oe=602466CF",
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/137608112_5632228006791162_208153941946097220_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeHfEnHRkdmUTX_kP25T-UZXSZle5lWR2MdJmV7mVZHYxyqRbVHRhuX6-eEqkZDfHixBR2RNmL7Z5tUjyEIhzf5j&_nc_ohc=Chy_nMYTXI4AX9FXKXn&_nc_ht=scontent.fcai20-1.fna&oh=63d18de0c7b097c808cb57ee499b89b3&oe=60239B4A",
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/137509701_5632228016791161_2302976070955559662_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeF81WxFezG2rRhyiLbo-BoojwajIMZxJG2PBqMgxnEkbTkSri2Mz-b_pbOW9vBl2LlAObsyVK50HLwKOsXf3guc&_nc_ohc=RpgDt1Q3NWMAX-SoJAd&_nc_ht=scontent.fcai20-1.fna&oh=2b794a267eb7b75022706255287c21b0&oe=6024850D",
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/138030179_5632228013457828_6497428439347306579_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEv65u9UucjOGf8vMb8UV2V20M5Dxuzr93bQzkPG7Ov3V8e7wzvdswNoRw_FhWdpMM3LeMyYLCi82vS7ePVv6pR&_nc_ohc=tI63u-SCBusAX-3c94n&_nc_ht=scontent.fcai20-1.fna&oh=d19242d855ddb3f4afc971148a8746ae&oe=6023CDF0",
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/138329325_5632228020124494_7291239514800256126_o.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFj7ZE38_I6KbGHYs_PB9TPA42cJpav2aUDjZwmlq_ZpR0w9gFrSWrCmW6g4bI9Np2CfZ6eIhM800INEWpGuCOG&_nc_ohc=mWMSXXtq3O4AX_Dph5j&_nc_ht=scontent.fcai20-1.fna&oh=c93ab8a7247610b9875feeb4d72b1157&oe=60222EB4"
            ],
            "price":100,
            "count":1
        },
        {
            "id":2 ,
            "titele":"choses2",
             "size":[
                "40",
                "41",
                "42",
                "43",
                "44",
                "45"
            ],
            "color":[
                "gray",
                "black",
                "white",
                "blue"
            ],
            "img":[
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/137607997_5631448396869123_3245971787938328555_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeHywFq9cNsKI4wEUyeDfSGaNTYQcaGqX9c1NhBxoapf1zYoRMe5weaJn1tgrpHswuAqBrMzhyB4Z6zw1-hmOArW&_nc_ohc=1P_nztHKdyIAX9wawut&_nc_ht=scontent.fcai20-1.fna&oh=2e6ca9d829f14f7bcdbc6195fa33fd44&oe=60235A88",
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/137503319_5631448400202456_3652393131367023248_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFYqVaimwKeA1hAuR6kjx4UdsRmwRr-zWR2xGbBGv7NZKhycCyc99Yl1KbD8DcHL7_-YL32TARiRIJrerFUZdvR&_nc_ohc=SqbYt--GHPkAX_gQ0gg&_nc_ht=scontent.fcai20-1.fna&oh=fa2267b3660649012fc52e72432a5f03&oe=6023CB9A",
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/137534216_5631448390202457_1674423777436549275_o.jpg?_nc_cat=103&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeHWaAImKiZ7HSL70jDYk0BN75XnfHXntTfvled8dee1Nz6rPSAdF34t53MRkGr-PgoJI2t_7yMbZjXYXPAD-Q4M&_nc_ohc=s6ZnV0guN8cAX_i8IVw&_nc_ht=scontent.fcai20-1.fna&oh=bcb208f14ed2b0786392821adfb792d6&oe=6021CFA8",
                "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/138725402_5631448393535790_1464235485956471182_o.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeGuCEzPHtBIBBSHS0wdwlz-zREa7u7WucXNERru7ta5xdKTjW8SsH6RekEsTXjNnVJiz4dVyPxps8ymgmCWVh_L&_nc_ohc=zbmc68j5juwAX8AfIDF&_nc_ht=scontent.fcai20-1.fna&oh=dfdf2250c1951d8ea7bcea066eb11124&oe=6023692C"
            ],
            "price":150,
            "count":1
        },  
        {
            "id":3 ,
            "titele":"choses3",
             "size":[
            "40",
            "41",
            "42",
            "43",
            "44",
            "45"
            ],
            "color":[
                "GoldenRod",
                "black"
            ],
            "img":[
            "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/133781671_5589314171082546_8845583950106000557_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeENO_yk4D1g9g1eRs4jOdBOADt5CZxXYeQAO3kJnFdh5JJp3r6NhGNebD2ggh9ZnNiLg0x_bbUj808lQSe6SCAv&_nc_ohc=FvyFOeGJpf4AX-qqRgU&_nc_ht=scontent.fcai20-1.fna&oh=d93fcd446a18b86c02732b3ff49e46bb&oe=60237C77",
            "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/135046597_5585145034832793_1610847750359625575_o.jpg?_nc_cat=100&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeExI_1VTIHLgWu4TrsqMX2WxMjL4kULz0PEyMviRQvPQ3EPrXkwAPLBxw5V4jOWHIAKlbX9I5nnT6MkWptJIHJy&_nc_ohc=r8XUGVIWFN8AX963Y3N&_nc_ht=scontent.fcai20-1.fna&oh=8f78fbd8584bfb40c943418aeb6b6c4e&oe=6025271F"
            ],
        "price":200,
        "count":1
        },    
        {
            "id":4 ,
            "titele":"choses4",
                "size":[
            "40",
            "41",
            "42",
            "43",
            "44",
            "45"
        ],
        "color":[
            "gray",
            "blue",
            "black"
        ],
        "img":[
            "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/136431491_5610148228999140_4042937696290724580_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeHEnAskDv6-28S_clAVWJR1t3c8vdRFwhO3dzy91EXCE5dAmAjSyXUjmQKpoTcqIM_QCQ5miwao48SCVjEheQqM&_nc_ohc=aFzPgv85oKQAX_xsEif&_nc_ht=scontent.fcai20-1.fna&oh=cc6f7053ff6a02c8506eb194f28b2b1f&oe=60219375",
            "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/136767132_5610148218999141_3729315357368763194_o.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeHW0woCLS5Ft8__k4strxiz_lWTNGYGHPj-VZM0ZgYc-OumaWSXsYNpLQR4pZ2J6sKHMJLLdQCI3D2Rgjy7x_ML&_nc_ohc=-VRuFlnP5pUAX-VYbgR&_nc_ht=scontent.fcai20-1.fna&oh=881652e0b01efa7e0ef58081cfb3b475&oe=602446D4",
            "https://scontent.fcai20-1.fna.fbcdn.net/v/t1.0-9/136988155_5610148248999138_6545499240991513080_o.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeEAclhPqwdXFBj1AMnxiuJsjLCEd_CIPayMsIR38Ig9rFnS-pbMLy71RqNC_wOXDsmJB5kRXA4e74cWfd012gW5&_nc_ohc=GJxnR1VBfVcAX8lJoZi&_nc_ht=scontent.fcai20-1.fna&oh=17e709a1daf63d8bef0aace015716e87&oe=6022A3EF"
        ],
        "price":250,
        "count":1
        }
    ]);

    const [Cart, setCart] = useState([]);

    
    const AddCart=(id)=>{
    
        const check =Cart.every(item=>{
            return item.id!==id
        })
        if(check){
            const data = products.filter(pro=>{
                return pro.id === id
           }) 
           setCart([...Cart,...data])
        }else{
            alert("This Prodact Is Added in Cart");
        }
    }


    useEffect(()=>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart);
    },[]);

    useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(Cart))
    },[Cart]);
    
    
    const value = {
        product:[products, setproducts] ,
        cart :[Cart, setCart],
        AddCart:AddCart
    }
    
    return (
        <DataContext.Provider value={value} >
            {children}
        </DataContext.Provider>
    )
}
