import Layout from "@/DashboardLayout/Layout";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://quikey-server-konkomaji.vercel.app/quikey-contact"
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

const quikeyInbox = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <Layout>
        {data.map((contact) => (
          <Link href={`/jskjg/quikey-inbox/${contact._id}`}>
            <div className="border-b-2 border-gray-200 flex justify-between space-x-8">
              <div className="w-1/3 p-4">
                <h1>{contact.email}</h1>
              </div>
              <div className="w-1/3 p-4">
                <p>{contact.message.slice(0, 50)}</p>
              </div>
              <div className="w-1/3 p-4">
                <p>{contact.createdAt}</p>
              </div>
            </div>
          </Link>
        ))}
      </Layout>
    </div>
  );
};

export default quikeyInbox;
