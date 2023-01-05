import TrendingSection from "../components/trending-section";
import MoreStories from "../components/more-stories";
import Featured from "../components/featured";

// function Featured() {
//   return (
//     <div className="container">
//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//         <img src="/thumb3.jpg" alt="Some alt" className="w-full" />
//         <div className="conteiner flex flex-col justify-center">
//           <p className="text-rose-600">Arts</p>
//           <h1 className="text-4xl font-bold">
//             Closing Paris fashion week from Buenos Aires
//           </h1>
//           <p>By Ismael Amezcua | June 2022</p>
//           <p className="py-8 text-xl">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
//             omnis a ipsum nesciunt. Dicta, ad? Autem, quasi? Veniam, doloribus
//             ipsa? Nesciunt, molestiae saepe minima maiores consectetur quaerat
//             perspiciatis vero molestias!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

function PostHeader(props: {
  title: string;
  date: string;
  author: string;
  photographer: string;
}) {
  const { title, date, author, photographer } = props;

  return (
    <div className="mx-auto-max-w-6xl container">
      <div className="sticky top-0 z-50">
        <h1 className="mt-8 text-6xl font-bold">{title}</h1>
        <p>{date}</p>
        <p>
          Words: {author} | Photography: {photographer}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-6xl">
        <Featured />
        <MoreStories />
      </div>

      <TrendingSection />
    </>
  );
}
