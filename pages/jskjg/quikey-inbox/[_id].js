import Layout from "@/DashboardLayout/Layout";
import { useRouter } from "next/router";

const MessageDetails = ({ data }) => {
  const router = useRouter();
  const { _id } = router.query;
  return (
    <Layout>
      <div className="p-4">
        <h1>Name : {data.firstName} {data.lastName}</h1>
        <h1>Email : {data.email}</h1>
        <h1>Phone No : {data.phoneNo}</h1>
        <br />
        <br/>
        <h1>Message : {data.message}</h1>
      </div>
    </Layout>
  );
};

export default MessageDetails;

export const getStaticPaths = async () => {
  const res = await fetch('https://quikey-server-konkomaji.vercel.app/quikey-contact/');
  const data = await res.json();

  const paths = data.map((message) => ({
    params: { _id: message._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { _id } = params;
  const res = await fetch(
    `https://quikey-server-konkomaji.vercel.app/quikey-contact/${_id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
