import { useState } from "react";
import BlogList from "./components/Bloglist";


const Home = () => {
    const [blogs, setblogs] = useState([
        { title: 'My new Website', body: 'lorem ipsum...', author: 'Mario', id: 1},
        { title: 'Welcome Guys', body: 'lorem ipsum...', author: 'Yoshi', id: 2},
        { title: 'Hellow Guys, Welcome', body: 'lorem ipsum...', author: 'Luigi', id: 3},
        { title: 'Website Mario', body: 'lorem ipsum...', author: 'Mario', id: 4}
    ]);


    // function generatedText() {
    //     const charaters = 'abcdefghijklmnopqrstuvwxyz';
    //     const charatersLength = charaters.length
    //     for (let i = 0; i < charatersLength.length; i++) {
    //         charaters.charAt(Math.floor(Math.random() * charatersLength))
    //     }
    // }

    function generatedId() {
        return Date.now()
    }
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(newBlogs)
        console.log(id);
    }

    const addBlogsList = () => {
        setblogs([...blogs,{
            title: "Andi",
            body: "Lorem Ipsum..",
            author: "Gian",
            id: generatedId(),
        }])

        
    }
    console.log(blogs);

    return (
        <div className="Home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blogs) => blogs.author === 'Mario')} title="Mario's blogs" /> */}
            <button onClick={addBlogsList}>Add blogs</button>
        </div>
    )
}

export default Home;