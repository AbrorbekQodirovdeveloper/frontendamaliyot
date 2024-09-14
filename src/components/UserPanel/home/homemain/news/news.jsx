import React from 'react';
import './news.css';
import { Link } from 'react-router-dom';


function News() {
  return (
<div className="news">
  <h3>News</h3>
   <div className="newstitle">
        <h1>Discover weekly content about organic food, & more</h1>
        <button><Link to="/Blog">More News</Link></button>
   </div>
   <div className="newsrow">
         <div className="newsbg1">
                <div className="newsbgtitle">
                               <h4><i class="fa-solid fa-user"></i>By Rachi Card</h4>
                               <h2>The Benefits of Vitamin D & How to Get It</h2>
                               <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                               <li><Link to="/Blog"><button>Read More</button></Link></li>
                </div>
         </div>
         <div className="newsbg2">
         <div className="newsbgtitle">
         <h4><i class="fa-solid fa-user"></i>By Rachi Card</h4>
                               <h2>Our Favourite Summertime Tommeto</h2>
                               <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                               <li><Link to="/Blog"><button>Read More</button></Link></li>
                 </div>
          </div>
   </div>
</div>

  );
}

export default News;
