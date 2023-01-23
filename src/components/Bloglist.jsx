const BlogList = ({ title, blogs, handleDelete }) => {
    
        // const blogs = props.blogs
        // const title = props.title
    // You can catch the props like this  👆😒

        // { props.blogs }
        // { props.title }
    // Or like this👆😁

        //const Bloglist = ({blogs, props}) = {} 
        // Destructuring props
    // Or like this 👆😎

    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;