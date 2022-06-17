
import Link from 'next/link'

function SubscribeWidget (params) {
    return (
        <>
        {
            <div className="subscribe space-bottom">
            <div className="banner">
                <div className="logo"><svg><use href="#jagranplus"></use></svg></div>
                <p>पर सब्सक्राइब करें और आकर्षक पुरस्कार जीतें <a href="subscription.html" className="btn btn-primary">Subscribe</a></p>
                <div className="close"><a href="javascript:void(0)" className="subscribe-close"><svg><use href="#close"></use></svg></a></div>
            </div>
        </div>
        }
       </>)
}
export default SubscribeWidget