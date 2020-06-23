import React, { useRef, useEffect, useState } from "react"
import withLayout from '../components/layout1';
import SEO from "../components/seo";
import { TweenMax, Power3 } from 'gsap';
import Menu from '../components/menu';
import ReactRellax from 'react-rellax';

const IndexPage = () => {

  const [title, setTitle] = useState('');
  let homeLineRef = useRef(null);

  useEffect(() => {
    takeTitleFromURLtrimSlashes();
  }, [])

  const takeTitleFromURLtrimSlashes = () => {
    const str = window.location.pathname.replace(/\//g, "");
    setTitle(str);
  }

  useEffect(() => {
    TweenMax.fromTo(homeLineRef, .4, { width: 0 }, { width: '82%', ease: Power3.easeIn, delay: .7 });
  }, []);
  
  return (

    <React.Fragment>
    
    <SEO title="Home" />

    
    
      
      <div className="header plop">
        <div id="bg">

        <ReactRellax speed={7} style={{ height: '100%' }}>
        
          <div className="flex-center flex-col h-100">
            <h1 className="main-title">{title ? title : 'Funk-27'}</h1>
            <div ref={ref => homeLineRef = ref} className="divSpanLineRef"></div>  
          </div>

        </ReactRellax>
        </div>
      </div>

    

    
    <ReactRellax>
      <section>
        <h2 className="section__title">WHO WE ARE</h2>
        <p className="section__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet ultricies ligula. Phasellus eget elit aliquet nibh rutrum condimentum. Suspendisse accumsan elit in augue volutpat, sed pellentesque felis elementum. Praesent tristique nibh sapien, vel luctus ante laoreet vel. Aenean laoreet, neque ultricies faucibus vulputate, nulla turpis maximus est, vitae ullamcorper mauris purus id ipsum. Pellentesque finibus molestie diam, id suscipit enim convallis in. Praesent vitae odio quis nibh blandit suscipit id in augue. Quisque volutpat sed erat eget finibus. Fusce a maximus elit.

        Nullam a orci ex. Nam condimentum sed velit a imperdiet. Morbi tempor purus mi, et scelerisque nunc rhoncus in. Curabitur sit amet ligula hendrerit, accumsan turpis vitae, tincidunt risus. Mauris consequat eu est sit amet condimentum. Aenean commodo posuere condimentum. Sed lobortis elementum mauris, eget mollis nisi efficitur non. Suspendisse malesuada nisl a elit ultrices gravida. Sed malesuada risus eu rutrum aliquet. Fusce quis sapien nec lacus tempor tristique.
        
        Pellentesque ac lacinia erat. Morbi egestas suscipit sem nec cursus. Etiam sollicitudin id eros et elementum. Nunc varius pellentesque nisl. Duis ullamcorper tellus elit, ac mattis ante venenatis ut. Praesent auctor leo et nulla convallis consequat. Aenean imperdiet elementum ex id pretium. Maecenas justo ante, aliquam vel tellus eget, egestas hendrerit massa.
        
        Nunc feugiat metus ac faucibus euismod. Etiam malesuada massa condimentum pellentesque varius. Suspendisse nec faucibus libero. Proin dignissim consectetur sapien, vitae ornare neque congue nec. Phasellus eu dui tristique, rhoncus ipsum at, aliquet ante. Duis imperdiet, lacus in vestibulum dictum, mauris sapien facilisis justo, a congue tortor augue sit amet massa. Cras consequat, sapien fermentum semper vestibulum, ex turpis mollis velit, ut pretium ante odio sit amet lacus. Proin quis facilisis metus, et faucibus diam. Ut vulputate consectetur ante nec dapibus. Etiam sit amet finibus quam, eget semper magna. Nam non neque vulputate ante finibus placerat eget fermentum purus. Pellentesque tristique cursus ornare. Fusce ac neque id risus ornare porta. Praesent ut faucibus libero. Fusce consequat at neque ac sollicitudin.</p>

      
      </section>
    
    </ReactRellax>
  
   
    </React.Fragment>


      

  );

}


export default withLayout(IndexPage);
 