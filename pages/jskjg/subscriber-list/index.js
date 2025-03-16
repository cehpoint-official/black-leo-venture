const { default: Layout } = require("@/DashboardLayout/Layout");

export const getStaticProps = async () => {
  const res = await fetch(
    "https://quikey-server-konkomaji.vercel.app/subscribers"
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

const subscriber = ({ data }) => {
  return (
    <Layout>
      <div className="pt-4 pl-4">
        <ul>
          {data.map((datae, index) => (
            <li key={index}>
              {index + 1}. {datae.email}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default subscriber;
