import {BreadcrumData} from "../Utils/CommonUtils";

/*
Author: Mohammad Shaazad
*/
function Breadcrumdetails(props) {


    return (
        <>
            <ul className="breadcrum" id="breadcrum1">
                <li><a href="/">हिंदी न्यूज़</a></li>
                <li><a href={BreadcrumData(props.data).categoryURL}>{BreadcrumData(props.data).category}</a></li>
                <li><a href={BreadcrumData(props.data).subcategoryURL}>{BreadcrumData(props.data).subcategory}</a></li>
            </ul>
        </>
      )
}

export default Breadcrumdetails
