/* 
Author: Mohammad Shaazad 
*/

import Link  from "next/link";
function InTheNews () {
    return(
        <div className="inTheNews">
 <h2>जागरण फोकस</h2>
<div id="inTheNews" className="Scroll">
    <ul>
        <li><Link href="listing.html"><a>कोरोना</a></Link></li>
        <li><Link href="https://www.jagran.com/koo.html?itm_medium=Bharat-Ki-Aawaz&itm_source=dsktp&itm_campaign=navigation"><a target={"_blank"}>भारत की आवाज</a></Link></li>
        <li><Link href="listing.html"><a>कोरोना टीकाकरण</a></Link></li>
        <li><Link href="listing.html"><a>बिहार पंचायत चुनाव 2021</a></Link></li>
        <li><Link href="listing.html"><a>किसान आंदोलन</a></Link></li>
    </ul>                   
</div>
 
        </div>
    );
}

export default InTheNews;

