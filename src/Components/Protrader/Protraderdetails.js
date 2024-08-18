import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Protraderdetails = () => {
const [active, setActive] = useState("Table")
const {type}=useParams()
const [tableData,setTableData]=useState(
    [{
        time:"9.15",
        fii_pro:"11.3",
        fii_pro_status:"Bullish",
        retail:"-26.6",
        retail_status:"Bearish",
        pro_retail:"38.1",
        sentiment:"Bullish",
        ce:"6220898",
        pe:"7909448",
        ce_pe:"-1688550",
        future:"-37020"
    },{
        time:"9.16",
        fii_pro:"-15.6",
        fii_pro_status:"Bullish",
        retail:"-25.3",
        retail_status:"Bearish",
        pro_retail:"40.9",
        sentiment:"Bullish",
        ce:"9847616.25",
        pe:"10436285.625",
        ce_pe:"-588669.375",
        future:"-31811.25"
    },
    {
        time:"9.17",
        fii_pro:"15.6",
        fii_pro_status:"Bearish",
        retail:"-25.3",
        retail_status:"Bearish",
        pro_retail:"40.9",
        sentiment:"Bullish",
        ce:"9847616.25",
        pe:"10436285.625",
        ce_pe:"-588669.375",
        future:"-31811.25"
    },{
        "time": "9.18",
        "fii_pro": "17.5",
        "fii_pro_status": "Bullish",
        "retail": "-24.8",
        "retail_status": "Bearish",
        "pro_retail": "42.5",
        "sentiment": "Bullish",
        "ce": "10246789",
        "pe": "10657845",
        "ce_pe": "-411056",
        "future": "-29500"
    },
    {
        "time": "9.19",
        "fii_pro": "-10.2",
        "fii_pro_status": "Bearish",
        "retail": "-22.1",
        "retail_status": "Bearish",
        "pro_retail": "36.8",
        "sentiment": "Bearish",
        "ce": "9856678",
        "pe": "10957845",
        "ce_pe": "-1091167",
        "future": "-35689"
    },
    {
        "time": "9.20",
        "fii_pro": "12.8",
        "fii_pro_status": "Bullish",
        "retail": "-27.5",
        "retail_status": "Bearish",
        "pro_retail": "39.2",
        "sentiment": "Bullish",
        "ce": "10658902",
        "pe": "10897654",
        "ce_pe": "-238752",
        "future": "-41220"
    },
    {
        "time": "9.21",
        "fii_pro": "-5.9",
        "fii_pro_status": "Bearish",
        "retail": "-29.1",
        "retail_status": "Bearish",
        "pro_retail": "43.3",
        "sentiment": "Bearish",
        "ce": "9876543",
        "pe": "11020321",
        "ce_pe": "-1143778",
        "future": "-36500"
    },
    {
        "time": "9.22",
        "fii_pro": "18.7",
        "fii_pro_status": "Bullish",
        "retail": "-26.2",
        "retail_status": "Bearish",
        "pro_retail": "41.5",
        "sentiment": "Bullish",
        "ce": "10456789",
        "pe": "10578945",
        "ce_pe": "-122156",
        "future": "-29000"
    },
    {
        "time": "9.23",
        "fii_pro": "-7.4",
        "fii_pro_status": "Bearish",
        "retail": "-28.6",
        "retail_status": "Bearish",
        "pro_retail": "40.8",
        "sentiment": "Bearish",
        "ce": "9843200",
        "pe": "10765432",
        "ce_pe": "-925232",
        "future": "-34560"
    },
    {
        "time": "9.24",
        "fii_pro": "13.5",
        "fii_pro_status": "Bullish",
        "retail": "-25.9",
        "retail_status": "Bearish",
        "pro_retail": "39.7",
        "sentiment": "Bullish",
        "ce": "10756432",
        "pe": "10978965",
        "ce_pe": "-222533",
        "future": "-32000"
    },
    {
        "time": "9.25",
        "fii_pro": "-9.8",
        "fii_pro_status": "Bearish",
        "retail": "-27.3",
        "retail_status": "Bearish",
        "pro_retail": "42.1",
        "sentiment": "Bearish",
        "ce": "9956342",
        "pe": "11127645",
        "ce_pe": "-1171303",
        "future": "-37200"
    },
    {
        "time": "9.26",
        "fii_pro": "16.7",
        "fii_pro_status": "Bullish",
        "retail": "-26.7",
        "retail_status": "Bearish",
        "pro_retail": "40.2",
        "sentiment": "Bullish",
        "ce": "10356789",
        "pe": "10694567",
        "ce_pe": "-337778",
        "future": "-31100"
    },
    {
        "time": "9.27",
        "fii_pro": "-8.2",
        "fii_pro_status": "Bearish",
        "retail": "-28.9",
        "retail_status": "Bearish",
        "pro_retail": "44.3",
        "sentiment": "Bearish",
        "ce": "9812345",
        "pe": "11056789",
        "ce_pe": "-1244444",
        "future": "-35500"
    },
    {
        "time": "9.28",
        "fii_pro": "14.3",
        "fii_pro_status": "Bullish",
        "retail": "-25.4",
        "retail_status": "Bearish",
        "pro_retail": "38.6",
        "sentiment": "Bullish",
        "ce": "10787654",
        "pe": "10891234",
        "ce_pe": "-103580",
        "future": "-32900"
    },
    {
        "time": "9.29",
        "fii_pro": "-6.7",
        "fii_pro_status": "Bearish",
        "retail": "-29.5",
        "retail_status": "Bearish",
        "pro_retail": "41.7",
        "sentiment": "Bearish",
        "ce": "9976543",
        "pe": "11234567",
        "ce_pe": "-1258014",
        "future": "-38000"
    },
    {
        "time": "9.30",
        "fii_pro": "19.4",
        "fii_pro_status": "Bullish",
        "retail": "-26.9",
        "retail_status": "Bearish",
        "pro_retail": "43.1",
        "sentiment": "Bullish",
        "ce": "10578965",
        "pe": "10765432",
        "ce_pe": "-186467",
        "future": "-31000"
    },
    {
        "time": "9.31",
        "fii_pro": "-5.6",
        "fii_pro_status": "Bearish",
        "retail": "-30.2",
        "retail_status": "Bearish",
        "pro_retail": "45.3",
        "sentiment": "Bearish",
        "ce": "9832123",
        "pe": "11343210",
        "ce_pe": "-1511097",
        "future": "-37000"
    },
    {
        "time": "9.32",
        "fii_pro": "17.8",
        "fii_pro_status": "Bullish",
        "retail": "-27.6",
        "retail_status": "Bearish",
        "pro_retail": "41.9",
        "sentiment": "Bullish",
        "ce": "10875432",
        "pe": "10987654",
        "ce_pe": "-112222",
        "future": "-30000"
    },
    {
        "time": "9.33",
        "fii_pro": "-7.1",
        "fii_pro_status": "Bearish",
        "retail": "-28.8",
        "retail_status": "Bearish",
        "pro_retail": "40.4",
        "sentiment": "Bearish",
        "ce": "9932109",
        "pe": "11134567",
        "ce_pe": "-1202468",
        "future": "-35560"
    },
    {
        "time": "9.34",
        "fii_pro": "15.2",
        "fii_pro_status": "Bullish",
        "retail": "-25.7",
        "retail_status": "Bearish",
        "pro_retail": "39.9",
        "sentiment": "Bullish",
        "ce": "10712345",
        "pe": "10954321",
        "ce_pe": "-241976",
        "future": "-31200"
    },
    {
        "time": "9.35",
        "fii_pro": "-8.4",
        "fii_pro_status": "Bearish",
        "retail": "-30.1",
        "retail_status": "Bearish",
        "pro_retail": "43.8",
        "sentiment": "Bearish",
        "ce": "9823456",
        "pe": "11265432",
        "ce_pe": "-1431986",
        "future": "-36200"
    },
    ]
)
  return (
    <div className='container'>
        <div className="head mt-70">
            <h3 className="text-center user-head">{type.toUpperCase()}</h3>
        </div>

        <div className="trend_toggle mb-3 me-5">
            <button className={active === "Table" ? "btn active" : "btn"} onClick={() => setActive("Table")}>Table</button>
            <button className={active === "Chart" ? "btn active" : "btn"} onClick={() => setActive("Chart")}>Chart</button>
        </div>
        {active==="Table"&&
        <div className='d-flex justify-content-center mt-4'>
        <table className='table-pro'>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Fii & Pro Trader</th>
                    <th>Fii & Pro Trader</th>
                    <th>Retail Trader</th>
                    <th>Retail Trader</th>
                    <th>Pro-Retail</th>
                    <th>Sentiment</th>
                    <th>CE_ (ATV)</th>
                    <th>PE_(ATV)</th>
                    <th>Future_Atv</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((v,i)=>{
                    return(
                        <tr>
                            <td>{v.time}</td>
                            <td>{v.fii_pro}</td>
                            <td className={v.fii_pro_status==="Bullish"?"bullish":"bearish"}>{v.fii_pro_status}</td>
                            <td>{v.retail}</td>
                            <td className={v.retail_status==="Bullish"?"bullish":"bearish"}>{v.retail_status}</td>
                            <td>{v.pro_retail}</td>
                            <td className={v.sentiment==="Bullish"?"bullish":"bearish"}>{v.sentiment}</td>
                            <td>{v.ce}</td>
                            <td>{v.pe}</td>
                            <td>{v.ce_pe}</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
        </div>
        }
    </div>
  )
}

export default Protraderdetails