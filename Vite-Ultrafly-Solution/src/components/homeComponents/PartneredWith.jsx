import images from "../../images/partner.png";
import star from "../../images/star.png"

const PartneredWith = () => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-6 mt-10">PARTNERED WITH</h1>
      <div className="flex flex-row items-center gap-40 mb-10">
        <div>
          <img src={images} alt="Partner logo" className="w-80 ml-10" />
        </div>
        <div className="">
          <p>
            <h1 className="text-xl font-extrabold">
            UTIP Technologies is a leading provider of software solutions for
            the Forex and OTC markets, offering a full set of services:
            </h1>
            <br />
           <div className="flex flex-row gap-1">
            <div>
                <img src={star} alt="" className="w-5" />
            </div>
            <div>
            Trading platform with terminals for traders and brokers, ensuring a
            reliable quotes flow;
            </div>
            </div>
            <br />
            <div  className="flex flex-row gap-1">
                <div><img src={star} alt="" className="w-5" /></div>
                <div> CRM designed for brokers and their specific needs;</div>
            </div>
           
            <br />
            <div className="flex flex-row gap-1">
                <div><img src={star} alt="" className="w-5" /></div>
                <div>Trader’s Room as a part of the platform, available vi a PC and
                mobile;</div>
            </div>
            
            <br />
            <div className="flex flex-row gap-1">
                <div><img src={star} alt="" className="w-5" /></div>
                <div>MarketCheese-analytical service with an economic calendar, news feed
                and plenty of widgets & market research;</div>
            </div>
            
            <br />
            <div className="flex flex-row gap-1">
                <div><img src={star} alt="" className="w-5"/></div>
                <div>Wide partner network: payment solutions, affiliation, company
                incorporation and liquidity;</div>
            </div>
            <br />
            <div className="flex flex-row gap-1">
                <div><img src={star} alt="" className="w-5"/></div>
                <div>Regular free digests on the partner’s services;</div>

            </div>
            <br />

            <div className="flex flex-row gap-1">
                <div><img src={star} alt="" className="w-5"/></div>
                <div>Profitable partnership programs for referrals, resellers, and tech
                partners.</div>
            </div>
            <br />
            
          </p>
        </div>
      </div>
    </>
  );
};

export default PartneredWith;
