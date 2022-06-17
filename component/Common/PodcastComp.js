/* 
Author: Mohammad Shaazad 
*/

function PodcastComp() {
    return (
        <>
          <div className="widget podcast">
                <div className="logo"><svg><use href="#podcast"></use></svg></div>
                <p>Jagran Podcast: Listen to the latest news podcasts and headlines audio in Hindi.</p>
                <ul className="banner-podcast">
                    <li>
                        <figure><a href=""><img src="https://www.omnycontent.com/d/programs/fef3bf7a-5ab6-4c89-b228-ac52003f99c5/cf3c0878-cf84-4698-a3aa-ac5400c38577/image.jpg?t=1617992318&size=Medium" alt="" /></a></figure>
                        <p><a href="">Jagran Entertainment News Podcast</a></p>
                    </li>
                    <li>
                        <figure><a href=""><img src="https://www.omnycontent.com/d/programs/fef3bf7a-5ab6-4c89-b228-ac52003f99c5/6ff750a7-91b4-4f45-90aa-ad7f009e5a9f/image.jpg?t=1628502172&size=Medium" alt="" /></a></figure>
                        <p><a href="">The Zabardast Show</a></p>
                    </li>
                </ul>
                <a href="#" className="btn btn-primary btn-block">अभी सुने</a>
            </div>            
        </>
      )
}

export default PodcastComp


