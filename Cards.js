import React, { useState } from 'react'
import { Card } from './Card'

export const Cards = (props) => {
    let courses=props.courses;
    const [likedCourses,setLikedCourses]=useState([]);
    let category=props.category;
    

    //return list of all courses fetch from api
    function getCourses(){
        let allCourses=[];
        if(category==='All')
            {
                Object.values(courses).forEach(array => {
                    array.forEach(courseData=>{
                        allCourses.push(courseData);
                    })
                })
                return allCourses;
            }
            else{
                return courses[category];
            }
    }


  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
        getCourses().map((course)=>{
            return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
        }
    </div>
  )
}
