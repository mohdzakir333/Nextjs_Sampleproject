import Link from "next/link";

export default function Custom404() {
    return (
      <div className="flex items-center justify-center h-screen mx-2 my-2 overflow-hidden ">
        <div className="px-6 py-4 rounded shadow-lg">
          <div className="mb-2 text-xl font-bold">
          <style>{`
  .error-container {text-align: center;font-size: 180px; font-family: 'Catamaran', sans-serif; font-weight: 800;  margin:0px 15px;}
.error-container > span { display: inline-block;  line-height: 0.7;  position: relative;  color: #FFB485;}
.error-container > span > span {  display: inline-block;  position: relative;}
.error-container > span:nth-of-type(1) {  perspective: 1000px;  perspective-origin: 500% 50%;  color: #F0E395;}
.error-container > span:nth-of-type(1) > span {  transform-origin: 50% 100% 0px;  transform: rotateX(0);  animation: easyoutelastic 8s infinite;}
.error-container > span:nth-of-type(3) { perspective: none; perspective-origin: 50% 50%;  color: #D15C95;}
.error-container > span:nth-of-type(3) > span { transform-origin: 100% 100% 0px; transform: rotate(0deg);  animation: rotatedrop 8s infinite;}
@keyframes easyoutelastic {  0% {    transform: rotateX(0);  }
  9% {  transform: rotateX(210deg);  }
  13% {transform: rotateX(150deg); }
  16% {transform: rotateX(200deg);  }
  18% { transform: rotateX(170deg); }
  20% { transform: rotateX(180deg);}
  60% { transform: rotateX(180deg);}
  80% { transform: rotateX(0);}
  100% { transform: rotateX(0);}
}
@keyframes rotatedrop { 0% { transform: rotate(0);}
  10% { transform: rotate(30deg);}
  15% { transform: rotate(90deg);}
  70% {transform: rotate(90deg);}
  80% {transform: rotate(0);}
  100% { transform: rotateX(0);}
}
* {-webkit-box-sizing: border-box;  -moz-box-sizing: border-box;  box-sizing: border-box;}
h1 { text-align: center;  margin: 30px 15px; color:#e31928;}
.zoom-area { max-width: 490px; margin:10px auto 10px; font-size: 19px;  text-align: center; color:#978686;}
.link-container {  text-align: center;}
a.more-link {  text-transform: uppercase;  font-size: 13px;    background-color: #e31928;    padding: 10px 15px;
    border-radius: 0;    color: #fff;    display: inline-block;    margin-right: 5px;    margin-bottom: 5px;
    line-height: 1.5;    text-decoration: none;  letter-spacing: 1px;}
`}</style>
          <h1>आप जिस पेज़ को देखना चाहते है वो उपलब्ध नहीं है,</h1>
<p className="zoom-area"><Link href="/"><a>कृपया क्लिक करके</a></Link> होम पेज पर वापस जाइए!</p>
<section className="error-container">
  <span><span>4</span></span>
  <span>0</span>
  <span><span>4</span></span>
</section>
<div className="link-container">
<Link href="/"><a className="more-link">होम पेज पर वापस जाइए!</a></Link>
</div>
          </div>
        </div>
      </div>
    );
  }