
const PostPage = async () => {

    const res = await fetch("http://localhost:5000/post");
    const posts = await res.json();
    console.log(posts)


    return (
        <div>
            <h1>Total Post: {posts.length}</h1>
            {
                posts.map(post => <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p>{post.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"></button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default PostPage;