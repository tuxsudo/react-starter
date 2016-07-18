import Helmet from 'react-helmet';

const Home = () => (
    <div>
        <Helmet
            title="React Starter Home"
            meta={[
                {"name": "description", "content": "A React Starter"},
                {"property": "og:type", "content": "article"}
            ]}
        />
        <h1>Welcome Home</h1>
    </div>
);



export default Home;
