const Home = () => {
  const { data } = fetch("/").then((res) => {
    console.log(data);
  });

  return (
    <div>
      <h1>HI</h1>
    </div>
  );
};

export default Home;
