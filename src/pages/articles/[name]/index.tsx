// ** Next Imports
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import type { ReactElement } from "react";
import Image from "next/image";

// ** Amplify Imports
import { withSSRContext } from "aws-amplify";
import { getArticle } from "../../../graphql/queries";
import UserLayout from "../../../layouts/UserLayout";

// ** Types
import { Article } from "../../../API";

export const getServerSideProps: GetServerSideProps<{
  data: Article;
}> = async (context) => {
  const { name } = context.query;

  const SSR = withSSRContext();

  const data = await SSR.API.graphql({
    query: getArticle,
    variables: { id: name },
    authMode: "API_KEY",
  });

  //TODO: Change approved to not approved
  if (!data?.data?.getArticle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data.getArticle,
    },
  };
};

export default function ArticleDetail({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const createdTime = new Date(data.createdAt);
  const updatedTime = new Date(data.updatedAt);

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{data.title} - Awesome Polka</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section className=" mb-16 bg-white">
        <div className="container px-4 py-20 mx-auto border-y-[3px] border-indigo-700">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="text-xl font-bold text-gray-400 mb-4">
              {data.project?.name} • {createdTime.toLocaleDateString()}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">
              {data.title}
            </h1>
            <p className="text-xl font-extrabold leading-8 mb-6">
              {data.description}
            </p>
            <span className="inline-flex h-7 items-center justify-center text-xs font-extrabold px-4 text-indigo-900 rounded border border-indigo-900 bg-green-200">
              {"Author: " + data.project?.user?.username}
            </span>
            <span className="ml-2 inline-flex h-7 items-center justify-center text-xs font-extrabold px-4 text-indigo-900 rounded border border-indigo-900 bg-orange-200">
              {"Last Update: " + updatedTime.toLocaleString()}
            </span>
          </div>
          <div className="mx-auto text-center mb-10">
            <Image
              width={770}
              height={500}
              src={data.image}
              alt={data.title + "_image"}
              className="mx-auto rounded-lg"
            />
          </div>
          <div
            className="text-justify max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.body }}
          ></div>
          <div className="md:flex justify-center items-center mt-12">
            <a
              className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-6 py-3 px-8 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
              href="#"
            >
              Copy Link
            </a>
            <a
              className="inline-flex items-center justify-center w-14 h-14 mr-6 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow"
              href="#"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1798 27.6364V17.0214H21.8109L22.3557 12.8833H18.1798V10.2417C18.1798 9.04402 18.5175 8.22781 20.2705 8.22781L22.5027 8.22691V4.52566C22.1166 4.47646 20.7916 4.36365 19.2493 4.36365C16.0288 4.36365 13.824 6.29175 13.824 9.83189V12.8833H10.1818V17.0214H13.824V27.6364H18.1798Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              className="inline-flex items-center justify-center w-14 h-14 mr-6 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow"
              href="#"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.13417 0.909058H19.8655C23.8497 0.909058 27.0911 4.15039 27.0909 8.13429V19.8656C27.0909 23.8495 23.8497 27.0909 19.8655 27.0909H8.13417C4.15026 27.0909 0.909088 23.8497 0.909088 19.8656V8.13429C0.909088 4.15039 4.15026 0.909058 8.13417 0.909058ZM19.8657 24.7679C22.5688 24.7679 24.7681 22.5688 24.7681 19.8656H24.7679V8.13429C24.7679 5.43128 22.5687 3.23204 19.8655 3.23204H8.13417C5.43115 3.23204 3.23207 5.43128 3.23207 8.13429V19.8656C3.23207 22.5688 5.43115 24.7681 8.13417 24.7679H19.8657ZM7.14285 14.0001C7.14285 10.219 10.2189 7.14282 14 7.14282C17.7811 7.14282 20.8571 10.219 20.8571 14.0001C20.8571 17.7811 17.7811 20.8571 14 20.8571C10.2189 20.8571 7.14285 17.7811 7.14285 14.0001ZM9.50397 14C9.50397 16.479 11.521 18.4958 14 18.4958C16.479 18.4958 18.496 16.479 18.496 14C18.496 11.5207 16.4792 9.50383 14 9.50383C11.5208 9.50383 9.50397 11.5207 9.50397 14Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a
              className="inline-flex items-center justify-center w-14 h-14 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow"
              href="#"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.0909 8.19468C28.1808 8.59795 27.2042 8.87145 26.1782 8.99355C27.2259 8.3662 28.0278 7.37113 28.4079 6.18907C27.4252 6.77004 26.3404 7.19189 25.1846 7.42058C24.2591 6.43323 22.9426 5.81824 21.4824 5.81824C18.681 5.81824 16.4097 8.08963 16.4097 10.8895C16.4097 11.2866 16.4545 11.6744 16.541 12.0453C12.3258 11.8336 8.58808 9.81404 6.08646 6.74531C5.64917 7.49319 5.4004 8.36462 5.4004 9.29484C5.4004 11.0548 6.2966 12.6077 7.65636 13.5162C6.82505 13.4884 6.04319 13.2597 5.3587 12.8796V12.943C5.3587 15.3998 7.10783 17.4502 9.42711 17.9169C9.00218 18.0312 8.5541 18.0946 8.09054 18.0946C7.76299 18.0946 7.44622 18.0621 7.13563 18.0003C7.78149 20.0167 9.65426 21.4831 11.8731 21.5233C10.1379 22.883 7.94994 23.6912 5.57349 23.6912C5.16404 23.6912 4.76072 23.6664 4.36363 23.6216C6.60876 25.0633 9.27418 25.9039 12.1389 25.9039C21.4701 25.9039 26.5707 18.1749 26.5707 11.472L26.5537 10.8153C27.5503 10.1045 28.4125 9.21141 29.0909 8.19468Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

ArticleDetail.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
