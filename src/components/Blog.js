import React from 'react';
import { Row, Col } from "react-bootstrap";
import MyCard from './ui/MyCard';

function Blog(){
    var blogs = [
        {
            name: "Study skills",
            textValue: "Study skills, academic skill, or study strategies are approaches applied to learning. They are generally critical to success in school,[1] considered essential for acquiring good grades, and useful for learning throughout one's life.",
            imgUrl: "https://tse1.mm.bing.net/th?id=OIP.v7gEKUNUq-Jy-ARL41hoxAHaE7&pid=Api&rs=1&c=1&qlt=95&w=152&h=101",
            btnLink: "https://en.wikipedia.org/wiki/Study_skills",
        },
        {
            name: "Tree",
            textValue: "In botany, a tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves in most species. In some usages, the definition of a tree may be narrower, including only woody plants with",
            imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            btnLink: "https://en.wikipedia.org/wiki/Tree"
        },
        {
            name: "River",
            textValue: "A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases, a river flows into the ground and becomes dry at the end of its course ",
            imgUrl: "https://www.whatsappimages.in/wp-content/uploads/2020/11/Boys-Free-Feeling-Sad-Pics-Images-Download.jpg",
            btnLink: "https://en.wikipedia.org/wiki/River"
        }
    ];
    return (
        <>
            <div id="blog" className="menuSections">
                <h1>Blog</h1>
                <Row className="m-0">
                    {
                        blogs.map((item, index) => {
                            return (
                                <Col xs={12} sm={4} className="mySections" key={index}>
                                    <MyCard pricingValue={item}/>
                                </Col>
                            )
                        })
                    }                    
                </Row>
            </div>
        </>
  
    )
}
export default Blog;