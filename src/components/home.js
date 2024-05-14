import React, { useState } from "react";
import "./home.css";
import Card from "./card";

function Home(){

    const [gender, setGender] = useState();
    const [skills, setSkills] = useState({"Java":false, "HTML":false, "CSS":false});
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [website, setWebsite] = useState();
    const [image, setImage] = useState();
    const [studentInfo, setStudentInfo] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleWebsite = (e) => {
        setWebsite(e.target.value);
    }

    const handleImage = (e) => {
        setImage(e.target.value);
    }

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    const handleSkills = (e) => {
        const { value, checked } = e.target;
        setSkills(prevState => ({
            ...prevState,
            [value]: checked
          }));
    };

    const enrollStudent = (e) => {
        var arr = studentInfo;
        var obj = {
            "name":name,
            "email":email,
            "website":website,
            "image":image,
            "gender":gender,
            "skills": skills
        }
        arr.push(obj);
        setStudentInfo(arr);
        setIsVisible(!isVisible);
        console.log(studentInfo);
    }

    const clear = (e) => {

    }


    return(
        <div className="home">
            <div className="heading">
            <h1>Student Enrollment from</h1>
            </div>
            <div className="field">
            <div className="form">
            <div className="name">
            Name <input type="text" className="nameInput" onChange={handleName}/>
            </div>
            <br/>
            <div className="email">
            Email <input type="email" className="emailInput" onChange={handleEmail}/>
            </div>
            <br/>
            <div className="website">
            Website <input type="url" className="websiteInput" onChange={handleWebsite}/>
            </div>
            <br/>
            <div className="image">
            Image link <input type="url" className="imageInput" onChange={handleImage}/>
            </div>
            <br/>
            <div className="gender">
            Gender <div className="radioOptions"><label>
            <input 
            type="radio" 
            name="gender" 
            value="Male" 
            onChange={handleGender}
            />
            Male
            </label><br />
            <label>
            <input 
            type="radio" 
            name="gender" 
            value="Female" 
            onChange={handleGender}
            />
            Female
            </label>
            </div>
            </div>
            <br/>
            <div className="skills">
            Skills <div className="checkboxes"> 
            <input 
            type="checkbox" 
            value="Java" 
            onChange={handleSkills} 
            /> Java
            <br />
            
            <input 
            type="checkbox" 
            value="HTML" 
            onChange={handleSkills} 
            /> HTML
            <br />
            
            <input 
            type="checkbox" 
            value="CSS" 
            onChange={handleSkills} 
            /> CSS
            </div></div><br />
            <div className="buttons">
            <button onClick={enrollStudent} className="enrollButton">Enroll Student</button>
            <button onClick={clear} className="clearButton">Clear</button>
            </div>
        </div>
        <div className="list">
            <b><h2>Enrolled Students</h2></b>
            <div className="studentList">
                {
                    studentInfo.map((studentInfo, index) => (
                        <div className="inner" style={{display:"flex", justifyContent:"center", textAlign:"center", padding:"1%", width:"100%"}}>
                            <Card obj={studentInfo}/>
                        </div>
                    ))
                }
            </div>
        </div>
        </div>
        </div>
    );
}

export default Home;